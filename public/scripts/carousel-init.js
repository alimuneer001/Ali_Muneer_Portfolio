
    import { initFlexCarousel, DEFAULT_ITEMS } from './flex-carousel.js';

    function startCarousel() {
      const container = document.getElementById('flex-carousel-container');
      if (container) {
        window.flexCarouselInstance = initFlexCarousel(container, {
          items: DEFAULT_ITEMS,
          preset: 'liquid',
          intro: 'rise',
          cardHeight: 0.5,
          gap: 12,
          squeeze: 0.2,
          focusOnClick: true,
          captions: true,
          onSelect: (index, item) => {
            if (window.openProjectModal) {
              window.openProjectModal(item);
            }
          }
        });
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', startCarousel);
    } else {
      startCarousel();
    }
  