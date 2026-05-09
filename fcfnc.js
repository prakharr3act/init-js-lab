// First class functions
// using fncs as a value



//High order Fnc

function consoleText(){
  return function(){
    console.log("Hello World!!")
  }
}

consoleText()();