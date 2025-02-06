
function strCount(str, letter){  
  //code here
  // count the number of letters in the str.
  //'Hello', 'o' => 1
  
  //return str.replaceAll(letter, '#');
  
  return str.split(letter)
  
}

test1 = strCount('hollo', 'o');

console.log(test1);


