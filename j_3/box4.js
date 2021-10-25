let str = "";

function myBox(valueX, valueY) {
  if (valueX < 1 || valueY < 1 || isNaN(valueY) || isNaN(valueX)) {
    return console.log("Error");
  }
  for (let y = 1; y <= valueY; y++) {
    for (let x = 1; x <= valueX; x++) {
      if (x == 1 && y == 1) str += "A";
      else if (x == valueX && y == 1) str += "B";
      else if (x == 1 && y == valueY) str += "C";
      else if (x == valueX && y == valueY) str += "D";
      else if ((x == 1 || x == valueX) && y > 2 && y < valueY - 1) str += "*";
      else if ((x == 1 || x == valueX) && y > 1 && y < valueY) str += "|";
      else if ((y == 1 || y == valueY) && x > 2 && x < valueX - 1) str += "*";
      else if ((y == 1 || y == valueY) && x > 1 && x < valueX) str += "-";
      else str += " ";
    }
    str += "\n";
  }
  return console.log(str);
}
myBox(parseInt(process.argv[2]), parseInt(process.argv[3]));
