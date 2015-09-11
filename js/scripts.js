// function phraseChanger(phrase, word_to_remove, word_to_add) {
//   //debugger;
//   phrase = phrase.replace(/[.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");  //removing punctuation
//   var phrase_array = phrase.split(' ');                 //split the words by each space
//
//   for (var i = 0; i < phrase_array.length; i++) {
//     if (wordChecker(phrase_array[i]), word_to_remove) {   //if this is the word we want to change
//       phrase_array[i] = word_to_add;
//     }
//   } //End for loop
//   var new_phrase = "" + phrase_array;                     //for some reason, .toString() didn't work. Thank you, Professor Google, for the new way
//
//   return new_phrase;
//
// } //End phraseChanger()
//
//
// function wordChecker(word_in_phrase, word_to_remove) {
//   if (word_in_phrase === word_to_remove) {return true;}
//   else {return false;}
// } //End wordChecker()





function phraseChanger(phrase, word_to_remove, word_to_add) {
  //debugger;
  var regex = new RegExp(word_to_remove, "gi");
  var new_phrase = phrase.replace(regex, word_to_add);
  console.log(new_phrase);
  return new_phrase;

} //End phraseChanger()
