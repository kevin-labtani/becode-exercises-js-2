// Crée un tableau avec des objets à vendre (épée, hache, sceptre, etc.)

// Caractéristique de chaque objet :

// title (string)
// physic (int)
// magic (int)
// minLevel (int)
// available (boolean)
// Manipulation :

// faire une fonction pour afficher tous les objets
// faire une fonction pour afficher les objets disponibles
// faire une fonction pour afficher les objets dont le niveau minimum est de 10

const thingsForSale = [
  {
    title: "sword",
    physic: 22,
    magic: 14,
    minLevel: 3,
    available: true
  },
  {
    title: "shield",
    physic: 44,
    magic: 12,
    minLevel: 2,
    available: false
  },
  {
    title: "wand",
    physic: 3,
    magic: 66,
    minLevel: 7,
    available: true
  },
  {
    title: "hatchet",
    physic: 88,
    magic: 6,
    minLevel: 17,
    available: true
  }
];

const itemList = () => {
  thingsForSale.forEach(item => {
    console.log(item);
  });
};

const availableItems = () => {
  thingsForSale.forEach(item => {
    if (item.minLevel >= 10) {
      console.log(item);
    }
  });
};

const lvl10Items = () => {
  thingsForSale.forEach(item => {
    if (item.minLevel >= 10) {
      console.log(item);
    }
  });
};

itemList();
console.log("-------------------");
availableItems();
console.log("-------------------");
lvl10Items();
