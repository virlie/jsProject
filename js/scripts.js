$(document).ready(function(){

//----------------- BACK END LOGIC-----------------------
  var rias = 0;
  var akeno = 0;
  var asia = 0;

function questionCheck(question) {
    if (question == 1){
      rias = rias + 1;

    } else if (question == 2) {
      akeno = akeno + 1;

    } else if (question == 3) {
      asia = asia + 1;
    } else {
      alert("oops");
    }
  }

  function mostCommon (ak,r,as) {
    var result = '';
    if ( ak > r && ak > as) {
      result = "Akeno is the only girl for you!";
    } else if ( r > ak && r > as) {
      result = "President Rias is your one and only senpai";
    } else if ( as > r && as > ak) {
      result = "Y-y-you better take care of Asia, you know?";
    } else if ( r == ak && r > as ){
      result = "Going after the two best plots, huh? You got Rias and Akeno";
    } else if ( r == as && r > ak ){
      result = "Perfect combo, brash meets meek! You got Akeno and Asia!";
    } else if ( as == ak && as > r ){
      result = "You could take asia or akeno, but be careful not to try and take both! They both get jealous";
    } else {
      result = "Somehow you got the bad end. Im not sure how, but good job";
    }
    return result;
  }

  //-----------------FRONT END LOGIC---------------------

  $(".choices").submit(function(event) {
    // dynamic variables
    event.preventDefault()
    for (i = 1; i < 3; i++) {
      window['question'+i] = parseInt($(("#question"+i)+" option:selected").val())
      if (window['question'+i] !== 0) {
        questionCheck(window['question'+i])
      }
      else {
        alert("You must fill out the whole form")
        break
      }
    }
    //log current counts
    console.log("akeno count: " + akeno)
    console.log("rias count: " + rias)
    console.log("asia count: " + asia)

    //find most common and alert user to their track
    var res = mostCommon(akeno,rias,asia)
    $("#output").append("<p>"+res+"</p>");

  });
})
