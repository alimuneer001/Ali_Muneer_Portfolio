from pathlib import Path
from html import escape
import re, json

root = Path(__file__).parent / 'dist'
h = (root / 'index.html').read_text(encoding='utf-8')
replacements = {
 'Jishnu Mondal — Monochrome Editorial Developer & Designer Portfolio': 'Ali Muneer — Full Stack Developer (MERN)',
 'Portfolio of Jishnu Mondal, a talented freelance designer & developer specializing in UI/UX, Web Design, Landing Pages, Figma, and Webflow.': 'Ali Muneer, Full Stack Developer at Spadasoft in Lahore, Pakistan. React, Next.js, Node.js and MERN applications.',
 'Jishnu Mondal': 'Ali Muneer', 'DESIGN BY JISHNU MONDAL': '© 2026 ALI MUNEER',
 '<span>ECHO</span>': '<span>ALI.</span>', 'EXPLORE MY': 'ALI MUNEER',
 'DESIGNER EST.2000': 'FULL STACK DEVELOPER<br>LAHORE, PAKISTAN',
 'assets/hero_portrait.png': 'assets/ali_avatar.webp',
 'Developer & Designer': 'Full Stack Developer',
 'I AM PASSIONATE ABOUT CREATING WEBSITES THAT STAND OUT FROM THE CROWD.': 'I BUILD RESPONSIVE INTERFACES AND RELIABLE BACKENDS. REACT.JS, NODE.JS, AND EVERYTHING IN BETWEEN.',
 'BASED IN INDIA &bull; WORLDWIDE': 'LAHORE, PAKISTAN &bull; WORLDWIDE',
 'UI/UX &bull; WEB DESIGN &bull; WEBFLOW &bull; FIGMA': 'REACT &bull; NEXT.JS &bull; NODE.JS &bull; MONGODB',
 'I SPECIALIZE IN BUILDING BESPOKE DIGITAL PRODUCTS WHERE PURPOSEFUL EDITORIAL DESIGN MEETS ROBUST ENGINEERING. CREATING EXPERIENCES WITH INTENTIONAL MOTION, SYSTEMATIC RIGOR, AND MEASURABLE IMPACT.': 'I AM A FULL STACK DEVELOPER AT SPADASOFT, WITH PREVIOUS EXPERIENCE AT CINNOVA TECHNOLOGIES. I BUILD USER-FOCUSED PRODUCTS, FROM RESPONSIVE REACT INTERFACES TO BACKEND SERVICES AND DATABASE DESIGN.',
 'https://www.instagram.com/echo__builds/': 'https://wa.me/923120546646',
 'https://x.com/Jishn8m': 'https://www.upwork.com/freelancers/~0102b5f11d0fcda2ff',
 'https://www.linkedin.com/in/jishnu-mondal/': 'https://www.linkedin.com/in/ali-muneer-b4531231b/',
 'https://github.com/Jishnu09-siuu': 'https://github.com/alimuneer001',
 'INSTAGRAM': 'WHATSAPP', 'Instagram': 'WhatsApp', 'TWITTER': 'UPWORK', 'Twitter': 'Upwork',
 'LANDING PAGES': 'SHOWCASE', 'THE SERVICES WE PROVIDE': 'WHAT I BUILD',
 'UI/UX Design': 'Frontend Engineering', 'Web Design': 'Backend & APIs', 'Landing Page Design': 'Full Stack Applications',
 '>UI/UX<': '>FRONTEND<', '>WEB DESIGN<': '>BACKEND &amp; APIs<', '>LANDING PAGE<': '>FULL STACK<', '>LANDING PAGE DESIGN<': '>FULL STACK APPLICATIONS<',
 'User research, wireframing, interactive prototyping, and usability validation. Transforming complex workflows into effortless, delightful digital experiences.': 'Responsive, accessible interfaces built with React.js, Next.js and Tailwind CSS. Clean component architecture and thoughtful interactions across devices.',
 'Bespoke web aesthetics with flawless responsive layouts, typography hierarchy, high-contrast dark modes, and crisp interactive animations.': 'Backend services with Node.js, Express.js and Python. REST APIs, GraphQL and WebSockets connected to MongoDB, PostgreSQL and MySQL.',
 'High-converting editorial landing pages tailored for startups, product launches, and personal brands. Engineered to capture attention and boost conversions.': 'End-to-end MERN applications with reliable data flow, authentication, API integration and automated testing. From the first interface to the production product.',
 'DELIVERABLES: USER FLOWS, WIREFRAMES, DESIGN TOKENS': 'REACT.JS · NEXT.JS · TAILWIND CSS',
 'DELIVERABLES: FULL RESPONSIVE WEB DESIGNS, FIGMA SYSTEM': 'NODE.JS · EXPRESS · DATABASES · REST APIs',
 'DELIVERABLES: COPYWRITING STRUCTURE, CUSTOM 3D/GRAPHICS, WEBFLOW CODE': 'MERN APPLICATIONS · INTEGRATION · TESTING',
 'hello@example.com': 'alimuneer001@gmail.com',
 "'projects': document.getElementById('nav-projects'),": "'projects': document.getElementById('nav-projects'),\n        'landing-pages': document.getElementById('nav-landing-pages'),",
}
for a,b in replacements.items(): h = h.replace(a,b)
h = re.sub(r'\s+onerror="[^"]*"', '', h)
h = h.replace('object-contain object-bottom pointer-events-none', 'object-contain object-bottom grayscale pointer-events-none')
# Keep Echo's layout and animation hooks; replace its career narrative with verified roles.
start = h.index('          <!-- ================= INTRO ENVIRONMENT')
end = h.index('\n        </div>\n      </div>\n\n      <!-- Bottom Minimalist', start)
roles = [
 ('01', 'MAY — JUL 2025', 'CINNOVA TECHNOLOGIES', 'FULL STACK<br>INTERN', 'Contributed to live client projects across frontend and backend development. Built and refined UI components to match design specifications while gaining hands-on MERN experience.', ['Live client projects', 'Responsive UI components', 'MERN foundations']),
 ('02', 'AUG 2025 — MAY 2026', 'CINNOVA TECHNOLOGIES', 'FULL STACK<br>DEVELOPER', 'Developed accessible React interfaces and backend functionality. Integrated APIs, optimized page performance and implemented automated testing workflows with the engineering team.', ['React & API integration', 'Performance optimization', 'Automated testing']),
 ('03', 'JUN 2026 — PRESENT', 'SPADASOFT', 'FULL STACK<br>DEVELOPER', 'Developing and maintaining MERN applications. Building responsive interfaces, connecting backend services and collaborating across teams to deliver scalable, maintainable features.', ['MERN applications', 'Backend services', 'Cross-functional delivery'])
]
panels = '''<div class="exp-panel flex-shrink-0 w-screen px-8 md:px-16 lg:px-24"><p class="text-xs tracking-widest uppercase mb-6 text-neutral-400">FOUNDATION &amp; JOURNEY</p><h2 class="text-5xl md:text-8xl font-black uppercase leading-none mb-8">WHERE<br>I'VE BEEN</h2><p class="text-neutral-300 max-w-xl">From hands-on MERN development at Cinnova to building full-stack products at Spadasoft.</p></div>'''
for num,date,company,title,desc,points in roles:
 panels += f'''<article class="exp-panel relative flex-shrink-0 w-screen px-8 md:px-16 lg:px-24"><div class="exp-date-bg absolute right-12 -top-12 text-[15vw] font-black text-white/[0.04]" data-parallax-factor="0.12">{num}</div><div class="relative max-w-4xl"><p class="text-xs tracking-widest text-neutral-400 mb-4">{date} / {company}</p><h3 class="text-4xl md:text-7xl font-black leading-none mb-6">{title}</h3><p class="text-sm md:text-lg text-neutral-300 max-w-2xl mb-8">{desc}</p><div class="grid sm:grid-cols-3 gap-4 border-t border-white/10 pt-6 text-xs text-neutral-300">{''.join('<p>'+x+'</p>' for x in points)}</div></div></article>'''
