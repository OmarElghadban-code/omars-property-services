'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
const form = document.getElementById('request-form');
if (form) {
  const service = new URLSearchParams(window.location.search).get('service');
  if (['1','2','3','4'].includes(service)) form.elements.service.value = service;
  form.querySelector('button').disabled = false;
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = document.getElementById('form-status');
    status.textContent = 'Your draft includes ' + form.elements.service.selectedOptions[0].textContent + '. Preview only: nothing was sent or saved. Booking will become available once the contact method is configured.';
    status.focus();
  });
}
