"use strict"

const readline = require('readline');

function dictionary_sort(arr) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    console.log('Type a word:');
    rl.on('line',(input)=>{
      //console.log(input);
    })

}

dictionary_sort()
