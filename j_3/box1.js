let str = "";
function myBox(horizontal, verticale) {
  if (horizontal == 0 || verticale == 0 || !horizontal || !verticale)
    return console.log("Error");
  for (let i = 1; i <= verticale; i++) {
    for (let j = 1; j <= horizontal && (i == 1 || i == verticale); j++) {
      if (j == 1 || j == horizontal) str += "o";
      if (j > 1 && j < horizontal) str += "-";
    }
    if (i > 1 && i < verticale) {
      for (let k = 1; k <= horizontal; k++) {
        if (k == 1 || k == horizontal) str += "|";
        if (k > 1 && k < horizontal) str += " ";
      }
    }
    str += "\n";
  }

  return console.log(str);
}

myBox(parseInt(process.argv[2]), parseInt(process.argv[3]));
