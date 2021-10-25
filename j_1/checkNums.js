let a = parseFloat(process.argv[2]);
let b = parseFloat(process.argv[3]);
if (!Number.isInteger(a) || !Number.isInteger(b)) return console.log("Ereur ");
else {
  if (a > b) return console.log("A est superieur a B");
  else if (a < b) return console.log("A est inferieur a B");
  return console.log("A est egal a B");
}
