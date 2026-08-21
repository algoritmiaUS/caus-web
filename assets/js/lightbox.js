// --- Lightbox (only loaded on pages that render the `rankings` shortcode) ---
var lightbox = document.getElementById('lightbox');
var lightboxImage = document.getElementById('lightbox-image');
var lightboxClose = document.getElementById('lightbox-close');
var lightboxPanel = lightbox ? lightbox.querySelector('div') : null;

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
  // Delegate so any button carrying data-lightbox-src works, no matter
  // where it lives on the page.
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
