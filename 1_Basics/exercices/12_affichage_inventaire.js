// Aventurier, regarde tout ce que je vends !

// Variable de l'exercice précédent (modifie selon tes valeurs)
const inventaire = [];

const potion_soin = {
  nom: "Potion de soin",
  prix: 42,
  stock: 5
};
const potion_mana = {
  nom: "Potion de mana",
  prix: 20,
  stock: 3
};
const potion_endurance = {
  nom: "Potion d'endurance",
  prix: 30,
  stock: 2
};

inventaire.push(potion_soin, potion_mana, potion_endurance);

for (let i = 0; i < inventaire.length; i++) {
  console.log("Nom: " + inventaire[i].nom);
  console.log("Prix: " + inventaire[i].prix);
  console.log("Stock: " + inventaire[i].stock);
};

for (let i = 0; i < inventaire.length; i++) {
    for (k in inventaire[i]) {
        console.log(k + ": " + inventaire[i][k]);
    }
};