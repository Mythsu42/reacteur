function compare(x, y) {
  return x - y;
}
function arrayAddition(nbr) {
  nbr.sort(compare);
  let myNumber = 0;

  for (i = 0; i < nbr.length - 1; i++) {
    myNumber += nbr[i];
  }
  if (myNumber == nbr[nbr.length - 1]) {
    return true;
  }
  return false;
}
console.log(arrayAddition([1, 2, 3, 12, 6])); // Affichera true
console.log(arrayAddition([1, 2, 3, 4])); // Affichera false
