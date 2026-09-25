var menuToggle = document.getElementById('menu-toggle');
var menu = document.getElementById('menuItems');
var menuIconOpen = document.getElementById('menu-icon-open');
var menuIconClose = document.getElementById('menu-icon-close');
var langSwitcher = document.getElementById('lang-switcher');
var langToggle = document.getElementById('lang-toggle');
var langPanel = document.getElementById('lang-panel');

function setMenu(open) {
  menu.classList.toggle('hidden', !open);
  menuIconOpen.classList.toggle('hidden', open);
  menuIconClose.classList.toggle('hidden', !open);
  menuToggle.setAttribute('aria-expanded', open);
}

function setLang(open) {
  langPanel.classList.toggle('hidden', !open);
  langToggle.setAttribute('aria-expanded', open);
}

menuToggle.addEventListener('click', function () {
  setMenu(menu.classList.contains('hidden'));
});

langToggle.addEventListener('click', function () {
  setLang(langPanel.classList.contains('hidden'));
});

document.addEventListener('click', function (e) {
  if (!langSwitcher.contains(e.target)) setLang(false);
  if (!menu.contains(e.target) && !menuToggle.contains(e.target)) setMenu(false);
});

document.addEventListener('keydown', function (e) {
  if (e.key !== 'Escape') return;
  setMenu(false);
  setLang(false);
});

var langNotice = document.getElementById('lang-notice');
if (langNotice) {
  if (!sessionStorage.getItem('lang-notice-shown')) langNotice.classList.remove('hidden');
  document.getElementById('lang-notice-close').addEventListener('click', function () {
    langNotice.classList.add('hidden');
    sessionStorage.setItem('lang-notice-shown', '1');
  });
}
