function displayArray(tab) {
  let str;

  str = "";
  for (i = 0; i < tab.length; i++) {
    str += tab[i];
    str += " ";
  }
  if (tab === undefined) {
    str === undefined;
  }
  return str;
}
console.log(displayArray(["Xavier", "Farid", "Kévin"])); // Affichera "Xavier Farid Kévin"
console.log(displayArray(["Pomme", "Banane", "Abricot", "Cerise"])); // Affichera "Pomme Banane Abricot Cerise"
