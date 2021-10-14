function uniq(tab) {
  let a = [];
  for (i = 0; i < tab.length; i++) {
    if (a.indexOf(tab[i]) === -1) {
      a.push(tab[i]);
    }
  }
  return a;
}
console.log(uniq([2, 1, 2])); // Doit afficher `[2, 1]`
