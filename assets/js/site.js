// Lightweight progressive enhancements. The email address is not written in page HTML.
(function () {
  const section = document.body.dataset.section || 'home';
  document.querySelectorAll('[data-nav]').forEach(link => {
    if (link.dataset.nav === section) {
      link.setAttribute('aria-current', 'page');
    }
  });
  const host = document.getElementById('contact-email');
  if (host) {
    const name = ['eric', 'antonelo'].join('.');
    const domain = ['ufsc', 'br'].join('.');
    const address = `${name}@${domain}`;
    const a = document.createElement('a');
    a.href = `mailto:${address}`;
    a.textContent = address;
    host.replaceChildren(a);
  }
})();
