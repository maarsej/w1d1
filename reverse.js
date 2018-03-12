var strings = process.argv.slice(2);

strings.forEach(function(entry){
  // console.log(entry);
  var characters = [];
  var reverseChar = [];
  var reverseWord = "";
  characters = entry.split('');
  for (i= 0; i<characters.length; i++){
    reverseChar[i] = characters[characters.length-(i+1)];
  }
  reverseWord = reverseChar.join('');
  console.log(reverseWord);
});
 //console.log(characters);}
