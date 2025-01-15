document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
});


// Select the form
const contactForm = document.querySelector('#contact form');

// Add an event listener to handle form submission
contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Get form data
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validate form data (simple example)
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    // Log form data to the console (you can replace this with actual processing)
    console.log('Form submitted:', { name, email, message });

    // Display a success message to the user
    alert('Thank you for contacting us!');

    // Clear the form
    contactForm.reset();
});
