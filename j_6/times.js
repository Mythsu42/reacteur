function times(nbr, func) {
  let mytab = [];
  if (typeof nbr !== "number") return mytab;
  for (let i = 0; i < nbr; i++) {
    if (func !== undefined) mytab.push(func());
    else mytab.push(undefined);
  }
  return mytab;
}

function getRandomInteger() {
  return Math.round(Math.random() * 100);
}

console.log(times(5, getRandomInteger)); // Doit afficher un tableau contenant 5 valeurs aléatoires `[64, 70, 29, 10, 23]`

console.log(times(2, getRandomInteger)); // Doit afficher un tableau contenant 2 valeurs aléatoires `[13, 51]`

console.log(times(4)); // Doit afficher `[undefined, undefined, undefined, undefined]`

console.log(times("Hello", getRandomInteger)); // Doit afficher `[]`

console.log(times(null, getRandomInteger)); // Doit afficher `[]`
