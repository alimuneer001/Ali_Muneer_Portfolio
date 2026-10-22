// Keep every project accessible by keyboard and when WebGL is unavailable.
import('./portfolio-data.js').then(({ PROJECTS }) => {
  const links = document.createElement('div');
  links.className = 'project-links';
  links.setAttribute('aria-label', 'Project details');
  PROJECTS.forEach(item => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = item.title + ' ↗';
    button.onclick = () => window.openProjectModal(item);
    links.append(button);
  });
  document.getElementById('projects-content').append(links);
});

// Dialog focus management and consistent keyboard dismissal.
let previousFocus;
const dialogs = [...document.querySelectorAll('#project-modal, #contact-modal')];
dialogs.forEach(dialog => {
  dialog.setAttribute('role', 'dialog');
  dialog.setAttribute('aria-modal', 'true');
  dialog.setAttribute('aria-label', dialog.id === 'project-modal' ? 'Project details' : 'Contact Ali');
  let open = false;
  dialog.inert = true;
  new MutationObserver(() => {
    const visible = !dialog.classList.contains('pointer-events-none');
    if (visible === open) return;
    open = visible;
    dialog.inert = !open;
    if (open) {
      previousFocus = document.activeElement;
      dialog.querySelector('button, input, a')?.focus();
    } else previousFocus?.focus();
  }).observe(dialog, {attributes:true, attributeFilter:['class']});
});
document.addEventListener('keydown', event => {
  const dialog = dialogs.find(d => !d.classList.contains('pointer-events-none'));
  if (event.key === 'Escape') {
    closeContactModal();
    const drawer = document.getElementById('mobile-drawer');
    if (!drawer.classList.contains('pointer-events-none')) toggleMobileMenu();
  }
  if (event.key !== 'Tab' || !dialog) return;
  const nodes = [...dialog.querySelectorAll('a[href], button, input, select, textarea')];
  const first = nodes[0], last = nodes[nodes.length - 1];
  if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
  if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
});
document.querySelectorAll('.accordion-item').forEach(item => {
  const header = item.firstElementChild;
  header.tabIndex = 0;
  header.setAttribute('role', 'button');
  const sync = () => header.setAttribute('aria-expanded', String(item.classList.contains('active')));
  sync();
  new MutationObserver(sync).observe(item, {attributes:true, attributeFilter:['class']});
  header.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); item.click(); }
  });
});
