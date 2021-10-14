function compact(tab) {
  let a = [];
  for (i = 0; i < tab.length; i++) {
    if (tab[i] != false || null || 0 || "" || undefined || NaN) {
      a.push(tab[i]);
    }
  }
  return a;
}

console.log(compact([0, 1, false, 2, "", 3])); // Doit afficher `[1, 2, 3]`
