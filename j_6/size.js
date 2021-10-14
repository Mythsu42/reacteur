function size(tab) {
  let a;
  if (Array.isArray(tab) || typeof tab === "string") {
    return tab.length;
  } else return 0;
}
console.log(size("pebbles"));
console.log(size([1, 2, 3])); // Doit afficher `3`
console.log(size()); // Doit afficher `0`
console.log(size(null)); // Doit afficher `0`
console.log(size(10)); // Doit afficher `0`
console.log(size(true)); // Doit afficher `0`
