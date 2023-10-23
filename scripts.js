/****************** Exercise 1 ********************/

// List five examples of websites using loops. 
  ebay
  linkedin
  Amazon
  google
  airbnb



/****************** Exercise 2 ********************/

// Use a while loop to log to the console the numbers from 1 to 10

let integer = 1
while(integer < 11){
console.log(`integer: ${integer}`)
integer++
}
integer: 1
VM27:3 integer: 2
VM27:3 integer: 3
VM27:3 integer: 4
VM27:3 integer: 5
VM27:3 integer: 6
VM27:3 integer: 7
VM27:3 integer: 8
VM27:3 integer: 9
VM27:3 integer: 10
10

/****************** Exercise 3 ********************/

// Use a while loop to calculate the sum of even numbers from 2 to 20

let sum = 2;
let num = 0;

while(sum<= 21){
if (sum % 2===0){
    num +=sum;
}
sum++
}
console.log(`Sum of even numbers from 2 to 21 is :${num}`) //Sum of even numbers from 2 to 21 is :110


/****************** Exercise 4 ********************/

// Implement a countdown using a while loop
let countdown = 10;

while(countdown>=1){
    countdown--;
}
console.log(countdown,"Happy New Year")//0 'Happy New Year'



/****************** Exercise 5 ********************/

// Review This Code
const secretNumber = Math.floor(Math.random() * 100) + 1; 
let guess ;
let attempts = 0;

while (guess !== secretNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 100:"));

    if (isNaN(guess)) {
        console.log("Please enter a valid number.");
    } else {
        attempts++;
    }
}

// Refactor the code so that:
// 1. The user will see the alert "Too low!", if the number is too low. 
if(guess < secretNumber){
     alert('too low')
    }
// 2. The user will see the alert "Too high!" if the number is too high. 
else if(guess > secretNumber){
     alert('too high!')
     }
// 3. The user will see the alert "`Congratulations! You guessed the number [NUMBER] in [ATTEMPTS] attempts.`)" if the number is correct. 

   else{
    alert(`Congratulations! you guessed the number ${secretNumber} in ${attempts} attempts.`)
     }

//----------
const secretNumber = Math.floor(Math.random() * 100) + 1; 
let guess;
let attempts = 0;

while (guess !== secretNumber) {
   guess = parseInt(prompt("Guess a number between 1 and 100:"));

   if (isNaN(guess)) {
       alert("Please enter a valid number.");
        } else {
       attempts++;
       if(guess < secretNumber){
          alert('too low')
       }else if(guess > secretNumber){
          alert('too high!')
       }else{
          alert(`Congratulations! you guessed the number ${secretNumber} in ${attempts} attempts.`)
      }   }
     }
     //Congratulations! you guessed the number 42 in 5 attempts.

/****************** Exercise 6 ********************/

// Simulating a vending machine using a while loop

// Initial amount of money the user has
let userBalance = 20;

// Price of an item in the vending machine
const itemPrice = 3;

console.log("Welcome to the Vending Machine!");
console.log(`You have $${userBalance} in your balance.`);

while (userBalance = itemPrice) {
    console.log("Available options:");
    console.log("1. Snack A ($3)");
    console.log("2. Snack B ($2)");
    console.log("3. Exit");

    const choice = parseInt(prompt("Enter your choice:"));

    if (choice === 1) {
        console.log("You selected Snack A. Enjoy your snack!");
        userBalance -= itemPrice;
    } else if (choice === 2) {
        console.log("You selected Snack B. Enjoy your snack!");
        userBalance -= 2;
    } else if (choice === 3){
        console.log("Thank you for using the Vending Machine. Have a great day!");
        userBalance = 0;
    } else {
        console.log("Invalid choice. Please select a valid option.");
    }

    console.log(`Your current balance: $${userBalance}`);
}

console.log("Insufficient balance. Please add more money to use the Vending Machine.");

// 1. Write the condition so that the while loop will eventually stop. 
Welcome to the Vending Machine!
VM245:7 You have $20 in your balance.
VM245:10 Available options:
VM245:11 1. Snack A ($3)
VM245:12 2. Snack B ($2)
VM245:13 3. Exit
VM245:24 Thank you for using the Vending Machine. Have a great day!

VM245:30 Your current balance: $0
VM245:10 Available options:
VM245:11 1. Snack A ($3)
VM245:12 2. Snack B ($2)
VM245:13 3. Exit
VM245:21 You selected Snack B. Enjoy your snack!
VM245:30 Your current balance: $1
VM245:10 Available options:
VM245:11 1. Snack A ($3)
VM245:12 2. Snack B ($2)
VM245:13 3. Exit