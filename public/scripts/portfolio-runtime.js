

    // Services Accordion Logic
    function toggleService(index) {
      const items = document.querySelectorAll('.accordion-item');
      items.forEach((item, i) => {
        const badge = item.querySelector('.item-badge');
        const title = item.querySelector('.item-title');
        const icon = item.querySelector('.item-icon');
        const iconSvg = icon.querySelector('svg');

        if (i === index) {
          const isActive = item.classList.contains('active');
          if (isActive && items.length > 1) {
            // Optional: toggle off or keep active
          } else {
            item.classList.add('active', 'bg-black', 'text-white', 'shadow-xl', 'scale-[1.01]');
            item.classList.remove('bg-white', 'text-neutral-800', 'border-neutral-300');
            badge.className = 'item-badge w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center text-xs font-medium text-neutral-300';
            title.className = 'item-title text-xs md:text-sm font-bold tracking-widest uppercase text-white';
            icon.className = 'item-icon w-8 h-8 rounded-full border border-neutral-700 flex items-center justify-center transition-transform rotate-90';
            iconSvg.className = 'w-3.5 h-3.5 text-white';
          }
        } else {
          item.classList.remove('active', 'bg-black', 'text-white', 'shadow-xl', 'scale-[1.01]');
          item.classList.add('bg-white', 'text-neutral-800', 'border-neutral-300');
          badge.className = 'item-badge w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center text-xs font-medium text-neutral-700';
          title.className = 'item-title text-xs md:text-sm font-bold tracking-widest uppercase text-neutral-800';
          icon.className = 'item-icon w-8 h-8 rounded-full border border-neutral-300 flex items-center justify-center transition-transform rotate-0';
          iconSvg.className = 'w-3.5 h-3.5 text-neutral-700';
        }
      });
    }

    function selectService(index) {
      const items = document.querySelectorAll('.accordion-item');
      if (items && items[index]) {
        toggleService(index);
      }
    }

    function bookSpecificService(serviceName) {
      openContactModal();
      const select = document.getElementById('contact-service');
      if (select) {
        for (let i = 0; i < select.options.length; i++) {
          if (select.options[i].text.includes(serviceName) || select.options[i].value.includes(serviceName)) {
            select.selectedIndex = i;
            break;
          }
        }
      }
    }

    // Modal Handlers
    function openProjectModal(data) {
      if (!data) return;

      const category = data.subtitle || data.category || 'FEATURED PROJECT';
      const title = data.title || 'PROJECT DETAILS';
      document.getElementById('modal-project-category').innerText = category;
      document.getElementById('modal-project-title').innerText = title;
      
      let html = '';
      if (data.src) {
        html += `
          <div class="w-full h-52 sm:h-64 rounded-2xl overflow-hidden border border-neutral-200/80 bg-neutral-100 shadow-inner">
            <img src="${data.src}" alt="${data.alt || title}" class="w-full h-full object-cover object-top" />
          </div>
        `;
      }
      if (data.description) {
        html += `<p class="text-neutral-600 leading-relaxed font-normal text-sm sm:text-base text-center max-w-xl mx-auto">${data.description}</p>`;
      }
      if (data.stats) {
        html += `
          <div class="bg-neutral-50 p-4 rounded-2xl border border-neutral-200 text-center">
            <p class="text-[11px] font-bold uppercase tracking-wider text-neutral-500 mb-1">Key Highlights</p>
            <p class="text-xs text-neutral-800 font-medium">${data.stats}</p>
          </div>
        `;
      }
      if (data.deliverables && data.deliverables.length) {
        html += `
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-black mb-2 text-center">Key Deliverables</h4>
            <ul class="list-disc pl-5 space-y-1 text-xs text-neutral-600 max-w-md mx-auto">
              ${data.deliverables.map(d => `<li>${d}</li>`).join('')}
            </ul>
          </div>
        `;
      }
      if (data.tools && data.tools.length) {
        html += `
          <div>
            <h4 class="text-xs font-bold uppercase tracking-wider text-black mb-2 text-center">Technologies & Stack</h4>
            <div class="flex flex-wrap justify-center gap-2">
              ${data.tools.map(t => `<span class="px-3 py-1 bg-neutral-100 border border-neutral-200 text-neutral-800 text-[10px] font-semibold rounded-full uppercase">${t}</span>`).join('')}
            </div>
          </div>
        `;
      }
      if (data.link) {
        html += `
          <div class="pt-2 flex justify-center items-center">
            <a href="${data.link}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-black text-white text-xs font-bold uppercase tracking-wider hover:bg-neutral-800 transition-all shadow-md hover:shadow-xl hover:scale-105 active:scale-95">
              Visit Live Website ↗
            </a>
          </div>
        `;
      }

      document.getElementById('modal-project-body').innerHTML = html;

      const modal = document.getElementById('project-modal');
      const card = document.getElementById('project-modal-card');
      if (!modal || !card) return;

      modal.classList.remove('pointer-events-none');
      void modal.offsetWidth; // Force reflow so transition starts cleanly
      requestAnimationFrame(() => {
        modal.classList.remove('opacity-0');
        card.classList.remove('opacity-0', 'scale-[0.94]', 'translate-y-4');
        card.classList.add('opacity-100', 'scale-100', 'translate-y-0');
      });
    }
    window.openProjectModal = openProjectModal;

    function closeProjectModal() {
      const modal = document.getElementById('project-modal');
      const card = document.getElementById('project-modal-card');
      if (!modal || !card) return;

      modal.classList.add('opacity-0');
      card.classList.remove('opacity-100', 'scale-100', 'translate-y-0');
      card.classList.add('opacity-0', 'scale-[0.94]', 'translate-y-4');
      setTimeout(() => {
        if (modal.classList.contains('opacity-0')) {
          modal.classList.add('pointer-events-none');
        }
      }, 400);
    }

    function openContactModal() {
      const modal = document.getElementById('contact-modal');
      const card = document.getElementById('contact-modal-card');
      modal.classList.remove('opacity-0', 'pointer-events-none');
      card.classList.remove('scale-95');
      card.classList.add('scale-100');
    }

    function closeContactModal() {
      const modal = document.getElementById('contact-modal');
      const card = document.getElementById('contact-modal-card');
      modal.classList.add('opacity-0', 'pointer-events-none');
      card.classList.remove('scale-100');
      card.classList.add('scale-95');
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        const modal = document.getElementById('project-modal');
        if (modal && !modal.classList.contains('pointer-events-none')) {
          closeProjectModal();
        }
      }
    });

    function submitContactForm(e) {
      e.preventDefault();
      const name = document.getElementById('contact-name').value.trim();
      const email = document.getElementById('contact-email').value.trim();
      const service = document.getElementById('contact-service').value;
      const message = document.getElementById('contact-message').value.trim();
      const subject = encodeURIComponent(service + ' inquiry from ' + name);
      const body = encodeURIComponent(message + '\n\nFrom: ' + name + '\nEmail: ' + email);
      window.location.href = 'mailto:alimuneer001@gmail.com?subject=' + subject + '&body=' + body;
      showToast('Email draft opened. Send it from your email app to contact Ali.');
    }


    function toggleMobileMenu() {
      const drawer = document.getElementById('mobile-drawer');
      const content = document.getElementById('mobile-drawer-content');
      const isOpen = !drawer.classList.contains('pointer-events-none');

      if (isOpen) {
        drawer.classList.add('opacity-0', 'pointer-events-none');
        content.classList.add('translate-x-full');
      } else {
        drawer.classList.remove('opacity-0', 'pointer-events-none');
        content.classList.remove('translate-x-full');
      }
    }

    // Toast notification helper
    function showToast(message) {
      const container = document.getElementById('toast-container');
      const toast = document.createElement('div');
      toast.className = 'bg-black text-white px-5 py-3 rounded-full text-xs font-semibold shadow-2xl flex items-center gap-2 transform translate-y-4 opacity-0 transition-all duration-300 pointer-events-auto border border-neutral-700';
      toast.textContent = message;
      container.appendChild(toast);

      setTimeout(() => {
        toast.classList.remove('translate-y-4', 'opacity-0');
      }, 10);

      setTimeout(() => {
        toast.classList.add('translate-y-4', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
      }, 3500);
    }



    // Initialize application
    function initApp() {

      const sections = document.querySelectorAll('section[id], main[id]');
      const navLinks = {
        'home': document.getElementById('nav-home'),
        'about': document.getElementById('nav-about'),
        'experience': document.getElementById('nav-experience'),
        'projects': document.getElementById('nav-projects'),
        'landing-pages': document.getElementById('nav-landing-pages'),
        'services': document.getElementById('nav-services')
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            Object.keys(navLinks).forEach(k => {
              if (navLinks[k]) {
                if (k === id) {
                  navLinks[k].classList.add('border-neutral-300', 'text-black');
                  navLinks[k].classList.remove('border-transparent', 'text-neutral-600');
                } else {
                  navLinks[k].classList.remove('border-neutral-300', 'text-black');
                  navLinks[k].classList.add('border-transparent', 'text-neutral-600');
                }
              }
            });
          }
        });
      }, { rootMargin: '-20% 0px -60% 0px' });

      sections.forEach(s => observer.observe(s));
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initApp);
    } else {
      initApp();
    }
  
Promise.allSettled([
  import('/scripts/scroll-expand-media.js'),
  import('/scripts/experience-section.js'),
  import('/scripts/personal.js')
]).then(results => results.forEach(result => {
  if (result.status === 'rejected') console.error('Portfolio component failed to load:', result.reason);
}));

// Load expensive project effects only as their sections approach the viewport.
const effectObserver = new IntersectionObserver(entries => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    effectObserver.unobserve(entry.target);
    const module = entry.target.id === 'projects' ? 'carousel-init' : 'wheel-init';
    import(`/scripts/${module}.js`).catch(error => console.error('Project effect unavailable:', error));
  }
}, { rootMargin: '300px' });
for (const id of ['projects', 'landing-pages']) {
  const section = document.getElementById(id);
  if (section) effectObserver.observe(section);
}
