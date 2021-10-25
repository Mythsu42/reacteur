let a = 1;

function wordCount(str) {
  if (str == "") return console.log("Error");
  for (let i = 0; i < str.length; i++) {
    if (str[i] == " " && str[i - 1] != " ") {
      a++;
    }
  }
  console.log(a);
}

wordCount(process.argv[2].trim());
