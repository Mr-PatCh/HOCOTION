(function(){
// scroll reveal
    const targets = document.querySelectorAll('.reveal, .reveal-stagger');
    if ('IntersectionObserver' in window){
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => {
          if (e.isIntersecting){
            e.target.classList.add('is-visible');
            io.unobserve(e.target);
          }
        });
      }, { threshold: 0.14, rootMargin: '0px 0px -40px 0px' });
      targets.forEach(t => io.observe(t));
    } else {
      targets.forEach(t => t.classList.add('is-visible'));
    }

    // subtle hero parallax
    const heroMedia = document.getElementById('heroMedia');
    const heroImg = heroMedia ? heroMedia.querySelector('img') : null;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (heroImg && !reduce){
      let ticking = false;
      window.addEventListener('scroll', () => {
        if (!ticking){
          window.requestAnimationFrame(() => {
            const y = window.scrollY || 0;
            const shift = Math.min(y * 0.12, 60);
            heroImg.style.transform = 'scale(1.03) translateY(' + shift + 'px)';
            ticking = false;
          });
          ticking = true;
        }
      }, { passive: true });
    }
})();
