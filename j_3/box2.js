let str = "";

function myBox(valueX, valueY) {
  if (valueX < 1 || valueY < 1 || !valueX || !valueY)
    return console.log("Error");
  for (let y = 1; y <= valueY; y++) {
    for (let x = 1; x <= valueX; x++) {
      if (y == 1 && x == 1) str += "/";
      else if (y == valueY && valueY > 1 && valueX == x && x > 1) str += "/";
      else if (y == 1 && x == valueX && x > 1) str += "\\";
      else if (valueY == y && y > 1 && x == 1) str += "\\";
      else if (
        ((y == 1 || y == valueY) && x > 1 && x < valueX) ||
        ((x == 1 || x == valueX) && y > 1 && y < valueY)
      )
        str += "*";
      else str += " ";
    }
    str += "\n";
  }
  return console.log(str);
}

myBox(parseInt(process.argv[2]), parseInt(process.argv[3]));
