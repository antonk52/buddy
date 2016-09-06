function page() {

  var stats;

  this.init = function( settings ) {

    stats = settings;

    // First time visiting this site?
    if( !stats.opened )  {
      
      speak("Didn't think you needed help with it, did you?");

    } else {

      // 2 reddit tabs open?
      if( stats.similar === 2 ) {
        speak("At least read the answer, please");

      // 3 reddit tabs open
      } else if (stats.similar === 3) {
        speak("Tough work, eh?");

      // Back on reddit, after being on it once.
      } else {
        speak("Still cannot do it? Pathetic");
      }
    }
  }
}