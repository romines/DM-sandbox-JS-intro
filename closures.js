//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here
  var inner = outer();

//Once you do that, invoke inner.

  //Code Here
  inner();



//Next problem



var callFriend = function(){
  var friend = 'Jake';
  return function (number){
    return 'Calling ' + friend + ' at ' + number;
  }
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here

  // console.log(callFriend()('435-215-9248'));



//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //Code Here

  function makeCounter() {
    var theCount = 0;
    return function () {
      theCount += 1;
      return theCount;
    }
  }

  var count = makeCounter();
  // count() // 1
  // count() // 2
  // count() // 3
  // count() // 4



//Next Problem



/*
  Write a function that does something simple (console, alert, etc). Write a second
  function that accepts the first function as it's first parameter. The second
  function should return a new third function which, when invoked, invokes the
  first, original function that was passed in, but will only ever do so once.
*/

  //Code Here

  function simple() {
    console.log('Ahh, that was simple');
  }

  function middle (func) {
    return function () {
      func();
    }
  }


//Next Problem



/*
  Now, similar to the last problem, write a function called 'fnCounter' that accepts
  two parameters. The first parameter will be an anonymous function and the second
  parameter, 'N', will be a number. Now, in 'fnCounter', allow the anonymous funciton
  to be invoked 'N' number of times. After it's been invoked 'N' number of times, return 'STOP'.
*/

  function fnCounter (fn, N) {

    for (var i=0; i<N; i++) {
      fn();
    }
    return 'STOP';
  }

  // for testing
  function noise(){
    console.log('bang');
  }


//Next Problem



/*
  var counter = function(){
    for (var i=1; i<=5; i++) {
      setTimeout( function timer(){
          console.log( i );
      }, i*1000 );
    }
  };

  Above you have a function named counter. Examine the function (without running
  the code) then below write what you expect to happen when the funciton is invoked.
  *Hint: setTimeout calls a function or evaluates an expression after a specified
  number of milliseconds.

    //Answer Here

    Answer: the value of the variable i (integers 1 through 5) will get logged
    5 times. The time between each logging changes as the value of i changes: First
    1 second, then 2, then 3, etc.



  Now, run the function in your console and note what happpens.

  Was your answer right or wrong?

    //Answer Here

    Wrong!


  Fix the counter function so that it works the way you expect it to work. (logging 1 then 2 then 3, etc)
*/

    //Code Here


    var counter = function(){

      for (var i=1; i<=5; i++) {

        foo(i);

        function foo(num){
            setTimeout( function (){
              console.log( num );
          }, i*1000 );
        };

      }
    };

    var counterAlternate = function(){
      for (var i=1; i<=5; i++) {
        setTimeout( function timer(num){
          console.log(num);
          }, i*1000, i );
      }
    };



//Next Problem



/*
  Make the following code work

  funcArray[0]() //0
  funcArray[1]() //1
  funcArray[2]() //2
  funcArray[3]() //3
  funcArray[4]() //4
  funcArray[5]() //5

  *Hint: Don't let this fool you. Break down what's really happening here.
*/
var funcArray = [];
manyFuncs();

function manyFuncs() {

  for (var i=0; i<5; i++){

    fillIt(i);

    function fillIt(num){
      funcArray[num] = function(){
        return num;
      };
    }

  }
}
