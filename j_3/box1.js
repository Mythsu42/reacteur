const myBox = (num1, num2) => {
  let str = "";
  for (i = 0; num1 >= 1 && num2 >= 1; i++) {
    for (i = 0; num1 >= i; i++) {
        if (num1 == 1){
            str += "o";
        }if (i == num1){
            str += "o\n";
        }else str += "-"
    }
  if (num1 ==0 || num2 == 0){
      str = "number is not available"
  }
  return str;
};
