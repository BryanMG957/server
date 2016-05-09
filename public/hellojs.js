console.log("I'm in a JS file!");

/*
Bacon ipsum dolor amet shank drumstick bacon t-bone beef strip steak pig ribeye picanha flank biltong.
Capicola tongue pastrami swine spare ribs pork chop ham hock ground round meatloaf.
Jerky salami pork loin chuck frankfurter ball tip pork chop pancetta alcatra t-bone turkey capicola doner bresaola.
Rump shankle short ribs cow tongue, jowl sausage sirloin boudin pork belly swine frankfurter.
Rump turducken strip steak tail.
*/

// var input;
// if (input){
//   console.log(input);
// } else {
//   console.log("It's not defined.");
// }
//
// var test = false;
// var output = test ? "Passed the test" : "Failed the test";
// console.log(output);

// var value = 2;
// if (value === 0) {
//   console.log("zero");
// } else if (value === 1) {
//   console.log("one");
// } else {
//   console.log("or something else");
// }

var value = 0;
switch (value){
  case 0:
    console.log("The value is 0, hence this console.log is runned");
  break;
  case 1:
    console.log("The value is 1, hence this console.log is runned");
  break;
  default:
    console.log("The value is neither 0 or 1, hence this console.log is runned");
  break;
}

var x = 0;
while (x < 10) {
  console.log(x);
  x++
}

var a = 0;
while (true) {
  console.log(a);
  if (a >= 10) {
    break;
  } else {
    a++;
  }
}

for (var i = 0; i <= 10; i++) {
  console.log(i);
}

var arr = ["a", "b", "c", "d"];

arr.forEach(function(item){
  console.log(item);
});

function my_func_stmt(arg) {
  console.log("inside my function");
  console.log(arg);
}

my_func_stmt("Bryan Martinez")

var my_func_exp = function(arg) {
  console.log("inside my function");
  console.log(arg);
}

my_func_stmt("Hola");
my_func_exp("Hola");

var one = function(){
  return 1;
}
console.log(one());

// function addArgs() {
//   console.log('printing args:', arguments);
// }
//
// addArgs(1,2,3,4);

function addArgs() {
  var sum = 0;
  for (var i = 0; i < arguments.length; i++){
    sum += arguments[i];
  }
  return sum;
}
console.log(addArgs(3,0.13,0.01));

function defaultArgs(a, b) {
  if (typeof(a) === "undefined") {
    a = 0;
  }
  if (typeof(b) === "undefined") {
    b = 0;
  }
  return a + b;
}
console.log(defaultArgs(3,0.13,0.01));
