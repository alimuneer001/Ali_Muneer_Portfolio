import fs from 'node:fs';
import vm from 'node:vm';
import { execFileSync } from 'node:child_process';
import { PROJECTS } from './dist/portfolio-data.js';
const html = fs.readFileSync('dist/index.html', 'utf8');
for (const [, attrs, code] of html.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)) {
  if (!attrs.includes('src=') && !attrs.includes('type="module"')) new vm.Script(code);
}
for (const name of fs.readdirSync('dist').filter(n => n.endsWith('.js'))) execFileSync(process.execPath, ['--check', 'dist/' + name]);
for (const [, resource] of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
  if (/^(https?:|mailto:|javascript:|\$)/.test(resource)) continue;
  if (!fs.existsSync('dist/' + resource.split('?')[0])) throw Error('Missing asset: ' + resource);
}
for (const item of PROJECTS) {
  if (!fs.existsSync('dist/' + item.src)) throw Error('Missing project image');
  if (!item.link.startsWith('https://')) throw Error('Invalid project URL');
}
if (/Jishnu|hello@example|echo__builds|500\+ hours|20\+ projects/.test(html)) throw Error('Template content remains');
console.log('PASS: scripts parse, local assets exist, six real projects have links, and template identity is removed.');
