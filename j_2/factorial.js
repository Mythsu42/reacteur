const a = process.argv[2];
let b = 1;

if (!Number.parseFloat(a)) return console.log("Error");

for (let i = 1; i <= a; i++) {
  b *= i;
}
console.log(b);
