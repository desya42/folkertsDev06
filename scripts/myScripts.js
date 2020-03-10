console.log("Waiting on user name");
//function that delivers a greeting
function greeting() {
  console.log("user put in name ");
  console.log("starting to have fun");
  var inputName = document.getElementById("nameInput");
  var outputGreet = document.getElementById("outputGreeting");
  var name = nameInput.value;
  console.log("user submitted name: " + name);
  console.log("outputting greeting message");
  outputGreet.value = "Hello, " + name + " nice to meet you!";
  console.log("user can see the greeting");
}
//function to count number of letters
function count() {
  console.log("starting to count letters");
  var inputName = document.getElementById("nameInput");
  var outCount = document.getElementById("outCount");
  var name = nameInput.value;
  var count = name.length;
  console.log("outputting letter count message");
  outCount.value = "You have " + count + " letters and spaces in your name";
  console.log("user can see the count message");
}