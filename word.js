//import Letter above with requiring the letter.js file
var Letter = require("./letter.js");


var Word = function(wrd){
  //set a property called word and set it equal to what you think it should be
  this.word = wrd;
  this.lets = [ ];
  this.lettersGuessed = "";
  this.found = false;

  this.getLets = function() {
    for (var i = 0; i < this.word.length; i++) {
      this.lets.push(new Letter.Letter(this.word[i]));
    }
    //console.log(this.lets);
  };
  //set a property called lets to an empty array. We will eventually push letter objects in here  -- DONE

  //set a property called found to false  -- DONE

  //make a property called getLets, set it to a function and inside the function loop over the word property and push letter objects into the lets property. -- DONE

/*---------------------------------------------------------------*/

  //returns ture or false whether we found the current word or not
  this.didWeFindTheWord = function() {
    var count = 0;
    for (var i = 0; i < this.lets.length; i++) {
        if (this.lets[i].appear === true) {
          count++;
        }
    }
    if (this.lets.length === count) {
      this.found = true;
    } else {
      this.found = false;
    }
    //set the found property to true or false based on whether all the letters have been found or not -- DONE
    return this.found;
    //return the found property
  };

/*---------------------------------------------------------------*/

  this.checkIfLetterFound = function(guessLetter) {
    //set a variable whatToReturn to 0
    var whatToReturn = 0;
    this.lettersGuessed += guessLetter;
    for (var i = 0; i < this.lets.length; i++) {
        if (this.lets[i].charac === guessLetter) {
          this.lets[i].appear = true;
          whatToReturn++;
        }
    }
    //loop over the lets property and if the letter object's charac property equals the guessletter then set the appear property of the letter object to be true. Also increment whatToReturn.     -- DONE

    return whatToReturn;
  }

/*---------------------------------------------------------------*/

  this.wordRender = function() {
    //make a variable named str and set it to empty quotes
    var str = "";
    for (var i = 0; i < this.lets.length; i++) {
      str += this.lets[i].letterRender();
    }
    //loop over this.lets and call the letterRender property of the letter object that you're looping over, and add it to str        -- DONE

    return str;
  }
};
exports.Word = Word;
//export the Word constructor here at the end