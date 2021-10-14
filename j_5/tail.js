function tail(nbr) {
  let tails = [];
  for (i = 1; i < nbr.length; i++) {
    tails.push(nbr[i]);
  }
  return tails;
}
console.log(tail([1, 2, 3])); // Doit afficher `[2, 3]`
