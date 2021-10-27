const forEach = (arr, func) => {
  if (func !== undefined) {
    for (let i = 0; i < arr.length; i++) {
      func(arr[i]);
    }
  }
};

const callback = (value) => {
  console.log(value);
};

forEach([1, 2], callback); // Doit afficher `1` puis `2`

forEach([3, 1]); // Ne doit rien afficher

forEach([], callback); // Ne doit rien afficher

forEach(); // Ne doit rien afficher
