function dictionary_sort(arr) {
  // Your code here to sort the array
}

// your code here to initialize the program and take user input
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.setPrompt("Masukkan Kata Disini?");
var temp = [];
rl.prompt();
rl.on('line', (input) => {
  if (input === "") {
    rl.close();
  } else {
    temp.push(input);
    rl.prompt();
  }
})
