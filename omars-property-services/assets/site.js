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

  // Validate local selections only. A future private backend must revalidate uploads.
  const photos = document.getElementById('photos');
  const photoStatus = document.getElementById('photo-status');
  const allowedTypes = ['image/jpeg', 'image/png', 'image/webp'];
  const maxPhotoBytes = 5 * 1024 * 1024;

  photos.addEventListener('change', () => {
    const files = Array.from(photos.files);
    let error = '';

    if (files.length > 10) {
      error = 'Please select no more than 10 photos.';
    } else if (files.some((file) => !allowedTypes.includes(file.type))) {
      error = 'Please select JPG, PNG, or WebP photos only.';
    } else if (files.some((file) => file.size > maxPhotoBytes)) {
      error = 'Each photo must be 5 MB or smaller.';
    }

    photos.setCustomValidity(error);
    photoStatus.textContent = error ||
      (files.length ? files.length + ' photo(s) selected locally. Nothing uploaded.' : '');
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const status = document.getElementById('form-status');
    const serviceName = form.elements.service.selectedOptions[0].textContent;

    status.textContent =
      'Your draft includes ' + serviceName + ' and ' + photos.files.length + ' photo(s). ' +
      'Preview only: nothing was sent or saved. ' +
      'Booking will become available once the contact method is configured.';

    status.focus();
  });
}
