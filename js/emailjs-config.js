// EmailJS Configuration
// Replace these values with your actual EmailJS credentials

const EMAILJS_CONFIG = {
    PUBLIC_KEY: "QT-dprDN-Z6BsXDrM", // Replace with your EmailJS public key
    SERVICE_ID: "service_jx9j2zs", // Replace with your EmailJS service ID
    TEMPLATE_ID: "template_qkkaq8a" // Replace with your EmailJS template ID
};

// Initialize EmailJS
emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);

// Handle contact form submission
function initializeContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const btn = document.querySelector('.btn');
            const originalText = btn.textContent;
            btn.textContent = 'Sending...';
            btn.disabled = true;
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                message: document.getElementById('message').value,
                to_email: 'iedcvisat25@gmail.com'
            };
            
            // Send email using EmailJS
            emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, formData)
                .then(function() {
                    showSuccessMessage();
                    contactForm.reset();
                    resetButton(btn, originalText);
                }, function(error) {
                    showErrorMessage();
                    console.error('EmailJS Error:', error);
                    resetButton(btn, originalText);
                });
        });
    }
}

function showSuccessMessage() {
    alert('Message sent successfully! We will get back to you soon.');
}

function showErrorMessage() {
    alert('Failed to send message. Please try again or contact us directly at iedcvisat25@gmail.com');
}

function resetButton(btn, originalText) {
    btn.textContent = originalText;
    btn.disabled = false;
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeContactForm();
});
