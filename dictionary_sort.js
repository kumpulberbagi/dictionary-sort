function dictionary_sort(arr) {
  // Your code here to sort the array
  for (var i = 0; i < arr.length; i++) {

  }

}

// your code here to initialize the program and take user input
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.setPrompt("Masukkan Kata Disini?");
var arr = [];
rl.prompt();
rl.on('line', (input) => {
  if (input === "") {
    rl.close();
    dictionary_sort(arr);
  } else {
    arr.push(input);
    rl.prompt();
  }
})
