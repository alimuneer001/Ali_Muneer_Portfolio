from pathlib import Path
from html.parser import HTMLParser
import json, re, shutil

base = Path(__file__).parent
source = (base/'dist/index.html').read_text(encoding='utf-8')
app = base/'app'; components = base/'components'; public = base/'public'; scripts = public/'scripts'
for p in [app,components,scripts]: p.mkdir(exist_ok=True,parents=True)
shutil.copytree(base/'dist/assets', public/'assets', dirs_exist_ok=True)
for name in ['personal.js','flex-carousel.js','works-wheel.js','scroll-expand-media.js','experience-section.js','portfolio-data.js']:
 text=(base/'dist'/name).read_text(encoding='utf-8')
 if name=='experience-section.js': text=text.replace("'./assets/string-tune.mjs'", "'../assets/string-tune.mjs'")
 if name=='portfolio-data.js': text=text.replace('"assets/', '"/assets/')
 (scripts/name).write_text(text,encoding='utf-8')
css=re.search(r'<style>(.*?)</style>',source,re.S)[1]
(app/'globals.css').write_text('@tailwind base;\n@tailwind components;\n@tailwind utilities;\n'+css,encoding='utf-8')
shutil.copyfile(base/'dist/FlexCarousel.css',app/'carousel.css')
shutil.copyfile(base/'dist/personal.css',app/'personal.css')
body=re.search(r'<body[^>]*>(.*?)</body>',source,re.S)[1]
blocks=re.findall(r'<script([^>]*)>(.*?)</script>',body,re.S)
main=next(code for attrs,code in blocks if not attrs.strip())
modules=[code for attrs,code in blocks if 'type="module"' in attrs and code.strip()]
for name,code in zip(['carousel-init.js','wheel-init.js'],modules): (scripts/name).write_text(code,encoding='utf-8')
main += '''\nPromise.allSettled([
  import('/scripts/carousel-init.js'),
  import('/scripts/wheel-init.js'),
  import('/scripts/scroll-expand-media.js'),
  import('/scripts/experience-section.js'),
  import('/scripts/personal.js')
]).then(results => results.forEach(result => {
  if (result.status === 'rejected') console.error('Portfolio component failed to load:', result.reason);
}));\n'''
(scripts/'portfolio-runtime.js').write_text(main,encoding='utf-8')
body=re.sub(r'<script[^>]*>.*?</script>','',body,flags=re.S)
void={'img','input','br','hr','meta','link','source','wbr','area','embed','col'}
class Node:
 def __init__(self,tag,attrs): self.tag=tag; self.attrs=dict(attrs); self.children=[]
class Parser(HTMLParser):
 def __init__(self): super().__init__(convert_charrefs=True); self.root=Node('root',[]); self.stack=[self.root]
 def handle_starttag(self,t,a):
  node=Node(t,a);self.stack[-1].children.append(node)
  if t not in void:self.stack.append(node)
 def handle_startendtag(self,t,a):
  self.handle_starttag(t,a)
  if t not in void:self.handle_endtag(t)
 def handle_endtag(self,t):
  if self.stack[-1].tag==t:self.stack.pop()
  else:raise ValueError('Unexpected closing '+t)
 def handle_data(self,d):
  if d.strip():self.stack[-1].children.append(d)
p=Parser();p.feed(body)
aliases={'class':'className','for':'htmlFor','tabindex':'tabIndex','viewbox':'viewBox','preserveaspectratio':'preserveAspectRatio','crossorigin':'crossOrigin'}
def camel(s):return re.sub(r'-([a-z])',lambda m:m[1].upper(),s)
functions=['toggleMobileMenu','openContactModal','closeContactModal','closeProjectModal','toggleService','selectService','bookSpecificService','submitContactForm','copyContactEmail']
def render(n):
 if isinstance(n,str):return '{'+json.dumps(n,ensure_ascii=False)+'}'
 if n.attrs.get('id')=='theme-toggle':return '<ThemeToggle />'
 attrs=[]
 for key,value in n.attrs.items():
  if key in ['onclick','onsubmit']:
   value=value.replace('this','event.currentTarget')
   for fn in functions:value=re.sub(r'\b'+fn+r'\(', 'window.'+fn+'?.(',value)
   if n.attrs.get('href','').startswith('javascript:'):value='event.preventDefault(); '+value
   attrs.append(('onClick' if key=='onclick' else 'onSubmit')+'={event => { '+value+' }}');continue
  if key=='style':
   style=dict((camel(k.strip()),v.strip()) for k,v in (pair.split(':',1) for pair in value.split(';') if ':' in pair))
   attrs.append('style={'+json.dumps(style)+'}');continue
  if key=='href' and value.startswith('javascript:'):value='#contact'
  if key in ['href','src'] and value.startswith('assets/'):value='/'+value
  name=aliases.get(key,key if key.startswith(('aria-','data-','string-')) else camel(key))
  attrs.append(name if value is None else name+'='+json.dumps(value,ensure_ascii=False))
 head='<'+n.tag+(' '+' '.join(attrs) if attrs else '')
 if n.tag in void:return head+' />'
 return head+'>'+''.join(render(c) for c in n.children)+'</'+n.tag+'>'
names={'toast-container':'ToastContainer','mobile-drawer':'MobileDrawer','home':'Hero','about':'About','experience':'Experience','projects':'Projects','landing-pages':'Showcase','skills':'Skills','services':'Services','contact':'Contact','project-modal':'ProjectModal','contact-modal':'ContactModal'}
parts=[]
for n in p.root.children:
 if isinstance(n,str):continue
 name='Navigation' if n.tag=='header' else names[n.attrs['id']]
 parts.append(name)
 text="'use client';\n"+("import ThemeToggle from './ThemeToggle';\n" if name=='Navigation' else '')
 text+='\nexport default function '+name+'() {\n  return ('+render(n)+');\n}\n'
 (components/(name+'.jsx')).write_text(text,encoding='utf-8')
page='\n'.join("import "+n+" from '../components/"+n+"';" for n in parts)
page+="\nimport Script from 'next/script';\n\nexport default function Page() {\n  return <>\n"+'\n'.join('    <'+n+' />' for n in parts)+'''\n    <Script src="/scripts/portfolio-runtime.js" strategy="afterInteractive" />
  </>;
}
'''
(app/'page.jsx').write_text(page,encoding='utf-8')
manifest=json.loads((base/'.openai/hosting.json').read_text(encoding='utf-8'))
manifest['static']['directory']='out'
(base/'.openai/hosting.json').write_text(json.dumps(manifest,indent=2)+'\n',encoding='utf-8')
print('Created',len(parts),'React section components, Next App Router, CSS, and public assets.')
