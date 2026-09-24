var form = document.getElementById('whatsapp-gate');
var button = document.getElementById('whatsapp-submit');
var status = document.getElementById('whatsapp-status');

function setState(state) {
  button.disabled = state !== 'label';
  button.textContent = button.dataset[state];
  status.textContent = state === 'failed' ? button.dataset.failed : '';
}

function resetVerification() {
  setState('verifying');
  if (window.turnstile) window.turnstile.reset();
}

window.onWhatsappTurnstileOk = function () {
  setState('label');
};
window.onWhatsappTurnstileFail = window.onWhatsappTurnstileExpired = function () {
  setState('failed');
};

window.setTimeout(function () {
  if (!window.turnstile) setState('failed');
}, 8000);

form.addEventListener('submit', function () {
  button.disabled = true;
  window.setTimeout(resetVerification, 2000);
});

window.addEventListener('pageshow', function (e) {
  if (e.persisted) resetVerification();
});
