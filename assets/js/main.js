// Mobile nav toggle
var menuToggle = document.getElementById('menu-toggle');
var menu = document.getElementById('menuItems');
var menuIconOpen = document.getElementById('menu-icon-open');
var menuIconClose = document.getElementById('menu-icon-close');

function setMenu(open) {
  menu.classList.toggle('hidden', !open);
  menuIconOpen.classList.toggle('hidden', open);
  menuIconClose.classList.toggle('hidden', !open);
  menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
}

menuToggle.addEventListener('click', function () {
  setMenu(menu.classList.contains('hidden'));
});

// Language switcher dropdown
var langSwitcher = document.getElementById('lang-switcher');
var langToggle = document.getElementById('lang-toggle');
var langPanel = document.getElementById('lang-panel');

langToggle.addEventListener('click', function () {
  var open = !langPanel.classList.toggle('hidden');
  langToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

document.addEventListener('click', function (e) {
  if (!langSwitcher.contains(e.target)) {
    langPanel.classList.add('hidden');
    langToggle.setAttribute('aria-expanded', 'false');
  }
});
