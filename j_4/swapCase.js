function swapCase(tab) {
  let str = tab.join("/");
  let newstr = "";
  for (i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      newstr += str[i].toLowerCase();
    } else if (str[i] == str[i].toLowerCase()) {
      newstr += str[i].toUpperCase();
    }
  }
  let newtab = newstr.split("/");
  return newtab;
}
console.log(swapCase(["Hello", "Le Reacteur"])); // Affichera : ["hELLO", "lE rEACTEUR"]
