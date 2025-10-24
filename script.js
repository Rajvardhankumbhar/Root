const links = document.querySelectorAll('nav a');

links.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    targetSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const reserveForm = document.querySelector(".reserve form");
  const contactForm = document.querySelector(".contact form");

  if (reserveForm) {
    reserveForm.addEventListener("submit", (e) => {
      e.preventDefault(); 
      alert("Thank you! Your table has been reserved.");
      reserveForm.reset();
    });
  }

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Message sent successfully!");
      contactForm.reset();
    });
  }
});
