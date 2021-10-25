let str = "";

function myBox(valueX, valueY) {
  if (valueX < 1 || valueY < 1 || isNaN(valueY) || isNaN(valueX)) {
    return console.log("Error");
  }
  for (let y = 1; y <= valueY; y++) {
    for (let x = 1; x <= valueX; x++) {
      if ((x == 1 && y == 1) || (x == valueX && y == 1)) str += "A";
      else if ((y == valueY && x == 1) || (x == valueX && y == valueY))
        str += "C";
      else if (
        ((x == 1 || x == valueX) && y > 1 && y < valueY) ||
        ((y == 1 || y == valueY) && x > 1 && x < valueX)
      )
        str += "B";
      else str += " ";
    }
    str += "\n";
  }
  return console.log(str);
}

myBox(parseInt(process.argv[2]), parseInt(process.argv[3]));
