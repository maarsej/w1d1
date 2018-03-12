var password = process.argv.slice(2)
var word = password[0];
var characters = word.split('');

for (i = 0; i<characters.length; i++){
  if (characters[i] === "a"){
    characters[i]= 4;
  }
  if (characters[i] === "e"){
    characters[i]= 3;
  }
  if (characters[i] === "o"){
    characters[i]= 0;
  }
  if (characters[i] === "l"){
    characters[i]= 1;
  }
}
//console.log(characters);
var output = characters.join('');
console.log(output);


