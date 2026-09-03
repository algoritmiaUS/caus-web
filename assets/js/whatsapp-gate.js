var form = document.getElementById('whatsapp-gate');
if (form) {
  var button = document.getElementById('whatsapp-submit');
  var statusEl = document.getElementById('whatsapp-status');

  function setOk() {
    button.disabled = false;
    if (button.dataset.label) button.textContent = button.dataset.label;
    if (statusEl) statusEl.textContent = '';
  }

  function setFail() {
    button.disabled = true;
    if (button.dataset.failed) button.textContent = button.dataset.failed;
    if (statusEl && button.dataset.failed) statusEl.textContent = button.dataset.failed;
  }

  function resetToVerifying() {
    button.disabled = true;
    if (button.dataset.verifying) button.textContent = button.dataset.verifying;
    if (statusEl) statusEl.textContent = '';
    if (typeof window.turnstile !== 'undefined' && window.turnstile.reset) {
      try {
        window.turnstile.reset();
      } catch (e) {
        /* widget not ready yet, callback will enable */
      }
    }
  }

  window.onWhatsappTurnstileOk = function () {
    setOk();
  };
  window.onWhatsappTurnstileFail = function () {
    setFail();
  };
  window.onWhatsappTurnstileExpired = function () {
    setFail();
  };

  window.setTimeout(function () {
    if (button.disabled && typeof window.turnstile === 'undefined') {
      setFail();
    }
  }, 8000);

  form.addEventListener('submit', function () {
    button.disabled = true;
    window.setTimeout(resetToVerifying, 2000);
  });

  window.addEventListener('pageshow', function (e) {
    if (e.persisted) resetToVerifying();
  });
}
