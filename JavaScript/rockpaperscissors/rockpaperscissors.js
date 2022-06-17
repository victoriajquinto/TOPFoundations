/*randomly select option: rock, paper, scissors*/
let Selection = ["rock", "paper", "scissors"]

function userPlay() {
    playerInput  = prompt("Let's play Rock Paper Scissors! Please type your selection here: ")
    //write code that accepts user input that is case insensitive
    playerSelection = playerInput.toUpperCase()
    console.log(playerSelection)
}
userPlay()
/*
HOW TO RANDOMLY SELECT OBJECT IN AN ARRAY (WITH CONSOLE.LOG SO YOU CAN SEE HOW EACH STEP WORKS)
console.log(Selection.length) //step 1 selection.length = number of objects in array
console.log(Math.random()) // step 2 math.random() randomly selects floating point number between 0 and 1
console.log(Math.random()*Selection.length) // step 3 multiplies math.random() output and number of array objects 
console.log(Math.floor(Math.random()*Selection.length)) // step 4 math.floor() rounds product down to nearest integer
let computerSelection = Math.floor(Math.random()*Selection.length) // step 5 creates variable for this function
console.log(computerSelection) // step 6 logs the number assigned to the object, starting at 0, i.e., first item is item #0, second item is item #1, etc.
*/

function computerPlay() {
    let rngvalue = Math.floor(Math.random()*Selection.length)
    let computerSelection = (rngvalue == 0) ? "ROCK":
        (rngvalue == 1) ? "PAPER":
        (rngvalue == 2) ? "SCISSORS":
        "Uhm...something went wrong, sorry!";
    console.log(computerSelection) 
    }   
computerPlay()
