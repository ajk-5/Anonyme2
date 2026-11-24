/**
 * Vérifie les champs du formulaire.
 * @param {object} form - Données saisies
 * @returns {object} Les erreurs du formulaire
 */
export function valider(form) {
  const err = {};

  if (form.nom.trim().length < 2) {
    err.nom = "Veuillez saisir votre nom.";
  }

  if (form.prenom.trim().length < 2) {
    err.prenom = "Veuillez saisir votre prénom.";
  }

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(form.email.trim())) {
    err.email = "Adresse email invalide.";
  }

  const tel = form.tel.replace(/[\s.-]/g, "");

  if (!/^\+?\d{10,15}$/.test(tel)) {
    err.tel = "Numéro de téléphone invalide.";
  }

  if (!form.cours) {
    err.cours = "Veuillez choisir une formation.";
  }

  return err;
}