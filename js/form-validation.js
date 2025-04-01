document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        // Email validation function
        function isValidEmail(email) {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailPattern.test(email);
        }
        
        // Form submission handling
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form inputs
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validate inputs
            let isValid = true;
            let errorMessage = '';
            
            if (name === '') {
                isValid = false;
                errorMessage += 'Please enter your name.\n';
                document.getElementById('name').classList.add('error');
            } else {
                document.getElementById('name').classList.remove('error');
            }
            
            if (email === '') {
                isValid = false;
                errorMessage += 'Please enter your email.\n';
                document.getElementById('email').classList.add('error');
            } else if (!isValidEmail(email)) {
                isValid = false;
                errorMessage += 'Please enter a valid email address.\n';
                document.getElementById('email').classList.add('error');
            } else {
                document.getElementById('email').classList.remove('error');
            }
            
            if (subject === '') {
                isValid = false;
                errorMessage += 'Please enter a subject.\n';
                document.getElementById('subject').classList.add('error');
            } else {
                document.getElementById('subject').classList.remove('error');
            }
            
            if (message === '') {
                isValid = false;
                errorMessage += 'Please enter your message.\n';
                document.getElementById('message').classList.add('error');
            } else {
                document.getElementById('message').classList.remove('error');
            }
            
            // If form is valid, submit it (or show success message)
            if (isValid) {
                // In a real application, you would send this data to a server
                // For now, we'll just show a success message
                alert('Thank you for your message! I will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please correct the following errors:\n' + errorMessage);
            }
        });
        
        // Add error class styling
        const style = document.createElement('style');
        style.textContent = `
            .form-control.error {
                border-color: #ff3860;
            }
            
            .form-control.success {
                border-color: #09c372;
            }
        `;
        document.head.appendChild(style);
    }
});