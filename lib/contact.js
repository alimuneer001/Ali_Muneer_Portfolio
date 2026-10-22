import nodemailer from 'nodemailer';

const services = new Set(['Full Stack Applications', 'Frontend Engineering', 'Backend & APIs', 'Other']);
const emailPattern = /^[^\s@<>,;]+@[^\s@<>,;]+\.[^\s@<>,;]+$/;
const response = (status, message) => Response.json({ message }, { status, headers: { 'Cache-Control': 'no-store' } });

export async function sendContactMail(data, env = process.env, createTransport = nodemailer.createTransport) {
  const port = Number(env.SMTP_PORT || 465);
  const from = env.SMTP_FROM || env.SMTP_USER;
  const to = env.CONTACT_TO || 'alimuneer001@gmail.com';
  if (!env.SMTP_HOST || !env.SMTP_USER || !env.SMTP_PASS || !emailPattern.test(from || '') || !emailPattern.test(to) || !Number.isInteger(port) || port < 1 || port > 65535) {
    throw Object.assign(new Error('Email is not configured'), { code: 'MAIL_NOT_CONFIGURED' });
  }
  const transport = createTransport({
    host: env.SMTP_HOST, port, secure: port === 465, requireTLS: port !== 465,
    auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
    connectionTimeout: 10000, greetingTimeout: 10000, socketTimeout: 15000,
    disableFileAccess: true, disableUrlAccess: true,
  });
  const result = await transport.sendMail({
    from: { name: 'Ali Muneer Portfolio', address: from }, to,
    replyTo: { name: data.name, address: data.email },
    subject: `Portfolio enquiry: ${data.service}`,
    text: `Name: ${data.name}\nEmail: ${data.email}\nService: ${data.service}\n\n${data.message}`,
  });
  if (!result.accepted?.length) throw new Error('Mail server did not accept the message');
}

export function createContactHandler(sendMail = sendContactMail) {
  // Best-effort instance-local throttle. Vercel Firewall can enforce a shared limit.
  const attempts = new Map();
  return async function POST(request) {
    const origin = request.headers.get('origin');
    if (origin && origin !== new URL(request.url).origin) return response(403, 'Please send your message from this website.');
    if (!request.headers.get('content-type')?.includes('application/json')) return response(415, 'Expected a JSON message.');
    const reader = request.body?.getReader();
    if (!reader) return response(400, 'Please complete the contact form.');
    let size = 0; const chunks = [];
    let data;
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        size += value.byteLength;
        if (size > 16384) { await reader.cancel(); return response(413, 'Your message is too long.'); }
        chunks.push(Buffer.from(value));
      }
      data = JSON.parse(Buffer.concat(chunks).toString('utf8'));
    } catch { return response(400, 'The message could not be read.'); }
    if (!data || typeof data !== 'object' || Array.isArray(data)) return response(400, 'Please complete the contact form.');
    if (data.website) return response(400, 'Unable to submit this form.');
    const fields = {};
    for (const key of ['name', 'email', 'service', 'message']) {
      if (typeof data[key] !== 'string') return response(400, 'Please complete every field.');
      fields[key] = data[key].trim();
    }
    if (!fields.name || fields.name.length > 100 || /[\r\n]/.test(fields.name) || fields.email.length > 254 || !emailPattern.test(fields.email) || !services.has(fields.service) || fields.message.length < 10 || fields.message.length > 5000) {
      return response(400, 'Enter a valid name, email and a message between 10 and 5,000 characters.');
    }
    const now = Date.now();
    for (const [key, entry] of attempts) if (entry.until <= now) attempts.delete(key);
    const key = fields.email.toLowerCase();
    const entry = attempts.get(key) || { count: 0, until: now + 600000 };
    if (entry.count >= 5 || attempts.size >= 1000) return response(429, 'Too many attempts. Please try again later.');
    entry.count++; attempts.set(key, entry);
    try {
      await sendMail(fields);
      return response(200, 'Message sent. Thanks for reaching out!');
    } catch (error) {
      // Never log credentials or the visitor's message.
      console.error('Contact email failed:', error.code === 'MAIL_NOT_CONFIGURED' ? 'configuration missing' : 'delivery failed');
      return response(error.code === 'MAIL_NOT_CONFIGURED' ? 503 : 502, 'Email is temporarily unavailable. Please use the email link below.');
    }
  };
}
