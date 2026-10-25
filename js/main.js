(function () {
  'use strict';

  // Mobile nav
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Catalog chips (filter UI only — visual)
  document.querySelectorAll('.chips').forEach(function (row) {
    row.addEventListener('click', function (e) {
      var btn = e.target.closest('.chip');
      if (!btn || !row.contains(btn)) return;
      row.querySelectorAll('.chip').forEach(function (c) {
        c.classList.remove('is-on');
        c.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('is-on');
      btn.setAttribute('aria-pressed', 'true');

      var filter = (btn.getAttribute('data-filter') || btn.textContent || '').trim().toLowerCase();
      var track = document.querySelector('[data-gallery]');
      if (!track) return;
      track.querySelectorAll('[data-tags]').forEach(function (card) {
        var tags = (card.getAttribute('data-tags') || '').toLowerCase();
        var show = filter === 'все' || filter === 'all' || !filter || tags.indexOf(filter) !== -1;
        card.style.display = show ? '' : 'none';
      });
    });
  });
})();
