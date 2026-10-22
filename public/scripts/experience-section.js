/**
 * ExperienceSection — "Where I've Been"
 * Immersive Horizontal Spatial Canvas controlled by Vertical Scroll
 * Uses native scrolling and a settling animation loop
 */

export function initExperienceSection() {
  const section = document.getElementById('experience');
  if (!section) return;

  const stage = document.getElementById('exp-horizontal-stage');
  if (!stage) return;

  const hudProgress = document.getElementById('exp-hud-progress');
  const hudPhase = document.getElementById('exp-hud-phase');
  const jumpButtons = document.querySelectorAll('.exp-jump-btn');
  const panels = stage.querySelectorAll('.exp-panel');

  // Check reduced motion preference
  const staticLayout = window.matchMedia('(max-width: 1023px), (max-height: 600px), (prefers-reduced-motion: reduce)');

  // Native scroll drives the desktop camera.
  // Camera & Interpolation Physics
  let currentTranslateX = 0;
  let targetTranslateX = 0;
  let currentProgress = 0;
  let targetProgress = 0;
  let isTicking = false;

  // Compute maximum horizontal travel based on canvas geometry
  function getDimensions() {
    const totalDist = section.offsetHeight - window.innerHeight;
    const stageWidth = stage.scrollWidth;
    const maxTranslate = Math.max(0, stageWidth - section.clientWidth);
    return { totalDist, maxTranslate };
  }

  let { totalDist, maxTranslate } = getDimensions();
  window.addEventListener('resize', () => {
    ({ totalDist, maxTranslate } = getDimensions());
    if (staticLayout.matches) {
      stage.style.transform = 'none';
    } else onScroll();
  }, { passive: true });

  // Update loop for 60/120 FPS camera interpolation
  function renderFrame() {
    isTicking = false;

    if (staticLayout.matches) {
      return;
    }

    // Smooth inertia lerp (0.09 factor gives tactile, responsive feel)
    currentProgress += (targetProgress - currentProgress) * 0.09;
    currentTranslateX += (targetTranslateX - currentTranslateX) * 0.09;

    // 1. Move Horizontal Camera / Stage
    stage.style.transform = `translate3d(${currentTranslateX.toFixed(2)}px, 0, 0)`;

    // Update HUD Progress Bar
    if (hudProgress) {
      hudProgress.style.width = `${(currentProgress * 100).toFixed(1)}%`;
    }

    // 5. Update HUD Phase Title
    if (hudPhase) {
      const active = Math.round(currentProgress * (panels.length - 1));
      hudPhase.textContent = panels[active]?.dataset.phase || 'Career journey';
    }

    // 6. Highlight active bottom jump button
    jumpButtons.forEach(btn => {
      const btnTarget = parseFloat(btn.getAttribute('data-target-progress') || '0');
      const isCurrent = Math.abs(currentProgress - btnTarget) < 0.20;
      if (isCurrent) {
        btn.classList.add('text-white', 'bg-white/20', 'border-white/40');
        btn.classList.remove('text-neutral-500', 'border-white/5');
      } else {
        btn.classList.remove('text-white', 'bg-white/20', 'border-white/40');
        btn.classList.add('text-neutral-500', 'border-white/5');
      }
    });

    // Keep loop active until settle
    if (Math.abs(targetTranslateX - currentTranslateX) > 0.1 || Math.abs(targetProgress - currentProgress) > 0.001) {
      requestAnimationFrame(renderFrame);
      isTicking = true;
    }
  }

  // Scroll listener computing normalized progress (0.0 to 1.0)
  function onScroll() {
    if (staticLayout.matches) return;
    const rect = section.getBoundingClientRect();
    const scrolled = -rect.top;

    if (totalDist <= 0) return;

    // Normalized progress within the section's vertical travel track
    const rawProgress = scrolled / totalDist;
    targetProgress = Math.min(Math.max(rawProgress, 0), 1);
    targetTranslateX = -targetProgress * maxTranslate;

    if (!isTicking) {
      isTicking = true;
      requestAnimationFrame(renderFrame);
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });


  // Interactive Chapter Jump Click Handlers
  jumpButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const p = parseFloat(btn.getAttribute('data-target-progress') || '0');
      if (staticLayout.matches) {
          panels[Math.round(p * (panels.length - 1))]?.scrollIntoView({ behavior: 'auto', block: 'start' });
        return;
      }
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const targetScroll = sectionTop + p * totalDist;

      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth'
      });
    });
  });

  // Initial calculation
  onScroll();
}

// Auto-boot upon DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initExperienceSection);
} else {
  initExperienceSection();
}