h = h[:start] + panels + h[end:]
h = h.replace('width: 290vw;', 'width: 400vw;').replace('height: 280vh;', 'height: 380vh;')
h = h.replace('2023 &nbsp;&nbsp; SELF-DIRECTED LEARNING &nbsp;&nbsp; 2026 &nbsp;&nbsp; FREELANCE SYSTEMS &nbsp;&nbsp; 2023 &nbsp;&nbsp; SELF-DIRECTED LEARNING', '2025 &nbsp;&nbsp; CINNOVA TECHNOLOGIES &nbsp;&nbsp; 2026 &nbsp;&nbsp; SPADASOFT &nbsp;&nbsp; MERN &nbsp;&nbsp; FULL STACK DEVELOPMENT')
h = h.replace('SELF-DIRECTED LEARNING', 'CAREER JOURNEY').replace('data-target-progress="0.30"', 'data-target-progress="0.34"').replace('data-target-progress="0.75"', 'data-target-progress="1"').replace('            LEARNING', '            CINNOVA').replace('            FREELANCE', '            SPADASOFT')
# Remove unused template shopping flow and fictional project records.
h = re.sub(r'  <!-- MODAL: Cart.*?(?=  <script>)', '', h, flags=re.S)
h = re.sub(r'    // Cart state.*?    // Filter projects', '    const projectsData = {};\n\n    // Filter projects', h, flags=re.S)
h = re.sub(r'    // Cart Handlers.*?(?=    function copyContactEmail)', '', h, flags=re.S)
h = re.sub(r'    function submitContactForm\(e\) \{.*?\n    \}', '''    function submitContactForm(e) {
      e.preventDefault();
      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const service = document.getElementById('contact-service').value;
      const message = document.getElementById('contact-message').value.trim();
      const subject = encodeURIComponent(service + ' inquiry from ' + name);
      const body = encodeURIComponent(message + '\\n\\nFrom: ' + name + '\\nEmail: ' + email);
      window.location.href = 'mailto:alimuneer001@gmail.com?subject=' + subject + '&body=' + body;
      showToast('Email draft opened. Send it from your email app to contact Ali.');
    }''', h, flags=re.S)
