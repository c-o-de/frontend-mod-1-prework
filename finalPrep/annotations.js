// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
// This is a function with parameters.
function buildABear(name, age, fur, clothes, specialPower) {
  // Create a variable with a string that uses interpolation.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
//  Create a variable with an array.
  var demographics = [name, age];
  // Create a variable with a string that uses concatenation.
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // Create an object.
  var builtBear = {
    // Key/value pair
    basicInfo: demographics,
    // Key/value pair
    clothes: clothes,
    // Key/value pair
    exterior: fur,
    // Key/value pair with a number
    cost: 49.99,
    // Key/value pair with an array
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    // Key/value pair with boolean.
    isCuddly: true,
  };
// Returns values from the object.
  return builtBear
}
// Calls the function and passes arguments.
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
// Calls the function and passes arguments.
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');



//FizzBuzz
// Defines a function with parameters
function fizzBuzz(num1, num2, range) {
  // Creates a loop.
  for (var i = 0; i <= range; i++) {
    // If statement.
    if (i % num1 === 0 && i % num2 === 0) {
      // Logs sting if above IF statement tests true.
      console.log('fizzbuzz');
      // Else/If statement runs if the above statement tests false.
    } else if (i % num1 === 0) {
      // If it's true it logs the following string.
      console.log('fizz');
      // If the above statemnt evaluets to false it checks if folloing is true.
    } else if (i % num2 === 0) {
      // If true it will log the folloing string.
      console.log('buzz');
      // If all of the above statements test false it will default to this.
    } else {
      // This will log if none of the statements are true.
      console.log(i);
    }
  }
}
// This is going to call the function and pass values.
fizzBuzz(3, 5, 100);
// This is going to call the function and pass values.
fizzbuzz(5, 8, 400);
