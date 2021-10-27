function filter(tab, func) {
  let myTab = [];

  if (tab && func) {
    for (let i = 0; i < tab.length; i++) {
      if (func(tab[i])) myTab.push(tab[i]);
    }
  }
  return myTab;
}

const isBigEnough = (value) => {
  if (value >= 10) {
    return true;
  }
  return false;
};

console.log(filter([12, 5, 8, 130, 44], isBigEnough)); // Doit afficher `[12, 130, 44]`

console.log(filter([1, 6, 173, 151])); // Doit afficher `[]`

console.log(filter(null, isBigEnough)); // Doit afficher `[]`
