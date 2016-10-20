// GLOBAL VARIABLE =====================
var inquirer = require("inquirer");
var prompt = require('prompt');
var Word = require('./word.js');
var game = require("./game.js");



// FUNCTIONS / CONSTRUCTORS ========================
prompt.start();

game = {
  wordBank : game.game.wordBank,
  wordsWon : 0,
  guessesRemaining : 10, //per word
  currentWrd : null, //the word object
  startGame : function (wrd){
    //the user has 10 guesses
    this.resetGuessesRemaining();

    //get a random word from the array
    this.currentWrd = new Word.Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);

    this.currentWrd.getLets(); //populate currentWrd (made from Word constructor function) object with letters
    console.log("Let's Play Hangman!");
    console.log("Guess this city, one letter at a time")
    this.keepPromptingUser();

  },
  resetGuessesRemaining : function(){
    this.guessRemaining = 10;
  },
  keepPromptingUser : function(){
    var self = this;

/*---------------------------------------------------------------*/

    prompt.get(['guessLetter'], function(err, result) {
        
        //console.log(result);

        console.log('  The letter or space you guessed is: ' + result.guessLetter);

        //this checks if the letter was found and if it is then it sets that specific letter in the word to be found
        var findHowManyOfUserGuess = self.currentWrd.checkIfLetterFound(result.guessLetter);

        //if the user guessed incorrectly minus the number of guesses they have left
        if (findHowManyOfUserGuess == 0){
          console.log('You guessed wrong!');
          self.guessesRemaining--;
        }else{
          console.log('You guessed right!');

          //check if you win only when you are right
          if(self.currentWrd.didWeFindTheWord()){
            console.log('You Won!!!');
            return; //end game
          }
        }

/*---------------------------------------------------------------*/

        console.log('Guesses remaining: ', self.guessesRemaining);
        console.log(self.currentWrd.wordRender());
        console.log('Here are the letters you guessed already: ', self.currentWrd.lettersGuessed);

        if ((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
          self.keepPromptingUser();
        }
        else if(self.guessesRemaining == 0){
          console.log('Game Over! The word was ', self.currentWrd.word);
          console.log('Better luck next time!');
        }else{
          console.log(self.currentWrd.wordRender());
        }
    });
  }


};

game.startGame();