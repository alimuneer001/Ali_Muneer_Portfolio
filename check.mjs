import fs from 'node:fs';
import { execFileSync } from 'node:child_process';
import { PROJECTS } from './public/scripts/portfolio-data.js';
const html = fs.readFileSync('out/index.html', 'utf8');
for (const name of fs.readdirSync('public/scripts').filter(n => n.endsWith('.js'))) execFileSync(process.execPath, ['--check', 'public/scripts/' + name]);
for (const [, resource] of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
  if (/^(https?:|mailto:|tel:|javascript:|\$)/.test(resource)) continue;
  if (!fs.existsSync('out/' + decodeURIComponent(resource.split('?')[0]))) throw Error('Missing exported asset: ' + resource);
}
for (const item of PROJECTS) {
  if (!fs.existsSync('public/' + item.src)) throw Error('Missing project image');
  if (!item.link.startsWith('https://')) throw Error('Invalid project URL');
}
if (/Jishnu|hello@example|echo__builds|500\+ hours|20\+ projects/.test(html)) throw Error('Template content remains');
if (!html.includes('/_next/')) throw Error('Next.js assets missing from export');
if (html.includes('cdn.tailwindcss.com')) throw Error('Tailwind should be compiled locally');
console.log('PASS: scripts parse, project assets exist, and the Next.js export references valid local files.');
