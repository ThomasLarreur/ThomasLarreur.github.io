
// Sélectionnez tous les boutons avec la classe toggle-btn
const buttons = document.querySelectorAll('.toggle-btn');
// Récupérer les boutons et les sections
const btnHomme = document.querySelector('.btnHomme');
const btnFemme = document.querySelector('.btnFemme');
const sectionHomme = document.getElementById('sectionHomme');
const sectionFemme = document.getElementById('sectionFemme');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Supprime la classe 'bouton-actif' de tous les boutons
        buttons.forEach(btn => btn.classList.remove('bouton-actif'));   
        // Ajoute la classe 'bouton-actif' au bouton cliqué
        button.classList.add('bouton-actif');
    });
});
// Ajouter des événements de clic sur les boutons
btnHomme.addEventListener('click', () => {
    sectionHomme.style.display = 'block'; // Afficher HOMME
    sectionFemme.style.display = 'none';  // Masquer FEMME
});
btnFemme.addEventListener('click', () => {
    sectionHomme.style.display = 'none';  // Masquer HOMME
    sectionFemme.style.display = 'block'; // Afficher FEMME
});