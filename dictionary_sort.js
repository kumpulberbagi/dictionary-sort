const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var arr= []
function dictionary_sort(arr) {
  // Your code here to sort the array
  
}

// your code here to initialize the program and take user input
rl.setPrompt('Type a word : \n=>')
rl.prompt()
rl.on('line', (input) => {
rl.prompt()
arr.push(input)
if(input === ""){
  arr.pop()
  rl.close()
}
}).on('close',() => {
  console.log(`Congratulation! your dictionary has ${arr.length} words:\n `+ dictionary_sort(arr));
});
