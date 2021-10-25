const str = "le reacteur c'est super !";
let counter = 0;
for (let i = 0; i < str.length; i++) {
  if (str[i] == ("e" || "E")) counter++;
}
console.log(counter);
