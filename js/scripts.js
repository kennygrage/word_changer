function phraseChanger(phrase, word_to_remove, word_to_add) {
  //debugger;
  var regex = new RegExp(word_to_remove, "gi");
  var new_phrase = phrase.replace(regex, word_to_add);
  return new_phrase;

} //End phraseChanger()

$(document).ready(function() {
  $("form#changer").submit(function(event) {

      //get the user input
      var phrase = $("input#phrase").val();
      var word_to_remove = $("input#word_to_remove").val();
      var word_to_add = $("input#word_to_add").val();

      //get the new phrase from the function
      var new_phrase = phraseChanger(phrase, word_to_remove, word_to_add);

      //empty the textboxes so the user can input again if they want to
      $("input#phrase").val('');
      $("input#word_to_remove").val('');
      $("input#word_to_add").val('');

      //clear old values, if any, from new_phrase
      $(".new_phrase").empty();

      //add new value into new_phrase
      $(".new_phrase").text(new_phrase);

      //show showme incase this is the first time the user clicked the submit button
      $(".showme").show();

      //I am not sure what this does, but I am supposed to put it here
      event.preventDefault();

  }); //End submit event
}); //End document.ready
