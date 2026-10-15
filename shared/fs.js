/* Shared behaviour for the three directions: the reach, the hero video, signup, and a section spy. */
(function () {
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

  // The reach: --p 0 (arms pulled back) -> 1 (fingertips touching) as the hands
  // travel from the bottom of the screen to its middle. Two invisible rulers meet at
  // the band's top edge; how much of each is on screen gives the band's position,
  // which works whether this page scrolls itself or a host page scrolls it in a frame.
  document.querySelectorAll('.reach-wrap').forEach(function (wrap) {
    var band = wrap.querySelector('.reach');
    var up = wrap.querySelector('.reach__ruler--up'), down = wrap.querySelector('.reach__ruler--down');
    if (!band || !up || !down || !('IntersectionObserver' in window) || reduce.matches) return;
    var last = -1, above = null, below = null;
    function apply(vpTop, vpBottom, bandTop) {
      var h = band.offsetHeight, start = vpBottom, end = (vpTop + vpBottom) / 2 - h / 2;
      var t = Math.max(0, Math.min(1, (start - bandTop) / (start - end)));
      var p = Math.sin(t * Math.PI / 2);
      if (Math.abs(p - last) > 0.0005) { last = p; band.style.setProperty('--p', p.toFixed(4)); }
    }
    var ticking = false;
    function onScroll() {
      if (ticking) return; ticking = true;
      requestAnimationFrame(function () {
        ticking = false;
        if (document.documentElement.scrollHeight <= window.innerHeight + 1) return;
        apply(0, window.innerHeight, band.getBoundingClientRect().top);
      });
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    var steps = []; for (var i = 0; i <= 1000; i++) steps.push(i / 1000);
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        var v = e.isIntersecting ? e.intersectionRect.height : 0;
        if (e.target === up) above = v; else below = v;
      });
      if (above !== null && below !== null) apply(0, above + below, above);
    }, { threshold: steps });
    io.observe(up); io.observe(down);
    band.style.setProperty('--p', '0');
    onScroll();
  });

  // Hero video: silent, looping, decorative. Hold the poster under reduced motion.
  document.querySelectorAll('video[data-hero]').forEach(function (v) {
    function still() { v.pause(); v.removeAttribute('autoplay'); }
    if (reduce.matches) still(); else { var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); }
    if (reduce.addEventListener) reduce.addEventListener('change', function (e) { if (e.matches) still(); else v.play(); });
  });

  // Signup: no provider yet, so say so plainly.
  document.querySelectorAll('form[data-subscribe]').forEach(function (form) {
    var email = form.querySelector('input[type=email]'), note = form.querySelector('.subscribe-note');
    if (!note.id) note.id = email.id + '-note';
    email.setAttribute('aria-describedby', note.id);
    form.addEventListener('submit', function (ev) {
      ev.preventDefault();
      if (!email.value || !email.checkValidity()) {
        email.setAttribute('aria-invalid', 'true');
        note.textContent = 'Error: enter a full email address, like you@example.com.';
        email.focus(); return;
      }
      email.removeAttribute('aria-invalid');
      note.textContent = 'Signup is not connected yet in this preview. Nothing was sent.';
    });
  });

  // Section spy: calls back with the id of the section showing most on screen.
  window.FSspy = function (onChange) {
    var secs = Array.prototype.slice.call(document.querySelectorAll('[data-section]'));
    if (!secs.length || !('IntersectionObserver' in window)) return;
    var seen = {}, current = null, steps = [];
    for (var i = 0; i <= 40; i++) steps.push(i / 40);
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { seen[e.target.id] = e.isIntersecting ? e.intersectionRect.height : 0; });
      var best = null, bestV = -1;
      secs.forEach(function (s) { var v = seen[s.id] || 0; if (v > bestV) { bestV = v; best = s.id; } });
      if (best && best !== current) { current = best; onChange(best); }
    }, { threshold: steps });
    secs.forEach(function (s) { io.observe(s); });
  };
})();
