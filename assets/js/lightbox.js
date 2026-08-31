var lightbox = document.getElementById('lightbox');
var lightboxClose = document.getElementById('lightbox-close');
var lightboxPanel = lightbox ? lightbox.querySelector('div') : null;
var lightboxImage = null;

if (lightbox && lightboxPanel) {
  lightboxImage = document.createElement('img');
  lightboxImage.id = 'lightbox-image';
  lightboxImage.alt = '';
  lightboxImage.className = 'mx-auto block h-auto max-h-[calc(90vh-2.5rem)] max-w-full rounded-md';
  lightboxPanel.insertBefore(lightboxImage, lightboxPanel.firstChild);
}

function openLightbox(src) {
  if (!lightbox || !lightboxImage) return;
  lightboxImage.src = src;
  lightbox.classList.remove('opacity-0', 'pointer-events-none');
  lightbox.classList.add('opacity-100');
  if (lightboxPanel) lightboxPanel.classList.remove('scale-95');
  lightbox.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  if (lightboxClose) lightboxClose.focus();
}

function closeLightbox() {
  if (!lightbox) return;
  lightbox.classList.remove('opacity-100');
  lightbox.classList.add('opacity-0', 'pointer-events-none');
  if (lightboxPanel) lightboxPanel.classList.add('scale-95');
  lightbox.setAttribute('aria-hidden', 'true');
  lightboxImage.src = '';
  document.body.style.overflow = '';
}

if (lightbox) {
  document.addEventListener('click', function (e) {
    var trigger = e.target.closest('[data-lightbox-src]');
    if (trigger) {
      openLightbox(trigger.getAttribute('data-lightbox-src'));
    }
  });

  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) closeLightbox();
  });

  if (lightboxClose) {
    lightboxClose.addEventListener('click', closeLightbox);
    lightboxClose.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        closeLightbox();
      }
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeLightbox();
  });
}
