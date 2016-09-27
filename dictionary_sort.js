// liblary
const readline = require('readline');
const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});

// variable
var tampung = [];

// funciton
function dictionary_sort(arr){
 for(var i = 0; i < arr.length; i++){
   for(var j = i+1; j < arr.length; j++){
     if(arr[j] < arr[i]){
       var temp = arr[i];
       arr[i] = arr[j];
       arr[j] = temp;
     }
   }
 }
 for(var i = 0; i < arr.length; i++){
   console.log(arr[i]);
 }
 rl.close()
}

// inputan berulangs
rl.setPrompt('masukan inputan : ')
rl.prompt()

rl.on('line', (input) => {
  if(input == "") {
    rl.close();
    dictionary_sort(tampung);
  } else {
    tampung.push(input);
    rl.prompt();
  }

});

// inputan
// rl.setPrompt('enter a word : ')
// rl.prompt();
//
// rl.on('line', function(line){
//  tampungArr[tampungArr.length] = line.trim();
//  if(tampungArr.length < 4){
//    rl.setPrompt("Type another word (or press enter to finish):\n");
//    rl.prompt();
//  } else {
//    console.log('\n Congratulations! Your dictionary has 4 words:');
//    dictionary_sort(tampungArr);
//  }
// }).on('close', () => {
//  process.exit(0);
// });

// lol


// //
// const readline = require('readline')
//
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
//
// rl.setPrompt('masukan inputan : ')
// rl.prompt()
//
// rl.on('line', (input) => {
//   console.log(`Received: ${input}`);
//
// });
//
//
// function dictionary_sort(arr) {
//   // Your code here to sort the array
//
// }

// your code here to initialize the program and take user input

//var tampung = [];

// rl.setPrompt('masukan inputan : ')
// rl.prompt()
//
// rl.on('line', (input) => {
//   console.log(`Received: ${input}`);
//
//   if(input == "") {
//     rl.close();
//     console.log(tampung);
//
//   } else {
//     tampung.push(input);
//     //console.log(converCompleteSentence(input));
//     rl.prompt()
//   }
//
// });

// dokumentasi
// rl.setPrompt('Input kata atau kalimat : ')
// rl.prompt()
//
// rl.on('line', (input) => {
//   console.log(`Received: ${input}`,converCompleteSentence(input));
// });
