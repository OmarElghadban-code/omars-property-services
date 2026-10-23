// Update the copyright year.
const year = document.getElementById("year");
if (year) {
  year.textContent = String(new Date().getFullYear());
}

// Toggle the navigation menu on smaller screens.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.getElementById("site-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

// Preselect a cleaning service when linked from the Services page.
const searchParams = new URLSearchParams(window.location.search);
const selectedService = searchParams.get("service");
const serviceSelect = document.getElementById("service");

if (serviceSelect && ["standard", "deep", "office"].includes(selectedService)) {
  serviceSelect.value = selectedService;
}

// Quote requests are submitted directly to Formspree using the form action.
