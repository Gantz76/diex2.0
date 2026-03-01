class Questionnaire {
    constructor() {
        this.currentStep = 0;
        this.data = {};
        this.steps = document.querySelectorAll('.q-step');
        this.progressBar = document.querySelector('.q-progress-bar');
        this.modal = document.getElementById('q-modal');
        this.triggers = document.querySelectorAll('.trigger-questionnaire');
        this.closeBtn = document.querySelector('.q-close-btn');

        this.init();
    }

    init() {
        if (!this.modal) return;

        // Bind triggers
        this.triggers.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.openModal();
            });
        });

        // Bind close button
        if (this.closeBtn) {
            this.closeBtn.addEventListener('click', () => this.closeModal());
        }

        // Close on background click
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) this.closeModal();
        });

        // Set up initial state
        this.updateView();

        // Bind Next buttons & Options
        this.setupInteractions();
    }

    openModal() {
        this.currentStep = 0;
        this.data = {};
        this.updateView();

        // Setup initial values
        this.steps.forEach(s => {
            const inputs = s.querySelectorAll('input');
            inputs.forEach(i => i.value = '');
        });

        document.body.style.overflow = 'hidden';
        this.modal.classList.add('active');

        // Play reveal animation if needed
        setTimeout(() => {
            if (this.currentStep === 0) {
                // Auto advance from intro after 2.5s
                setTimeout(() => this.nextStep(), 2500);
            }
        }, 300);
    }

    closeModal() {
        document.body.style.overflow = '';
        this.modal.classList.remove('active');

        // Reset after animation
        setTimeout(() => {
            this.currentStep = 0;
            this.updateView();
        }, 600);
    }

    setupInteractions() {
        // Step 1: Text input
        const step1Btn = document.getElementById('q-btn-1');
        const step1Input = document.getElementById('q-input-1');
        if (step1Btn && step1Input) {
            step1Btn.addEventListener('click', () => {
                if (step1Input.value.trim() !== '') {
                    this.data.company = step1Input.value.trim();
                    this.nextStep();
                } else {
                    step1Input.focus();
                }
            });
            step1Input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') step1Btn.click();
            });
        }

        // Step 2: Options
        const step2Options = document.querySelectorAll('#q-step-2 .q-option-btn');
        step2Options.forEach(opt => {
            opt.addEventListener('click', () => {
                this.data.presence = opt.innerText.trim();
                this.nextStep();
            });
        });

        // Step 3: Options
        const step3Options = document.querySelectorAll('#q-step-3 .q-option-btn');
        step3Options.forEach(opt => {
            opt.addEventListener('click', () => {
                this.data.atmosphere = opt.innerText.trim();
                this.nextStep();
            });
        });

        // Step 4: Options
        const step4Options = document.querySelectorAll('#q-step-4 .q-option-btn');
        step4Options.forEach(opt => {
            opt.addEventListener('click', () => {
                this.data.demo = opt.innerText.trim();
                this.nextStep();
            });
        });

        // Step 5: Final
        const step5Btn = document.getElementById('q-btn-5');
        if (step5Btn) {
            step5Btn.addEventListener('click', () => {
                const nameInput = document.getElementById('q-input-name');
                const phoneInput = document.getElementById('q-input-phone');
                const emailInput = document.getElementById('q-input-email');

                if (nameInput.value.trim() !== '' && phoneInput.value.trim() !== '' && emailInput.value.trim() !== '') {
                    this.data.name = nameInput.value.trim();
                    this.data.phone = phoneInput.value.trim();
                    this.data.email = emailInput.value.trim();
                    this.submitForm();
                } else if (nameInput.value.trim() === '') {
                    nameInput.focus();
                } else if (emailInput.value.trim() === '') {
                    emailInput.focus();
                } else if (phoneInput.value.trim() === '') {
                    phoneInput.focus();
                }
            });

            const inputs = [document.getElementById('q-input-name'), document.getElementById('q-input-phone'), document.getElementById('q-input-email')];
            inputs.forEach(i => i?.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') step5Btn.click();
            }));
        }
    }

    nextStep() {
        if (this.currentStep < this.steps.length - 1) {
            // Mark current as previous
            this.steps[this.currentStep].classList.remove('active');
            this.steps[this.currentStep].classList.add('previous');

            this.currentStep++;
            this.updateView();

            // Auto focus specific inputs when they appear
            setTimeout(() => {
                if (this.currentStep === 1) document.getElementById('q-input-1')?.focus();
                if (this.currentStep === 5) document.getElementById('q-input-name')?.focus();
            }, 500);
        }
    }

    submitForm() {
        console.log("Form Data Collected:", this.data);
        // Here you would send data to Webhook / N8N / Email API

        // Show success step (last step)
        this.steps[this.currentStep].classList.remove('active');
        this.steps[this.currentStep].classList.add('previous');

        this.currentStep = this.steps.length - 1; // Show success screen

        // Update name in success message
        const nameSpan = document.getElementById('q-success-name');
        if (nameSpan && this.data.name) {
            nameSpan.innerText = this.data.name.split(' ')[0]; // Just first name
        }

        this.updateView();

        // Close after 5 seconds automatically maybe? Or let user close.
    }

    updateView() {
        // Process Steps Visibility
        this.steps.forEach((step, index) => {
            // Remove all classes
            step.classList.remove('active', 'previous');

            if (index === this.currentStep) {
                step.classList.add('active'); // Current step comes from right
            } else if (index < this.currentStep) {
                step.classList.add('previous'); // Past steps move to left
            }
        });

        // Process Progress Bar
        const totalRealSteps = this.steps.length - 2; // exclude intro and success
        const currentRealStep = Math.max(0, this.currentStep - 1);

        let progress = 0;

        if (this.currentStep === 0) {
            progress = 0;
        } else if (this.currentStep === this.steps.length - 1) {
            progress = 100;
        } else {
            progress = (currentRealStep / totalRealSteps) * 100;
        }

        if (this.progressBar) {
            this.progressBar.style.width = progress + '%';
        }

        // Hide close button on intro step
        if (this.closeBtn) {
            this.closeBtn.style.opacity = this.currentStep === 0 ? '0' : '1';
            this.closeBtn.style.pointerEvents = this.currentStep === 0 ? 'none' : 'auto';
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new Questionnaire();
});
