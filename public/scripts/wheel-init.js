
    import { initWorksWheel, DEFAULT_WORKS } from './works-wheel.js';

    function startWorksWheel() {
      const container = document.getElementById('works-wheel-container');
      if (container) {
        const wheelInstance = initWorksWheel(container, {
          items: DEFAULT_WORKS,
          label: "Works '26",
          action: "View",
          onSelect: (index, item) => {
            if (window.openProjectModal) {
              window.openProjectModal(item);
            }
          }
        });
        window.worksWheelInstance = wheelInstance;

        const prevBtn = document.getElementById('works-wheel-prev-btn');
        const nextBtn = document.getElementById('works-wheel-next-btn');
        if (prevBtn) prevBtn.addEventListener('click', () => wheelInstance.prev());
        if (nextBtn) nextBtn.addEventListener('click', () => wheelInstance.next());
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', startWorksWheel);
    } else {
      startWorksWheel();
    }
  