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
      console.log('Type another word (or press enter to finish):');
    })

}

dictionary_sort()
