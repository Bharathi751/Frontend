/**
 * ============================================================================
 * CONTROLLER: ContactController
 * Purpose: Validates and processes citizen inquiries, newsletter signups & feedback.
 * Architecture: IT Enterprise MVC - Controller Layer
 * ============================================================================
 */

class ContactController {
    constructor(appController) {
        this.appController = appController || (window.appCtrl ? window.appCtrl : null);
        this.initNewsletter();
        this.initContactForm();
    }

    initNewsletter() {
        const form = document.getElementById('newsletter-form');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = form.querySelector('input[type="email"]');
            if (input && input.value) {
                if (this.appController) {
                    this.appController.showToast(`Subscribed ${input.value} to 2035 City Updates!`, 'success');
                }
                const successMsg = document.getElementById('sub-success');
                if (successMsg) {
                    successMsg.classList.remove('hidden');
                    setTimeout(() => successMsg.classList.add('hidden'), 5000);
                }
                form.reset();
            }
        });
    }

    initContactForm() {
        const contactForm = document.getElementById('contact-form');
        if (!contactForm) return;

        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const nameInput = contactForm.querySelector('#contact-name');
            const emailInput = contactForm.querySelector('#contact-email');
            const topicInput = contactForm.querySelector('#contact-topic');
            const messageInput = contactForm.querySelector('#contact-message');

            const name = nameInput ? nameInput.value : 'Citizen';

            if (this.appController) {
                this.appController.showToast(`Thank you, ${name}! Your inquiry has been dispatched to Sector 7 Council.`, 'success');
            }

            const alertSuccess = document.getElementById('contact-alert-success');
            if (alertSuccess) {
                alertSuccess.classList.remove('hidden');
                setTimeout(() => alertSuccess.classList.add('hidden'), 6000);
            }

            contactForm.reset();
        });
    }
}

if (typeof window !== 'undefined') {
    window.ContactController = ContactController;
}
