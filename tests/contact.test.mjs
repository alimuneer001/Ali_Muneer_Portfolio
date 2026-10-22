import test from 'node:test';
import assert from 'node:assert/strict';
import { createContactHandler, sendContactMail } from '../lib/contact.js';
const valid = { name: 'Test Visitor', email: 'visitor@example.com', service: 'Other', message: 'I would like to discuss a website project.' };
const request = (data, headers = {}) => new Request('https://portfolio.example/api/contact/', { method: 'POST', headers: { 'content-type': 'application/json', origin: 'https://portfolio.example', ...headers }, body: JSON.stringify(data) });
test('valid message is sent once and unwanted recipient fields are discarded', async () => {
 let received; const handler = createContactHandler(async fields => { received = fields; });
 assert.equal((await handler(request({ ...valid, to: 'other@example.com' }))).status, 200);
 assert.deepEqual(received, valid);
});
test('rejects malformed fields, header injection, oversized payloads and cross-origin requests before mail', async () => {
 let calls = 0; const handler = createContactHandler(async () => calls++);
 for (const data of [null, [], {}, {...valid, email:'bad'}, {...valid,name:'Test\r\nBcc: x@example.com'}, {...valid, message:'short'}, {...valid, service:'unknown'}, {...valid,website:'spam'}]) assert.equal((await handler(request(data))).status,400);
 assert.equal((await handler(request({...valid, message:'x'.repeat(17000)}))).status,413);
 assert.equal((await handler(request(valid,{origin:'https://other.example'}))).status,403);
 assert.equal(calls,0);
});
test('delivery failure never reports success', async () => {
 const handler = createContactHandler(async () => { throw new Error('SMTP password must not appear'); });
 const result = await handler(request(valid)); assert.equal(result.status,502);
 assert.ok(!(await result.text()).includes('SMTP password'));
});
test('missing configuration returns unavailable', async () => {
 const handler = createContactHandler(data => sendContactMail(data, {}));
 assert.equal((await handler(request(valid))).status,503);
});
test('throttles repeated submissions in the same server instance', async () => {
 let calls=0; const handler=createContactHandler(async()=>calls++);
 for(let i=0;i<5;i++) assert.equal((await handler(request(valid))).status,200);
 assert.equal((await handler(request(valid))).status,429); assert.equal(calls,5);
});
test('mail uses configured sender and recipient, visitor reply-to, and TLS', async () => {
 let options, message;
 const env={SMTP_HOST:'smtp.example.com',SMTP_PORT:'465',SMTP_USER:'owner@example.com',SMTP_PASS:'test-only',CONTACT_TO:'inbox@example.com'};
 await sendContactMail(valid,env,config=>{options=config;return {sendMail:async data=>{message=data;return {accepted:['inbox@example.com']}}}});
 assert.equal(options.secure,true);assert.equal(options.disableFileAccess,true);
 assert.equal(message.to,'inbox@example.com');assert.equal(message.from.address,'owner@example.com');assert.equal(message.replyTo.address,valid.email);assert.ok(message.text.includes(valid.message));
});
