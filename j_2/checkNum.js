function checkNums(num1, num2) {
  if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
    return console.log("Ereur ");
  }
  if (num1 > num2) return console.log("A est superieur a B");
  else if (num1 < num2) return console.log("A est inferieur a B");
  return console.log("A est egal a B");
}

checkNums(parseFloat(process.argv[2]), parseFloat(process.argv[3]));
