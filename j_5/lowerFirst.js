function lowerFirst(str) {
  let a = "";
  for (i = 0; i < str.length; i++) {
    if (i == 0) {
      a += str[0].toLowerCase();
      i++;
    }
    a += str[i];
  }
  return a;
}

console.log(lowerFirst("Fred")); // Doit afficher `fred`
console.log(lowerFirst("FRED")); // Doit afficher `fRED`
