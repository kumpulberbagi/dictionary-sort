const readline = require('readline');

var kata=[];
function dictionary_sort(arr) {
  // Your code here to sort the array

  for(var i = 0 ; i < arr.length ; i++){
    for(var j = 0 ; j <= arr.length - i ; j++){
      if(arr[j] > arr[j+1]){
          /*swap*/
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j+1] = temp;
      }
    }
  }
  // console.log(arr);
  for(var k=0;k<arr.length;k++){
    console.log(arr[k]);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt("Type a word?");
rl.prompt();

rl.on('line', (line) => {

  if(line.trim() == "") {
    rl.close();
  }
  else {
    rl.setPrompt("Type another a word?");
    var flag=0;
    for(var l=0; l<kata.length; l++) {
      if(kata[l].toLowerCase() == line.trim().toLowerCase()) {
        flag = 1;
      }
    }
    if(flag == 0) {
      kata.push(line.trim());
    }
  }
  rl.prompt();
}).on('close', () => {
  console.log('Congratulation! Your dictionary has ' + kata.length);
  dictionary_sort(kata);
  process.exit(0);
});
