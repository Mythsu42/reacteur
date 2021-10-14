function without(firstTab, secondTab) {
  let a = [];
  for (i = 0; i < firstTab.length; i++) {
    if (secondTab.indexOf(firstTab[i]) === -1) {
      a.push(firstTab[i]);
    }
  }
  return a;
}

console.log(without([2, 1, 2, 3], [1, 2])); // Doit afficher `[3]`
