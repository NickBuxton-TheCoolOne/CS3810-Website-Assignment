const themeToggle = document.getElementById('themeToggle');

if (themeToggle) {
    themeToggle.addEventListener('click', function () {
        document.body.classList.toggle('dark-mode');
        const isDarkMode = document.body.classList.contains('dark-mode');
        themeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
        themeToggle.setAttribute('aria-label', isDarkMode ? 'Toggle light mode' : 'Toggle dark mode');
    });
}

const contactForm = document.getElementById('contactForm');
const successModal = document.getElementById('successModal');
const closeModalBtn = document.getElementById('closeModalBtn');

function closeModal() {
    if (!successModal) return;
    successModal.classList.remove('is-open');
    successModal.setAttribute('aria-hidden', 'true');
}

if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }

        if (successModal) {
            successModal.classList.add('is-open');
            successModal.setAttribute('aria-hidden', 'false');
        }

        contactForm.reset();
    });
}

if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
}

if (successModal) {
    successModal.addEventListener('click', function (event) {
        if (event.target === successModal) {
            closeModal();
        }
    });
}

