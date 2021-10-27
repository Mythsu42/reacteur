function every(tab, func) {
  if (tab && func) {
    for (let i = 0; i < tab.length; i++) {
      if (func(tab[i]) == false) return false;
    }
    return true;
  }
  return false;
}

const isLargerThanTen = (element) => {
  if (element >= 10) {
    return true;
  } else {
    return false;
  }
};

console.log(every([10, 20, 30], isLargerThanTen)); // Doit afficher `true`

console.log(every([10, 8, 20], isLargerThanTen)); // Doit afficher `false`

console.log(every([4, 13, 5])); // Doit afficher `false`

console.log(every(null, isLargerThanTen)); // Doit afficher `false`
