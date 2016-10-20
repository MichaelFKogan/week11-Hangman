var Letter = function(let) {
  
    this.charac = let;
    this.appear = false;
    this.letterRender = function() {
      if (this.appear === false) {
        return "-";
      } else {
        return this.charac;
      }
    }

};

//export the Letter constructor here
exports.Letter = Letter;