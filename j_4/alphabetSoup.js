function alphabetSoup(str) {
  let newstr = str.split("");
  newstr.sort();
  let myvar = newstr.join("");
  return myvar;
}
console.log(alphabetSoup("hello")); // Affichera "ehllo"
console.log(alphabetSoup("thereactor")); // Affichera "aceehorrtt"
console.log(alphabetSoup("hooplah")); // Affichera "ahhloop"
