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
}
