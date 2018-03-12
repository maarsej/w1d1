var strings = process.argv.slice(2);

strings.forEach(function(entry){
var char = [];
var plWord ="";
var holder ="";
char = entry.split('');

holder = char[0];

for(var i = 0; i<entry.length; i++){
  if (i<entry.length-1){
    char[i] = char[i+1];
  }
  else
    char[i] = holder;
}
plWord = char.join('');
console.log(plWord+"ay");

});