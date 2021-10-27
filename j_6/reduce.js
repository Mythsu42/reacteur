function reduce(tab, func) {
  let total = 0;
  for (let i = 0; i < tab.length; i++) {
    total = func(total, tab[i]);
  }
  return total;
}

const result = reduce([0, 1, 2, 3, 4], (previousValue, currentValue) => {
  return previousValue + currentValue;
});

console.log(result); // Doit afficher `10`
