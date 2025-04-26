// Lead capture
document.getElementById('lead-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const email = document.getElementById('email').value;
  let emails = JSON.parse(localStorage.getItem('emails')) || [];
  emails.push(email);
  localStorage.setItem('emails', JSON.stringify(emails));
  alert('Thank you! We’ll be in touch.');
  document.getElementById('email').value = '';
});

// Modal data
const caseStudies = {
  onboarding: {
    title: "25% More Conversions in 3 Emails",
    image: "onboarding-case.png", // Placeholder png or jpg
    description: "Restructured onboarding into 3 hits that lifted user activation by 25% in 30 days."
  },
  checkout: {
    title: "Checkout That Didn't Suck",
    image: "checkout-case.png",
    description: "Simplified UX microcopy and CTA flow to cut cart abandonment by 30%."
  },
  activation: {
    title: "Brand Loyalty in 70% Less Time",
    image: "activation-case.png",
    description: "Redesigned product activation emails and UX to drive 70% higher activation."
  }
};

// Modal controls
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalDescription = document.getElementById('modal-description');
const closeModal = document.getElementById('close-modal');

document.querySelectorAll('.case-link').forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    const caseKey = this.getAttribute('data-case');
    const data = caseStudies[caseKey];
    modalTitle.textContent = data.title;
    modalImage.src = data.image;
    modalDescription.textContent = data.description;
    modal.style.display = "block";
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = "none";
});

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = "none";
  }
});
