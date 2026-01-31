// Recherche dans l'inventaire

// Inventaire de la boutique
const inventaire = [
  { nom: "Potion de soin", prix: 50, stock: 10 },
  { nom: "Potion de mana", prix: 30, stock: 5 },
  { nom: "Potion d'endurance", prix: 40, stock: 0 },
  { nom: "Potion de force", prix: 60, stock: 3 },
];

let potion_plus_chere;

for (let i = 0; i < inventaire.length; i++) {
  if (i == 0) {
    potion_plus_chere = inventaire[i];
  } else if (inventaire[i].prix > potion_plus_chere.prix) {
    potion_plus_chere = inventaire[i];  
  }
};

console.log("La potion la plus chère est : " + potion_plus_chere.nom);

let potion_plus_de_stock;

for (let i = 0; i < inventaire.length; i++) {
  if (i == 0) {
    potion_plus_de_stock = inventaire[i];
  } else if (inventaire[i].stock > potion_plus_de_stock.stock) {
    potion_plus_de_stock = inventaire[i];  
  }
};

console.log("La potion avec le plus de stock est : " + potion_plus_de_stock.nom);

let nombre_stock_positif = 0;

for (let i = 0; i < inventaire.length; i++) {
  if (inventaire[i].stock > 0) {
    nombre_stock_positif++;
  }
};

console.log("Il y a " + nombre_stock_positif + " potion(s) avec un stock positif");