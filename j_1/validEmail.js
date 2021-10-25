const email = "nono@lereacteur.io";
let valid = false;
let a = 0;
for (let i = 0; i < email.length; i++) {
  if (email[i] == "@") a++;
}
if (a == 1) valid = true;

console.log(valid);
