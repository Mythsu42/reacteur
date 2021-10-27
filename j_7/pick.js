function pick(value, tab) {
  let myObj = {};
  for (let i = 0; i < tab.length; i++) {
    myObj[tab[i]] = value[tab[i]];
  }
  return myObj;
}

console.log(pick({ a: 1, b: "2", c: 3 }, ["a", "c"])); // Doit afficher { 'a': 1, 'c': 3 }