# re.sub replacement processing turns escaped newlines into literals; normalize JS strings.
h = h.replace("message + '\n\nFrom: '", "message + '\\n\\nFrom: '").replace("+ '\nEmail: '", "+ '\\nEmail: '")
h = h.replace('toast.innerHTML = `<span>●</span><span>${message}</span>`;', 'toast.textContent = message;')
h = h.replace('<form id="contact-form"', '<p class="text-xs text-neutral-500 mb-5">Opens an email draft to alimuneer001@gmail.com. You send it from your email app.</p><form id="contact-form"')
h = h.replace('SEND MESSAGE', 'OPEN EMAIL DRAFT')
h = h.replace('PORTFOLIO. ALL RIGHTS RESERVED', 'LAHORE, PAKISTAN · ALIMUNEER001@GMAIL.COM')
h = h.replace('<!-- Bottom Credits Bar -->', '<a class="text-xs uppercase tracking-widest underline mb-8" href="assets/Ali Resume Page.pdf" download="Ali_Muneer_Resume.pdf">Download my CV ↗</a>\n      <!-- Bottom Credits Bar -->')
extra = '''<section id="skills" class="max-w-[1400px] mx-auto px-6 md:px-14 py-16 border-t border-neutral-200"><p class="text-xs tracking-widest text-neutral-500 mb-5">THE TOOLKIT</p><h2 class="text-3xl md:text-5xl font-black uppercase mb-9">BUILT ACROSS THE STACK.</h2><div class="flex flex-wrap gap-3">'''
for skill in ['React.js','Next.js','TypeScript','JavaScript','Tailwind CSS','Node.js','Express.js','MongoDB','MySQL','PostgreSQL','Python','FastAPI / Django','NestJS','REST APIs','GraphQL','WebSockets','GitHub']:
 extra += f'<span class="px-5 py-3 border border-neutral-300 rounded-full text-xs font-semibold">{skill}</span>'
extra += '</div><div class="grid md:grid-cols-2 gap-12 mt-16"><div><h3 class="font-black text-xl uppercase mb-6">Education</h3><p class="font-bold">BS Computer Science</p><p class="text-sm text-neutral-500 mt-2">The University of Lahore · Jan 2019 – Dec 2023</p><p class="font-bold mt-6">FSc Pre-Engineering</p><p class="text-sm text-neutral-500 mt-2">Punjab Group of College, Okara · Jan 2016 – Dec 2018</p></div><div><h3 class="font-black text-xl uppercase mb-6">Credentials</h3>'
for name,link in [('Building with the Claude API','https://academy.claude.com/verify/0139e7dbcb69278fa879c94a0bd50375'),('Claude 101','https://academy.claude.com/verify/71a2599e4ae347b7da8cc9c051faadda'),('Cinnova experience letter','https://ali-muneer-portfolio.vercel.app/certifications/cinnova-experience.pdf'),('Cinnova internship letter','https://ali-muneer-portfolio.vercel.app/certifications/cinnova-internship.pdf')]:
 extra += f'<a href="{link}" target="_blank" rel="noopener noreferrer" class="block py-3 border-b border-neutral-200 text-sm font-medium">{name} ↗</a>'
