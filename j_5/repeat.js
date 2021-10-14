function repeat(str, n) {
  let a = "";
  for (i = 0; i < n; i++) {
    for (j = 0; j < str.length; j++) {
      a += str[j];
    }
  }
  return a;
}

console.log(repeat("*", 3)); // Doit afficher `***`
console.log(repeat("abc", 2)); // Doit afficher `abcabc`
console.log(repeat("abc", 0)); // Doit afficher  ``
