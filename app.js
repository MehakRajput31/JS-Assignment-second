//1. Create an array to use as your shopping list with 3 items: "Milk," "Bread," and"Apples."
 //list = [ " Milk", "Bread" ,"Apples"]
 //console.log( "length of  list :" ,list.length);
 //list  [2] = "Bananas";  
 //console.log (list);
 /*1. Create an empty array to use as a shopping list.
 2. Add Milk, Bread, and Apples to your list.
 3. Update "Bread" with Bananas and Eggs.
 4. Remove the last item from the array and output it into the console.
 5. Sort the list alphabetically.
 6. Find and output the index value of Milk.
 7. After Bananas, add Carrots and Lettuce.
 8. Create a new list containing Juice and Pop.
 9. Combine both lists, adding the new list twice to the end of the first list.
 10. Get the last index value of Pop and output it to the console.
 11. Your final list should look like this*/
 /* arrayshoppinglist = [ " Milk", "Bread" ,"Apples"];
  arrayshoppinglist.splice ( 1,1," Bananas","Egg");
  arrayshoppinglist.pop();
  arrayshoppinglist.sort();
  let findIndex = arrayshoppinglist.indexOf("Milk");
  console.log(findIndex);
  arrayshoppinglist.splice( 1,1, "Carrots", " Lettuce" ); 
  console.log(arrayshoppinglist);
  arraynewlist = ["Juice","Pop" ,"Juice","Pop"];
  newlist = arrayshoppinglist.concat(arraynewlist);
  console.log(newlist);
  let findIndex2= newlist.indexOf("Pop");
  console.log(findIndex2);*/
  
arrayshoppinglist =[ "Milk","Bread","Apples"];
console.log(arrayshoppinglist);
arrayshoppinglist.splice (1,1,"Bananas","Egg");
arrayshoppinglist.pop();
arrayshoppinglist.sort();
let findIndex= arrayshoppinglist.indexOf("Milk");
arrayshoppinglist.splice(1,1,"Carrot", "Lettuce");
  arraynewlist= ["Juice", "pop","Juice","Pop"];
  newlist= arrayshoppinglist.concat(arraynewlist);
console.log(newlist);
let FindIndex = newlist.indexOf("Pop");
console.log(FindIndex);
//Practice exercise 3.3
//1. Create an array containing three values: 1, 2, and 3.
//2. Nest the original array into a new array three times.
//3. Output the value 2 from one of the arrays into the console.

let someValues1 = [1, 2, 3];
let someValues2 = [1, 2, 3];
let someValues3 = [1, 2, 3];
let arrOfArrays = [someValues1, someValues2, someValues3];;
console.log(arrOfArrays);
let value1 = arrOfArrays[0][1];
console.log(value1)
//Practice exercise 3.4
//1. Create a new myCar object for a car. Add some properties, including, but not 
// to, make and model, and values for a typical car or your car. Feel free 
//to use booleans, strings, or numbers
let  myCar= { CarName:"Supra",
              Company: "Toyota",
              Class :"sports car",
              Model: "2023",
              color: "yellow",
              Turboengine:"true",
              speed :"155 miles",
              sale:" no sale"
            };
            console.log(myCar)
// 2. Create a variable that can hold the string value color. This variable 
//containing a string value color can now be used to reference the property 
//name within myCar. Then, use the variable within the square bracket notation 
//to assign a new value to the color property in myCar.

let color1 = myCar[ "color"];
myCar["color"]="blue";
console.log(myCar);
//3. Use that same variable and assign a new property string value to it, such as 
//forSale. Use the bracket notation once again to assign a new value to the 
//forSale property to indicate whether the car is available for purchase.
let color2= myCar[ "sale"];
myCar["sale"]=" for sale";
console.log(myCar);
//4. Output make and model into the console.
//5. Output the value of forSale into the console.
let variable1 = "Model";
console.log(myCar[variable1]);
let variable = "sale";
console.log(myCar[variable]);
//Practice exercise 3.5
//1. Create an object named people that contains an empty array that is called 
//friends.
//2. Create three variables, each containing an object, that contain one of your 
//friend's first names, last names, and an ID value.
//3. Add the three friends to the friend array.
//4. Output it to the console.

let people = {  firstName: " Fatima",
                lastName:" Jamal",
                Id: "2349",
                firstName:" Nimra " , 
                lastName: " Shahid",
                Id:"2340",
                firstName: "Maliaka",
                lastName: "Jamal",
                Id:"2346",
                Friends:["Vaneeza","Aliza","Wajiha"]

};
console.log(people)

/*Practice exercise 4.1
1. Create a variable with a Boolean value.
2. Output the value of the variable to the console.
3. Check whether the variable is true and if so, output a message to the console, 
using the following syntax:
if(myVariable){
//action
} 
Logic Statements
[ 74 ]
4. Add another if statement with an ! in front of the variable to check whether 
the condition is not true, and create a message that will be printed to the 
console in that instance. You should have two if statements, one with an 
! and the other without. You could also use an if and an else statement 
instead—experiment!
5. Change the variable to the opposite to see how the result changes.*/

  let Gym =  true;
 console.log(variable);
 if(Gym){
  console.log(" come with me.");
 }else{
  console.log("sorry, I am busy");
 }
 let rain = true;
 if (rain!==true){
  console.log("we can go to picnic");
 }
 if(rain===true){
  console.log("we can go on walk");
 }
 else{
  console.log( " we stay in house");
 }
 
 /*Practice exercise 4.2
1. Create a prompt to ask the user's age
2. Convert the response from the prompt to a number
3. Declare a message variable that you will use to hold the console message for 
the user
4. If the input age is equal to or greater than 21, set the message variable to 
confirm entry to a venue and the ability to purchase alcohol
5. If the input age is equal to or greater than 19, set the message variable to 
confirm entry to the venue but deny the purchase of alcohol
6. Provide a default else statement to set the message variable to deny entry if 
none are true
7. Output the response message variable to the console*/

let userage = + prompt( "Enter your age");
if (userage>=21){
  console.log("confirm entry to venue and ability to purchase aclcohol")
}
 else if ( userage>= 21 && userage>=19){
  console.log("confirm entry to venue and ability to purchase aclcohol")
 }
 else if (userage>=19 && userage>= 21){
  console.log("confirm entry to the venue but deny the purchase of alcohol")
 }
 else( userage > 21)
 console.log(" false");

 //Practice exercise 4.3
//1. Create a Boolean value for an ID variable
//2. Using a ternary operator, create a message variable that will check whether 
//their ID is valid and either allow a person into a venue or not
//3. Output the response to the console.
let Id = true <= 2345 ? "denied": "Allowed";
Id = true <= 2345 ? console.log ( "denied") : console.log("Allowed");

/*EXERCISE4.4

In this exercise, we'll create a Magic 8-Ball random answer generator:
1. Start by setting a variable that gets a random value assigned to it. The value 
is assigned by generating a random number 0-5, for 6 possible results. You 
can increase this number as you add more results.
2. Create a prompt that can get a string value input from a user that you can 
repeat back in the final output.
3. Create 6 responses using the switch statement, each assigned to a different 
value from the random number generator. 
4. Create a variable to hold the end response, which should be a sentence 
printed for the user. You can assign different string values for each case, 
assigning new values depending on the results from the random value.
5. Output the user's original question, plus the randomly selected case 
response, to the console after the user enters their question.*/
 RandomNumber = Math.floor(randomnumber()*10)
 let eightBall;
 if (randomNumber = 0){
  console.log("its a choosen")
 }
 else if (randomNumber = 1){
  console.log
 }