extra += '</div></div></section>'
h = h.replace('  <!-- BEGIN: Services Section', extra + '\n  <!-- BEGIN: Services Section') if '<!-- BEGIN: Services Section' in h else h.replace('  <section class="max-w-[1400px] mx-auto px-6 md:px-14 py-20"', extra+'\n  <section class="max-w-[1400px] mx-auto px-6 md:px-14 py-20"')
h = h.replace('</head>', '<link rel="stylesheet" href="personal.css">\n</head>')
h = h.replace('</body>', '<script src="personal.js"></script>\n</body>')
(root/'index.html').write_text(h, encoding='utf-8')

projects = [
 ('BlinkHint', 'AI Interview Assistant', 'blinkhint-real.webp', 'https://blinkhint.com/', 'AI-powered Chrome extension providing real-time conversation cues with speech-to-text and LLM pipelines in a lightweight overlay.', ['React.js','WebSockets','LLMs','Speech API']),
 ('ShopSphere', 'Gaming Gear E-Commerce', 'shopsphere-real.webp', 'https://shop-sphere-e-commerce-sable.vercel.app/', 'Gaming hardware storefront with category browsing, product pages, a dynamic cart, and login and checkout flows.', ['Next.js','Tailwind CSS','MongoDB']),
 ('Travel Addict', 'Dream Travels / Booking Platform', 'dreamtravels-real.webp', 'https://welcome-to-dream-travels.vercel.app/', 'Travel packages, destination pages and itinerary management, with authentication, booking and contact flows.', ['Next.js','Authentication','Booking Architecture']),
 ('Freelaunch', 'Freelance Work Marketplace', 'freelaunch-real.webp', 'https://freelaunch-two.vercel.app/', 'Freelance work marketplace with client postings, proposals, developer profiles and contract management.', ['Next.js','TypeScript','Tailwind CSS','REST APIs']),
 ('Meme Generator', 'Pro Studio / Canvas Editor', 'memegenerator-real.webp', 'https://memer-generator-app.vercel.app/', 'Browser-based meme studio with image templates, custom text overlays and an interactive canvas editor.', ['React.js','HTML5 Canvas']),
 ('Film Unit Car', 'Film & TV Production Transport', 'film-unit-cars.webp', 'https://film-unit-cars-production-transport-omega.vercel.app/#home', 'UK production transport website with fleet and service showcases, quote enquiries and direct WhatsApp contact.', ['Fleet Showcase','Quote Enquiries','Service Coverage'])
]
items = [dict(title=t,subtitle=s,src='assets/'+img,image='assets/'+img,alt=t+' — '+s,link=url,href=url,description=d,tools=tech) for t,s,img,url,d,tech in projects]
(root/'portfolio-data.js').write_text('export const PROJECTS = '+json.dumps(items,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
for filename,var,stop in [('flex-carousel.js','DEFAULT_ITEMS','export const BEND_PRESETS'),('works-wheel.js','DEFAULT_WORKS','export function initWorksWheel')]:
 p=root/filename
 s=p.read_text(encoding='utf-8')
 s=re.sub(r'export const '+var+r' = \[.*?\];(?=\s*'+stop+')', 'export const '+var+' = PROJECTS'+('[1,2,3,4].map(i => PROJECTS[i])' if False else '')+';',s,flags=re.S)
 if var=='DEFAULT_WORKS': s=s.replace('export const DEFAULT_WORKS = PROJECTS;', 'export const DEFAULT_WORKS = [1,2,3,4].map(i => PROJECTS[i]);')
 p.write_text("import { PROJECTS } from './portfolio-data.js';\n"+s,encoding='utf-8')
p=root/'experience-section.js'
s=p.read_text(encoding='utf-8').replace('ORIGIN & FOUNDATIONS','FOUNDATION & JOURNEY').replace('SELF-DIRECTED LEARNING','CINNOVA TECHNOLOGIES').replace('FREELANCE / INDEPENDENT','SPADASOFT').replace('currentProgress < 0.65','currentProgress < 0.83')
p.write_text(s,encoding='utf-8')
