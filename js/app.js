document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. PRELOADER (Elite Fade)
       ========================================================================== */
    const introScreen = document.getElementById('intro');

    // Wait for the elite intro animation
    setTimeout(() => {
        if (introScreen) {
            introScreen.classList.add('hide-intro');
            setTimeout(() => {
                introScreen.style.pointerEvents = 'none';
                introScreen.remove();
                initHeroAnimations();
            }, 600); // 0.6s is the duration of the clip-path animation
        }
    }, 1100); // Start hiding after 1.1s

    /* ==========================================================================
       2. GSAP SCROLL ANIMATIONS & CONTEXT
       ========================================================================== */
    gsap.registerPlugin(ScrollTrigger);

    // Context for easy cleanup if needed
    let ctx = gsap.context(() => {

        // 2.1 Hero Stagger
        function initHeroAnimations() {
            const tl = gsap.timeline();
            tl.to(".hero .reveal-up", {
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.15,
                ease: "power3.out"
            });
        }
        // Expose to window for the preloader to call
        window.initHeroAnimations = initHeroAnimations;

        // 2.2 Standard Reveal
        const revealElements = document.querySelectorAll("section:not(.hero) .reveal-up");
        revealElements.forEach((el) => {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power3.out"
            });
        });

        // 2.3 Philosophy Reveal (SplitText-style stagger)
        const philosophyStatements = document.querySelectorAll('.philosophy-reveal');
        if (philosophyStatements.length) {
            gsap.to(philosophyStatements, {
                scrollTrigger: {
                    trigger: ".philosophy",
                    start: "top 60%"
                },
                y: 0,
                opacity: 1,
                duration: 1.2,
                stagger: 0.3,
                ease: "power3.out"
            });
        }

        // 2.4 Protocol (Sticky Stacking Archive)
        const cards = document.querySelectorAll(".stacking-card");
        if (cards.length) {
            cards.forEach((card, index) => {
                // Pinning logic: not strictly needed if we use position: sticky in CSS,
                // but we animate the card underneath as we scroll past it.
                if (index < cards.length - 1) {
                    gsap.to(card, {
                        scale: 0.9,
                        opacity: 0.5,
                        scrollTrigger: {
                            trigger: cards[index + 1],
                            start: "top 80%",
                            end: "top 20%",
                            scrub: true
                        }
                    });
                }
            });
        }

        // 2.5 Numbers Counter (Résultats)
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target'));
            ScrollTrigger.create({
                trigger: counter,
                start: "top 90%",
                once: true,
                onEnter: () => {
                    gsap.to(counter, {
                        innerHTML: target,
                        duration: 2,
                        ease: "power2.out",
                        snap: { innerHTML: 1 },
                        onUpdate: function () {
                            counter.innerHTML = Math.round(this.targets()[0].innerHTML);
                        }
                    });
                }
            });
        });

        // 2.6 Interactive Artifacts (Services Section)
        // A. Typewriter Effect
        const typeWriterText = document.querySelector('.typewriter-text');
        if (typeWriterText) {
            const textToType = 'const site = new Diex({ \n    performance: "Ultra", \n    conversions: "Max" \n});\nsite.deploy();';
            let i = 0;

            ScrollTrigger.create({
                trigger: '.typewriter-container',
                start: 'top 80%',
                onEnter: () => {
                    typeWriterText.innerHTML = '';
                    i = 0;
                    type();
                }
            });

            function type() {
                if (i < textToType.length) {
                    if (textToType.charAt(i) === '\n') {
                        typeWriterText.innerHTML += '<br>';
                    } else if (textToType.charAt(i) === ' ') {
                        typeWriterText.innerHTML += '&nbsp;';
                    } else {
                        typeWriterText.innerHTML += textToType.charAt(i);
                    }
                    i++;
                    setTimeout(type, 50);
                }
            }
        }

        // B. Data Shuffler
        const shufflerVals = document.querySelectorAll('.shuffler-val');
        if (shufflerVals.length) {
            ScrollTrigger.create({
                trigger: '.shuffler-container',
                start: 'top 80%',
                onEnter: () => {
                    shufflerVals.forEach(val => {
                        const targetText = val.getAttribute('data-target');
                        const originalText = val.innerText;

                        let iterations = 0;
                        const maxIterations = 20;
                        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';

                        const interval = setInterval(() => {
                            val.innerText = originalText.split('').map((char, index) => {
                                if (index < iterations / maxIterations * originalText.length) {
                                    return targetText[index];
                                }
                                return chars[Math.floor(Math.random() * chars.length)];
                            }).join('');

                            iterations++;
                            if (iterations >= maxIterations) {
                                clearInterval(interval);
                                val.innerText = targetText;
                            }
                        }, 50);
                    });
                }
            });
        }

        // C. Scheduler Pipeline
        const scheduleNodes = document.querySelectorAll('.schedule-node');
        if (scheduleNodes.length) {
            ScrollTrigger.create({
                trigger: '.scheduler-container',
                start: 'top 80%',
                onEnter: () => {
                    gsap.to(scheduleNodes, {
                        opacity: 1,
                        duration: 0.5,
                        stagger: 0.5,
                        onStart: function () {
                            // The staggered animation sets opacity to 1.
                            // We can also toggle the 'active' class for glowing dots
                        },
                        onUpdate: function () {
                            const target = this.targets()[0];
                            if (this.progress() > 0.5) target.classList.add('active');
                        }
                    });
                }
            });
        }

    }); // end gsap context

    /* ==========================================================================
       3. NAVBAR SCROLL ("Floating Island" morph)
       ========================================================================== */
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    /* ==========================================================================
       4. MAGNETIC BUTTONS (Micro-interactions)
       ========================================================================== */
    const magneticButtons = document.querySelectorAll('.btn');

    magneticButtons.forEach(btn => {
        btn.addEventListener('mousemove', (e) => {
            const rect = btn.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top;  // y position within the element

            // Calculate distance from center (-1 to 1)
            const centerX = (x - rect.width / 2) / (rect.width / 2);
            const centerY = (y - rect.height / 2) / (rect.height / 2);

            // Apply slight magnetic pull (max 10px translate)
            gsap.to(btn, {
                x: centerX * 10,
                y: centerY * 10,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        btn.addEventListener('mouseleave', () => {
            // Reset to origin
            gsap.to(btn, {
                x: 0,
                y: 0,
                duration: 0.5,
                ease: "elastic.out(1, 0.3)"
            });
        });
    });

    /* ==========================================================================
       5. PRICING TOGGLE
       ========================================================================== */
    const pricingToggle = document.getElementById('pricing-toggle');
    const labelMonthly = document.getElementById('label-monthly');
    const labelOneshot = document.getElementById('label-oneshot');
    const pricesMonthly = document.querySelectorAll('.price-monthly');
    const pricesOneshot = document.querySelectorAll('.price-oneshot');

    if (pricingToggle) {
        const btnEssentiel = document.getElementById('btn-essentiel');
        const btnPro = document.getElementById('btn-pro');
        const btnPremium = document.getElementById('btn-premium');

        const stripeLinks = {
            essentiel: {
                monthly: 'https://buy.stripe.com/test_dRmaEYehlbrX8SNgz9eUU00',
                oneshot: 'https://buy.stripe.com/test_dRmaEYehlbrX8SNgz9eUU00'
            },
            pro: {
                monthly: 'https://buy.stripe.com/test_aFa28sddh8fLglfer1eUU01',
                oneshot: 'https://buy.stripe.com/test_aFacN6flpbrX7OJ4QreUU02'
            },
            premium: {
                monthly: 'https://buy.stripe.com/test_6oU4gAc9d7bH7OJ1EfeUU03',
                oneshot: 'https://buy.stripe.com/test_6oU4gAc9d7bH7OJ1EfeUU03'
            }
        };

        pricingToggle.addEventListener('change', (e) => {
            const isChecked = e.target.checked;

            if (isChecked) {
                // One-shot
                labelMonthly.classList.remove('active');
                labelOneshot.classList.add('active');

                pricesMonthly.forEach(p => p.classList.add('d-none'));
                pricesOneshot.forEach(p => p.classList.remove('d-none'));

                if (btnPro) btnPro.href = stripeLinks.pro.oneshot;
                if (btnPremium) btnPremium.href = stripeLinks.premium.oneshot;
            } else {
                // Monthly
                labelMonthly.classList.add('active');
                labelOneshot.classList.remove('active');

                pricesMonthly.forEach(p => p.classList.remove('d-none'));
                pricesOneshot.forEach(p => p.classList.add('d-none'));

                if (btnPro) btnPro.href = stripeLinks.pro.monthly;
                if (btnPremium) btnPremium.href = stripeLinks.premium.monthly;
            }
        });
    }

    // Smooth scroll offset for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') === '#') return;
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                if (modal && modal.classList.contains('active')) {
                    closeModal();
                }
                const navHeight = navbar.offsetHeight + 24; // Including top margin
                window.scrollTo({
                    top: targetElement.offsetTop - navHeight,
                    behavior: "smooth"
                });
            }
        });
    });

});
