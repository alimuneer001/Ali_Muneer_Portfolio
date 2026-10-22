const desktop = window.matchMedia('(min-width: 1024px) and (prefers-reduced-motion: no-preference)');
let loading = false;
async function syncWheel() {
  if (!desktop.matches) {
    window.worksWheelInstance?.destroy();
    window.worksWheelInstance = null;
    return;
  }
  if (loading || window.worksWheelInstance) return;
  loading = true;
  try {
    const { initWorksWheel, DEFAULT_WORKS } = await import('./works-wheel.js');
    if (!desktop.matches) return;
    window.worksWheelInstance = initWorksWheel(document.getElementById('works-wheel-container'), {
      items: DEFAULT_WORKS, label: "Works '26", action: 'View',
      onSelect: (_, item) => window.openProjectModal?.(item)
    });
  } finally { loading = false; }
}
desktop.addEventListener('change', syncWheel);
syncWheel();
