//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here

  function isTyler(name){
    return (name === "Tyler") ? true : false;
  }



//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here

  function getName() {
    var name = prompt("Please enter your name", "Joe");

    return name;

  }


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here

  function welcome () {
    alert("Welcome, " + getName());
  }


//Next problem




//What is the difference between arguments and parameters?

  //Answer Here
  var arguments = "The actual values a function uses as the function executes";
  var parameters = "The placeholders used in a function definition that tell it to expect input values and do something with them"

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
  var falsy = ["false", 0, "", null, undefined, NaN];

  function falsyCheck(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (!arr[i]) {
        console.log(arr[i] + " is falsy");
      }
    }
  }


//Next Problem



//Create a function called myName that returns your name

  //Code Here
  function myName(){ return 'Adam Romines';}

//Now save the function definition of myName into a new variable called newMyName

  //Code Here
  var myNewName = function() {
    return 'Adam Romines';
  };

//Now alert the result of invoking newMyName

  alert(myNewName());

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
  function outerFn () {
    return function() {
      return 'Adam Romines';
    }
  }


//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here

  var innerFn = outerFn();

//Now invoke innerFn.
  innerFn();
