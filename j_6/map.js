function map(tab, func) {
  myTab = [];
  for (let i = 0; i < tab.length; i++) {
    myTab.push(func(tab[i]));
  }
  return myTab;
}

const callback = (value) => {
  return value * 2;
};

console.log(map([1, 2, 3], callback)); // Doit afficher `[2, 4, 6]`

console.log(map([4, 1, 3])); // Doit déclencher une erreur `TypeError : ... is not a function`
