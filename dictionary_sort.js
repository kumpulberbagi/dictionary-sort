var words = [];
function add_words(word) {
  words.push(word);
}
function dictionary_sort(words) {
  // Your code here to sort the array
  var wordsLowCase = [];

  if (words.length > 0) {
    //converting words to lower case
    for (var i=0; i<words.length; i++){
     wordsLowCase.push(words[i].toLowerCase());
    }
    //looping to sort word in words
    for (var i = 0; i < wordsLowCase.length; i++) {
      for (var j = i; j < wordsLowCase.length; j++) {
        if(wordsLowCase[j] < wordsLowCase[i]){
          var first_word = wordsLowCase[i];
          wordsLowCase[i]= wordsLowCase[j];
          wordsLowCase[j] = first_word;
        }
      }
    }

    //for sorting according to alphabet, withour paying attention to lower or upper case
    for (var i = 0; i < words.length; i++) {
      for (var j = 0; j < wordsLowCase.length; j++) {
        if(words[i].toLowerCase() === wordsLowCase[j]) {
          var indexWords = words[i];
          words[i] = words[j];
          words[j] = indexWords;
        }
      }
    }
    return words;
  }
  else {
    console.log("You haven't enter any words!");
  }

}

// your code here to initialize the program and take user input
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.setPrompt("Type a word or type 'quit' to close : ");

rl.on('line', (line) => {

  if (line === 'quit') {
    rl.close();
  }
  else if (line === '') {
    words = dictionary_sort(words);
    console.log("Congratulations! Your dictionary has " + words.length + " words");
    for (var i = 0; i < words.length; i++) {
      console.log(words[i]);
    }
  }
  else {
    add_words(line);
  }
  rl.prompt();
}).on('close', () => {
  console.log('Bye bye!');
  process.exit(0);
});
