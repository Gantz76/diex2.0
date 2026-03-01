const mockupData = {
    corporate: {
        badge: "Modèle B2B",
        title: "Plateforme Corporate",
        desc: "Une interface taillée pour la génération de leads B2B avec une esthétique professionnelle et sérieuse.",
        features: [
            "Tableaux de bord des indicateurs",
            "Tunnel de conversion optimisé",
            "Design dark-mode élégant",
            "Rapidité de chargement extrême"
        ],
        url: "https://votre-entreprise.com/dashboard",
        themeContent: `
            <div class="tpl-corporate">
                <div class="c-nav">
                    <div style="font-weight: 800; font-size: 1.2rem; display: flex; align-items: center; gap: 8px;"><div style="width: 20px; height: 20px; background: #3b82f6; border-radius: 4px;"></div> ACME CORP</div>
                    <div style="color: #94a3b8;">Dashboard | Analytics | Settings</div>
                </div>
                <div class="c-hero">
                    <h1 style="color: white; margin-bottom: 20px;">Générez plus de <span style="color: #3b82f6;">Revenus</span></h1>
                    <p style="color: #cbd5e1; max-width: 600px; margin: 0 auto 30px auto;">Notre solution B2B accompagne les leaders de demain vers une croissance soutenue.</p>
                    <button style="padding: 15px 30px; background: #3b82f6; border: none; color: white; border-radius: 8px; font-weight: bold; cursor: pointer;">Réserver une démo</button>
                </div>
                <div class="c-stats">
                    <div class="c-stat-box"><div class="num">+150%</div><div style="color: #64748b;">Conversion</div></div>
                    <div class="c-stat-box"><div class="num">24h</div><div style="color: #64748b;">Implémentation</div></div>
                    <div class="c-stat-box"><div class="num">98%</div><div style="color: #64748b;">Satisfaction</div></div>
                </div>
                <div class="c-chart">
                    <div style="position: absolute; bottom: 0; left: 10%; width: 10%; height: 40%; background: rgba(59,130,246,0.3);"></div>
                    <div style="position: absolute; bottom: 0; left: 30%; width: 10%; height: 60%; background: rgba(59,130,246,0.5);"></div>
                    <div style="position: absolute; bottom: 0; left: 50%; width: 10%; height: 50%; background: rgba(59,130,246,0.4);"></div>
                    <div style="position: absolute; bottom: 0; left: 70%; width: 10%; height: 90%; background: rgba(59,130,246,0.9);"></div>
                </div>
            </div>
        `
    },
    immo: {
        badge: "Modèle Luxe",
        title: "Immobilier Prestige",
        desc: "Magnifiez vos biens d'exception grâce à un design épuré, lumineux et très centré sur la photographie haute résolution.",
        features: [
            "Mise en avant visuelle (Photos HD)",
            "Typographie classique et raffinée",
            "Recherche avancée simplifiée",
            "Mise en relation directe"
        ],
        url: "https://vos-biens-prestige.com",
        themeContent: `
            <div class="tpl-immo">
                <div style="padding: 20px; text-align: center; text-transform: uppercase; letter-spacing: 5px; border-bottom: 1px solid #d6d3d1;">
                    Demeures & Prestige
                </div>
                <div class="i-hero">
                    <div class="i-hero-overlay"></div>
                    <h1>Vivez l'Exception</h1>
                </div>
                <div style="text-align: center; padding: 60px 20px;">
                    <h2 style="font-size: 2rem; font-style: italic; color: #78716c; margin-bottom: 20px;">Notre Sélection Exclusive</h2>
                    <div class="i-grid">
                        <div class="i-card">
                            <img src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=400" style="width:100%; height:100%; object-fit:cover;">
                            <div class="i-price">3 450 000 €</div>
                        </div>
                        <div class="i-card">
                            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=400" style="width:100%; height:100%; object-fit:cover;">
                            <div class="i-price">1 890 000 €</div>
                        </div>
                        <div class="i-card">
                            <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=400" style="width:100%; height:100%; object-fit:cover;">
                            <div class="i-price">Sur Demande</div>
                        </div>
                        <div class="i-card" style="background: #292524; color: white; display:flex; align-items:center; justify-content:center; flex-direction:column;">
                            <h3 style="font-style: italic; font-size: 1.5rem;">Découvrir plus</h3>
                            <button style="margin-top:20px; padding: 10px 20px; border: 1px solid white; background:transparent; color:white;">Voir le catalogue</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    saas: {
        badge: "Application",
        title: "Espace SaaS",
        desc: "Interface utilisateur moderne conçue pour une rétention maximale. Adaptable à n'importe quel logiciel ou espace client.",
        features: [
            "Navigation latérale ergonomique",
            "Mise en page par cartes et data grid",
            "Style clair, net et précis",
            "Gestion des profils clients"
        ],
        url: "app.votre-saas.com/overview",
        themeContent: `
            <div class="tpl-saas">
                <div class="s-sidebar">
                    <div style="font-weight: 900; font-size: 1.2rem; color: #3b82f6; margin-bottom: 40px;"><span style="color: #cbd5e1;">///</span> NEXUS</div>
                    <ul style="list-style:none; padding:0; display:flex; flex-direction:column; gap:20px; color: #64748b;">
                        <li style="color: #0f172a; font-weight:600;">Dashboard</li>
                        <li>Projets</li>
                        <li>Analytics</li>
                        <li>Facturation</li>
                        <li>Paramètres</li>
                    </ul>
                </div>
                <div class="s-main">
                    <div class="s-header">
                        <h2>Vue Globale</h2>
                        <div style="display:flex; gap: 15px;">
                            <div style="width:40px; height:40px; border-radius:50%; background:#e2e8f0;"></div>
                        </div>
                    </div>
                    <div class="s-cards">
                        <div class="s-card">
                            <div style="font-size:0.8rem; color:#64748b; font-weight:bold; text-transform:uppercase;">Utilisateurs Actifs</div>
                            <div style="font-size:2rem; font-weight:800; margin-top:10px;">24,592</div>
                            <div style="color:#10b981; font-size:0.8rem; margin-top:10px;">↑ 12% vs last week</div>
                        </div>
                        <div class="s-card">
                            <div style="font-size:0.8rem; color:#64748b; font-weight:bold; text-transform:uppercase;">Revenus Récurrents</div>
                            <div style="font-size:2rem; font-weight:800; margin-top:10px;">$84.5K</div>
                            <div style="color:#10b981; font-size:0.8rem; margin-top:10px;">↑ 4% vs last week</div>
                        </div>
                        <div class="s-card">
                            <div style="font-size:0.8rem; color:#64748b; font-weight:bold; text-transform:uppercase;">Taux de Conversion</div>
                            <div style="font-size:2rem; font-weight:800; margin-top:10px;">3.4%</div>
                            <div style="color:#ef4444; font-size:0.8rem; margin-top:10px;">↓ 1.2% vs last week</div>
                        </div>
                    </div>
                    <div class="s-table">
                        <div style="padding:20px; border-bottom: 1px solid #e2e8f0; font-weight:bold;">Transactions Récentes</div>
                        <div style="padding:20px; color:#64748b; font-size:0.9rem;">
                            <!-- fake table lines -->
                            <div style="display:flex; justify-content:space-between; margin-bottom: 20px;"><span>INV-0012</span><span>Startup Inc.</span><span>Pro Plan</span><span>$249.00</span></div>
                            <div style="display:flex; justify-content:space-between; margin-bottom: 20px;"><span>INV-0013</span><span>Tech Flow</span><span>Basic Plan</span><span>$49.00</span></div>
                            <div style="display:flex; justify-content:space-between; margin-bottom: 20px;"><span>INV-0014</span><span>Global Media</span><span>Enterprise</span><span>$1,299.00</span></div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    artisan: {
        badge: "Local",
        title: "Artisan Engagé",
        desc: "Un site qui inspire la confiance immédiate et facilite la prise de contact pour vos clients de proximité.",
        features: [
            "Bouton d'appel toujours visible",
            "Formulaire de devis gratuit intégré",
            "Mise en avant Google Local / Avis",
            "Couleurs chaleureuses et rassurantes"
        ],
        url: "https://plomberie-martin.fr",
        themeContent: `
            <div class="tpl-artisan">
                <div class="a-nav">
                    <div>MARTIN PLOMBERIE</div>
                    <div style="display:flex; gap:15px; align-items:center;">
                        <span style="font-size:0.9rem; background:#78350f; padding:5px 10px; border-radius:4px;">Urgence: 06 12 34 56 78</span>
                    </div>
                </div>
                <div class="a-hero">
                    <div class="a-hero-text">
                        <h1>Expertise et savoir-faire depuis 15 ans.</h1>
                        <p style="font-size:1.1rem; color:#4b5563; margin-bottom: 30px; max-width:400px;">Intervention rapide 7j/7 pour vos travaux de rénovation ou de dépannage.</p>
                        <div style="display:flex; gap:5px; color:#f59e0b; font-size:1.2rem; margin-bottom:10px;">★★★★★</div>
                        <p style="font-size:0.9rem; color:#6b7280;">Recommandé par 140 avis Google</p>
                    </div>
                    <div class="a-hero-form">
                        <h3 style="margin-bottom: 20px; border-bottom: 2px solid #b45309; display:inline-block; padding-bottom:5px;">Devis Gratuit en 24h</h3>
                        <input type="text" class="a-input" placeholder="Quel est votre problème ?">
                        <input type="text" class="a-input" placeholder="Code Postal">
                        <input type="tel" class="a-input" placeholder="Numéro de téléphone">
                        <button style="width:100%; background:#b45309; padding: 15px; border:none; border-radius:6px; color:white; font-weight:bold; font-size:1.1rem; cursor:pointer;">Obtenir mon devis</button>
                    </div>
                </div>
                <div style="padding: 60px 40px; display:flex; gap:20px; justify-content:center;">
                    <div style="width:200px; padding:20px; border:1px solid #e5e7eb; border-radius:8px; text-align:center;">
                        <div style="font-size:2rem; margin-bottom:10px;">💧</div>
                        <b>Dépannage Fuite</b>
                    </div>
                    <div style="width:200px; padding:20px; border:1px solid #e5e7eb; border-radius:8px; text-align:center;">
                        <div style="font-size:2rem; margin-bottom:10px;">🛁</div>
                        <b>Rénovation Salle de Bain</b>
                    </div>
                    <div style="width:200px; padding:20px; border:1px solid #e5e7eb; border-radius:8px; text-align:center;">
                        <div style="font-size:2rem; margin-bottom:10px;">🔥</div>
                        <b>Chaudière & Chauffage</b>
                    </div>
                </div>
            </div>
        `
    },
    fitness: {
        badge: "Energie",
        title: "Coaching & Fitness",
        desc: "Design dynamique et motivant pour les professionnels du sport. Capture des leads et vend des séances de coaching.",
        features: [
            "Typographie impactante (Bold & Big)",
            "Palette de couleurs électriques",
            "Module de réservation de créneaux",
            "Mise en scène vidéo ou photo grand format"
        ],
        url: "https://votre-salle.club",
        themeContent: `
            <div class="tpl-fitness">
                <div class="f-nav">
                    <div style="color:#bef264;">POWER GYM.</div>
                    <div>
                        <span style="font-size: 0.8rem; margin-right:20px;">Planning</span>
                        <span style="font-size: 0.8rem; margin-right:20px;">Coachs</span>
                        <span style="font-size: 0.8rem; background:white; color:black; padding:8px 16px;">S'inscrire</span>
                    </div>
                </div>
                <div class="f-hero">
                    <h1>Repousse<br>Tes Limites.</h1>
                    <p style="font-size: 1.2rem; color:#a1a1aa; max-width: 400px; margin-bottom: 40px; line-height:1.5;">Le meilleur équipement de la ville. Des coachs dédiés à ton évolution. Rejoins le mouvement.</p>
                    <button style="width:fit-content; background:#bef264; color:black; padding: 20px 40px; font-size:1.2rem; font-weight:800; border:none; text-transform:uppercase; letter-spacing:1px; cursor:pointer;">Réserver un essai</button>
                </div>
                <!-- Bandeau dynamique -->
                <div style="background:#bef264; padding:20px 0; overflow:hidden; white-space:nowrap; display:flex;">
                    <div style="color:black; font-weight:900; text-transform:uppercase; font-size:1.5rem; letter-spacing:2px;">OUVERT 24/7 • CROSSFIT • MUSCULATION • CARDIO • COACHING PERSO • OUVERT 24/7 • CROSSFIT • MUSCULATION • CARDIO • COACHING PERSO</div>
                </div>
            </div>
        `
    },
    beaute: {
        badge: "Bien-être",
        title: "Institut Beauty & Spa",
        desc: "L'élégance à l'état pur. Un design très doux, apaisant, qui invite à la relaxation tout en proposant la réservation.",
        features: [
            "Esthétique minimaliste et douce",
            "Polices serifs très élégantes",
            "Valorisation de la carte de soins",
            "Bouton flottant pour prendre RDV"
        ],
        url: "https://spa-elegance.com",
        themeContent: `
            <div class="tpl-beaute">
                <div class="b-nav">
                    <div style="font-size: 0.8rem; letter-spacing:2px; color:#a3a3a3; margin-bottom: 10px;">PARIS</div>
                    <div class="b-logo">ÉLÉGANCE</div>
                    <div style="margin-top:20px; font-size:0.9rem; display:flex; gap:30px; justify-content:center;">
                        <span>Massages</span>
                        <span>Soins Visage</span>
                        <span>La Carte</span>
                        <span>Bons Cadeaux</span>
                    </div>
                </div>
                <div class="b-hero">
                    <h1 style="margin-bottom: 20px;">Un moment hors du temps.</h1>
                    <p style="font-family: 'Inter', sans-serif; font-size:1rem; max-width: 500px; margin: 0 auto; line-height:1.8;">Découvrez notre sélection de soins exclusifs fondés sur l'expertise et la sensorialité absolue.</p>
                    <button style="margin-top: 40px; background: transparent; border: 1px solid white; color: white; padding: 15px 40px; letter-spacing: 2px; text-transform: uppercase; font-size: 0.8rem; cursor:pointer;">Réserver votre Parenthèse</button>
                </div>
                <div class="b-services">
                    <div class="b-service">
                        <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=400">
                        <h3 style="font-weight:400; font-size:1.4rem;">Massages</h3>
                        <p style="font-family:'Inter', sans-serif; font-size:0.8rem; color:#737373; margin-top:10px;">À partir de 65€</p>
                    </div>
                    <div class="b-service">
                        <img src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=400">
                        <h3 style="font-weight:400; font-size:1.4rem;">Soins Visage</h3>
                        <p style="font-family:'Inter', sans-serif; font-size:0.8rem; color:#737373; margin-top:10px;">À partir de 80€</p>
                    </div>
                </div>
            </div>
        `
    }
};

class MockupGallery {
    constructor() {
        this.buttons = document.querySelectorAll('.open-mockup-btn');
        this.modal = document.getElementById('mockup-modal');
        if (!this.modal) return;

        this.closeBtn = this.modal.querySelector('.m-close-btn');
        this.init();
    }

    init() {
        this.buttons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const targetKey = btn.getAttribute('data-target');
                this.openMockup(targetKey);
            });
        });

        this.closeBtn.addEventListener('click', () => {
            this.closeModal();
        });

        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });
    }

    openMockup(key) {
        const data = mockupData[key];
        if (!data) return;

        // Popoulate Information Sidebar
        document.getElementById('m-badge').innerText = data.badge;
        document.getElementById('m-title').innerText = data.title;
        document.getElementById('m-desc').innerText = data.desc;
        document.getElementById('mb-url-text').innerText = data.url;

        // Populate Features List
        const featureList = document.getElementById('m-features');
        featureList.innerHTML = '';
        data.features.forEach(feat => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="ph-bold ph-check"></i> <span>${feat}</span>`;
            featureList.appendChild(li);
        });

        // Set action button context
        const actionBtn = document.getElementById('m-action-btn');
        actionBtn.onclick = () => {
            this.closeModal();
            // Optional: Auto trigger the questionnaire modal!
            setTimeout(() => {
                document.querySelector('.trigger-questionnaire').click();
            }, 600);
        };

        // Populate Theme Mockup Content
        const contentBox = document.getElementById('mb-content');
        contentBox.innerHTML = data.themeContent;

        // Open Modal
        document.body.style.overflow = 'hidden';
        this.modal.classList.add('active');
    }

    closeModal() {
        document.body.style.overflow = '';
        this.modal.classList.remove('active');

        // Clear content slightly after animation
        setTimeout(() => {
            document.getElementById('mb-content').innerHTML = '';
        }, 500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new MockupGallery();
});
