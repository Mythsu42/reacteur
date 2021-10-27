function find(tab, func) {
  for (let i = 0; i < tab.length; i++) {
    if (func(tab[i])) return tab[i];
  }
  return null;
}

const users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
  { user: "pebbles", age: 1, active: true },
];

const callback = (value) => {
  if (value.age < 40) {
    return true;
  } else {
    return false;
  }
};
console.log(find(users, callback));
// Doit afficher `{ user: 'barney', age: 36, active: true }`

console.log(
  find(users, (value) => {
    if (value.age > 50) {
      return true;
    } else {
      return false;
    }
  })
);
// Doit afficher `null`
