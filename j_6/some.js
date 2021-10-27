function some(tab, func) {
  for (let i = 0; i < tab.length; i++) {
    if (func(tab[i])) return true;
  }
  return false;
}

const isLargerThanTen = (element) => {
  if (element >= 10) {
    return true;
  }
  return false;
};

console.log(some([10, 9, 8], isLargerThanTen)); // Doit afficher `true`
console.log(some([1, 4, 2], isLargerThanTen)); // Doit afficher `false`
