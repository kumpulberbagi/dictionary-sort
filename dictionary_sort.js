"use strict"

const readline = require('readline');

function dictionary_sort(arr) {
  var tampung = [];
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    console.log('Type a word:');
    rl.on('line',(input)=>{
      tampung.push(input.toLowerCase())
      console.log('Type another word (or press enter to finish):');
      if(input==""){
        var hasil = tampung.sort();
        console.log(`Congratulations! Your dictionary has ${hasil.length-1} words:`)
        for (var i = 1; i < hasil.length; i++) {
          console.log(hasil[i])
        }
        rl.close();
      }
    })
}

dictionary_sort()
