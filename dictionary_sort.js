var array1 = []
var array2 = []

function dictionary_sort(input) {
  var len = input.length, value, i, j;

  for (i = 0; i < len; i++){
    value = input[i]
    for (j = i-1; j > -1 && input[j] > value; j--){
      input[j+1] = input[j];
    }
    input[j+1] = value
  }
  console.log(input)
}

const readline = require ('readline');
const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

rl.setPrompt("Type a word: ")
rl.prompt()
rl.on ('line', (line) => {


if(line.trim() == ""){
  rl.close();
}
else{
  rl.setPrompt("Type another word: (Press enter to finish)");
  array1.push(line.trim())

}
rl.prompt();
}).on('close', () =>{
  console.log("Your dictionary has " + array1.length + " words");
  dictionary_sort(array1);
  process.exit(0)
})

// your code here to initialize the program and take user input
