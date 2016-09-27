const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var arr= []
function dictionary_sort(arr) {
  // Your code here to sort the array
  var values, i, j
  for(i = 0; i<arr.length; i++){
    values = arr[i]
    for( j= i-1; j>=0 && arr[j] > values; j--){
      arr[j+1]=arr[j]
    }
    arr[j+1] = values
  }
  return arr.join(",")
}

// your code here to initialize the program and take user input
rl.setPrompt('Type a word : \n=>')
rl.prompt()
rl.on('line', (input) => {
if(input==""){
rl.close()
} else {
  rl.setPrompt('Type a word : (or press enter to finish)\n=>')
  arr.push(input)
  rl.prompt()
}
}).on('close',() => {
  console.log(`Congratulation! your dictionary has ${arr.length} words:\n `+ dictionary_sort(arr));
});
