function initial(tab) {
  tab.pop();
  return tab;
}

console.log(initial([1, 2, 3])); // Doit afficher `[1, 2]`
