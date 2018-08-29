
function countLetters(sentence){
  sentence = sentence.split(" ").join("");
  var letters = {};
  //var count = 1;

  for(var i = 0; i < sentence.length; i++){
    //letters["a"]=1
    if(letters[sentence.charAt(i)]){
      letters[sentence.charAt(i)]++;
      //count++;
    } else{
      letters[sentence.charAt(i)] = 1;
    }

  }
  return letters;
}

console.log(countLetters("Lighthouse in the house"));
