'use strict';

// Keep the footer year current on every page.
const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

// The contact form is a local preview. It never sends or stores information.
const form = document.getElementById('request-form');

if (form) {
  const query = new URLSearchParams(window.location.search);
  const selectedService = query.get('service');
  const validServices = ['1', '2', '3', '4'];

  // Service-page links can preselect an option on the contact page.
  if (validServices.includes(selectedService)) {
    form.elements.service.value = selectedService;
  }

  form.querySelector('button').disabled = false;

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const status = document.getElementById('form-status');
    const serviceName = form.elements.service.selectedOptions[0].textContent;

    status.textContent =
      'Your draft includes ' + serviceName + '. ' +
      'Preview only: nothing was sent or saved. ' +
      'Booking will become available once the contact method is configured.';

    status.focus();
  });
}
