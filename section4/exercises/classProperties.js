/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog

// Prompt 2: Snack

// Prompt 3: Shirt

class Dog {

}

var dog1 = new Dog();
var dog2 = new Dog();
console.log(dog1);
console.log(dog2);

class Snack {

}
var snack1 = new Snack();
var snack2 = new Snack();

console.log(snack1);
console.log(snack2);
class Shirt {

}
var shirt1 = new Shirt();
var shirt2 = new Shirt();
console.log(shirt1);
console.log(shirt2);


//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog

// Prompt 2: Snack

// Prompt 3: Shirt
class Dog {
constructor() {
  this.weightLbs = 34;
  this.color = "white";
  this.heightInches = 19;
  }
}

var dog1 = new Dog();
console.log(dog1);



class Snack {
constructor() {
  this.flavor = 'sweet';
  this.texture = 'soft';
  this.fresh = true;
  }
}
var snack1 = new Snack();
console.log(snack1);




class Shirt {
constructor() {
  this.color = 'blue';
  this.size = 'XXL';
  this.material = 'cotton';
}
  }
var shirt1 = new Shirt();
console.log(shirt1);


//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog

// Prompt 2: Snack

// Prompt 3: Shirt
class Dog {
constructor(weightLbs, furColor, heightInInches) {
  this.weight = weightLbs;
  this.color = furColor;
  this.height = heightInInches;
  }
}

var dog1 = new Dog(55, 'black', 17);
 console.log(dog1);

var dog2 = new Dog(32, 'white', 30);
 console.log(dog2);

class Snack {
constructor(taste, texture, freshness) {
  this.flavor = taste;
  this.texture = texture;
  this.fresh = freshness;
  }
}
var snack1 = new Snack('bitter', 'hard', false);
console.log(snack1);

var snack2 = new Snack('sweet', 'soft', true);
console.log(snack2);



class Shirt {
constructor(color, size, material) {
  this.color = color;
  this.size = size;
  this.material = material;
}
  }
var shirt1 = new Shirt('yellow', 'XL', 'silk');
 console.log(shirt1);

 var shirt2 = new Shirt('blue', 'S', 'hemp');
 console.log(shirt2);
