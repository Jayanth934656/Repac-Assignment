document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
});



const contactForm = document.querySelector('#contact form');


contactForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

   
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

 
    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

   
    console.log('Form submitted:', { name, email, message });


    alert('Thank you for contacting us!');


    contactForm.reset();
});
