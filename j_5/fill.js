function fill(tab, str) {
  let a = [];
  for (i = 0; i < tab.length; i++) {
    a.push(str);
  }
  return a;
}

console.log(fill([1, 2, 3], "a")); // Doit afficher `['a', 'a', 'a']`
