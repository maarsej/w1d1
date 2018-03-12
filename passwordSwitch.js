var password = process.argv.slice(2)
var characters = password[0].split('');

for (i = 0; i<characters.length; i++){
  switch (characters[i])
  {
  case 'a':
    characters[i]= 4;
    break;
  case 'e':
    characters[i]= 3;
    break;
  case'o':
    characters[i]= 0;
    break;
  case'l':
    characters[i]= 1;
    break;
  }
}
var output = characters.join('');
console.log(output);