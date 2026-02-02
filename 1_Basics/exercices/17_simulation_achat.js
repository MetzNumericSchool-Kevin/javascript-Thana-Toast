// Mini-simulation d'achat

// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 40, stock: 5 },
  { nom: "Potion de mana", prix: 20, stock: 3 },
  { nom: "Potion d'endurance", prix: 30, stock: 2 }
];

// Bourse de l'aventurier
let bourse_aventurier = 100;

console.log("Voici l'inventaire de la boutique, Aventurier :");
for (let i = 0; i < inventaire.length; i++) {
  console.log((i+1) + ". " + inventaire[i].nom + " : " + inventaire[i].prix + "🪙.");
};

while (true) {

  choix_potion = prompt("Quelle potion désirez-vous acheter ? ");
  choix_potion_nombre = parseInt(choix_potion);

  if (isNaN(choix_potion_nombre) || choix_potion_nombre <= 0 || choix_potion_nombre > inventaire.length) {
    console.log("Votre choix n'est pas valide. Veuillez réessayer.");
    continue;
  } else {
    quantite_voulue = prompt("Combien de " + inventaire[choix_potion_nombre-1].nom + " voulez_vous acheter ? ");
    quantite_voulue_nombre = parseInt(quantite_voulue);
    if (quantite_voulue_nombre > inventaire[choix_potion_nombre-1].stock) {
      console.log("Nous n'avons que " + inventaire[choix_potion_nombre-1].stock + " " + inventaire[choix_potion_nombre-1].nom + " en stock. Veuillez réessayer.");
      continue;
    }
    let montant_achat = quantite_voulue_nombre * inventaire[choix_potion_nombre-1].prix;
    if (montant_achat > bourse_aventurier) {
      console.log("Vous n'avez pas assez d'argent aventurier ! Veuillez réessayer.")
      continue;
    } else {
      bourse_aventurier -= montant_achat;
      inventaire[choix_potion_nombre-1].stock -= quantite_voulue_nombre;
    }
    console.log("Vous avez acheté " + quantite_voulue_nombre + " " + inventaire[choix_potion_nombre-1].nom + " aventurier, il vous reste " + bourse_aventurier + "🪙 dans votre bourse.");
    break;
  }
}