document.addEventListener('DOMContentLoaded', () => {
    
    // Défilement fluide pour les ancres
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Gestion simple du formulaire de contact
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Simulation d'envoi
        alert('Merci Mardochée ! Votre message a été (simulé) envoyé. Dans un vrai site, cela partirait vers un serveur.');
        form.reset();
    });

    // Animation simple sur les images de projet
    const projectImages = document.querySelectorAll('.project-image img');
    projectImages.forEach(img => {
        img.addEventListener('click', () => {
            alert("Détails du projet : " + img.alt);
        });
    });
});