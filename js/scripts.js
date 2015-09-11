function phraseChanger(phrase, word_to_remove, word_to_add) {
  //debugger;
  var regex = new RegExp(word_to_remove, "gi");
  var new_phrase = phrase.replace(regex, word_to_add);
  console.log(new_phrase);
  return new_phrase;

} //End phraseChanger()
