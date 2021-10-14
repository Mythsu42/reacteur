function displayArray(tab, option) {
  let str;

  str = "";
  for (i = 0; i < tab.length; i++) {
    str += tab[i];
    str += " ";
    if (option === true) {
      if (i === tab.length - 2) {
        str += "et ";
      }
    }
  }
  if (tab === undefined) {
    str === undefined;
  }
  return str;
}
console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"], false)); // Affichera "Pomme Banane Abricot Cerise"
console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"], true)); // Affichera "Pomme, Banane, Abricot et Cerise"
