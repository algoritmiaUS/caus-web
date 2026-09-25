var lightbox = document.getElementById('lightbox');
var image = document.getElementById('lightbox-image');

document.addEventListener('click', function (e) {
  var trigger = e.target.closest('[data-lightbox-src]');
  if (!trigger) return;
  image.src = trigger.dataset.lightboxSrc;
  image.alt = trigger.dataset.lightboxAlt || '';
  lightbox.showModal();
});

lightbox.addEventListener('click', function (e) {
  if (e.target === lightbox) lightbox.close();
});

lightbox.addEventListener('close', function () {
  image.removeAttribute('src');
  image.alt = '';
});
