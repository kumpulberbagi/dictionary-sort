"use strict"

//use readline to fix this challenge
const readline = require('readline');
var array = [];
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  Prompt: 'Dictionary sort > '
});

rl.setPrompt("Please input your string : ")
rl.prompt()

rl.on('line', (line) => {
  var input = line.toLowerCase()
  if (!array.includes(line.toLowerCase())) {
    array.push(input);
  }
  rl.prompt()

  if (line === "") {
    array.splice(array.length-1,1)
    rl.setPrompt("Result : ")
    rl.prompt()
    console.log(sort(array))
    rl.close ();
  }
 });

 function sort(arr) {
  for(var i = 0; i < arr.length; i += 1) {
    var c = swap(arr, i, index_min(arr, i));
  }
  return c;
}

// Helping function

function swap(array, first, second) {
  var temp = array[first];
  array[first] = array[second];
  array[second] = temp;
  return array;
}



function index_min(array, index) {
  var min_value = array[index];
  var min_index = index;

    for(var i = min_index + 1; i < array.length; i++) {
        if(array[i] < min_value) {
            min_index = i;
            min_value = array[i];
        }
    }
    return min_index;
}
