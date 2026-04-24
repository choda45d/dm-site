/* ══════════════════════════════════════════
   DINA MELEMI — script.js
   ══════════════════════════════════════════ */

/* ─── MOBILE MENU ─── */
function toggleMobileMenu() {
  var h = document.getElementById('hamburger');
  var o = document.getElementById('nav-overlay');
  if (!h || !o) return;
  var isOpen = h.classList.contains('open');
  if (isOpen) {
    h.classList.remove('open');
    o.classList.remove('open');
    document.body.style.overflow = '';
  } else {
    h.classList.add('open');
    o.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeMobileMenu() {
  var h = document.getElementById('hamburger');
  var o = document.getElementById('nav-overlay');
  if (h) h.classList.remove('open');
  if (o) o.classList.remove('open');
  document.body.style.overflow = '';
}

/* ─── FAQ ACCORDION ─── */
function toggleFaq(btn) {
  var answer = btn.nextElementSibling;
  var isOpen = btn.classList.contains('open');
  document.querySelectorAll('.faq-question.open').forEach(function(q) {
    q.classList.remove('open');
    q.nextElementSibling.classList.remove('open');
  });
  if (!isOpen) {
    btn.classList.add('open');
    answer.classList.add('open');
  }
}

/* ─── EMAIL OBFUSCATION ─── */
function getEmail() {
  var u = 'miroslavprodic';
  var d = 'gmail.com';
  return 'mailto:' + u + '@' + d;
}

function populateEmails() {
  var u = 'miroslavprodic';
  var d = 'gmail.com';
  var addr = u + '@' + d;
  var bannerText = document.getElementById('banner-email-text');
  if (bannerText) bannerText.textContent = addr;
  var bannerLink = document.getElementById('banner-email-link');
  if (bannerLink) bannerLink.href = 'mailto:' + addr;
  // Also populate any email links
  document.querySelectorAll('a[data-email]').forEach(function(a) {
    a.href = 'mailto:' + addr;
    if (!a.textContent.trim() || a.textContent.trim() === '#') {
      a.textContent = addr;
    }
  });
}

/* ─── SCROLL NAV ─── */
window.addEventListener('scroll', function() {
  var nav = document.getElementById('navbar');
  if (!nav) return;
  if (window.scrollY > 60) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

/* ─── SCROLL REVEAL ─── */
function initReveal() {
  var elements = document.querySelectorAll('.reveal');
  if (!elements.length) return;
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.12 });
  elements.forEach(function(el) { observer.observe(el); });
}

/* ─── ACTIVE NAV LINK ─── */
function setActiveNav() {
  var page = document.body.dataset.page || '';
  document.querySelectorAll('.nav-links a, .nav-overlay a').forEach(function(a) {
    a.classList.remove('active');
    if (a.dataset.page === page) a.classList.add('active');
  });
}

/* ─── INIT ─── */
window.addEventListener('DOMContentLoaded', function() {
  initReveal();
  populateEmails();
  setActiveNav();
});
window.addEventListener('load', initReveal);
