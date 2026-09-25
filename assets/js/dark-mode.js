var root = document.documentElement;
var darkIcon = document.getElementById('theme-toggle-dark-icon');
var lightIcon = document.getElementById('theme-toggle-light-icon');

function showThemeIcon() {
  var dark = root.classList.contains('dark');
  darkIcon.classList.toggle('hidden', dark);
  lightIcon.classList.toggle('hidden', !dark);
}

showThemeIcon();

document.getElementById('theme-toggle').addEventListener('click', function () {
  localStorage.setItem('color-theme', root.classList.toggle('dark') ? 'dark' : 'light');
  showThemeIcon();
});
