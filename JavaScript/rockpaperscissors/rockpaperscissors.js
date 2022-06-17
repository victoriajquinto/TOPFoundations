

//player provides their selection
function userPlay() {
    playerInput  = prompt("Let's play Rock Paper Scissors! Please type your selection here: ")
    //write code that accepts user input that is case insensitive
    playerInputUpper = playerInput.toUpperCase()
    console.log(`You selected ${playerInputUpper}.`)
    return playerInputUpper;
}

/*
HOW TO RANDOMLY SELECT OBJECT IN AN ARRAY (WITH CONSOLE.LOG SO YOU CAN SEE HOW EACH STEP WORKS)
console.log(Selection.length) //step 1 selection.length = number of objects in array
console.log(Math.random()) // step 2 math.random() randomly selects floating point number between 0 and 1
console.log(Math.random()*Selection.length) // step 3 multiplies math.random() output and number of array objects 
console.log(Math.floor(Math.random()*Selection.length)) // step 4 math.floor() rounds product down to nearest integer
let computerSelection = Math.floor(Math.random()*Selection.length) // step 5 creates variable for this function
console.log(computerSelection) // step 6 logs the number assigned to the object, starting at 0, i.e., first item is item #0, second item is item #1, etc.
*/

//computer randomly selects and option
let Selection = ["rock", "paper", "scissors"] // randomly select option: rock, paper, scissors
function computerPlay() {
    let rngvalue = Math.floor(Math.random()*Selection.length)
    let computerChoice = (rngvalue == 0) ? "ROCK":
        (rngvalue == 1) ? "PAPER":
        (rngvalue == 2) ? "SCISSORS":
        "Uhm...something went wrong, sorry!";
    console.log(`Computer selected ${computerChoice}.`)
    return computerChoice;
    }   

const playerSelection = userPlay()
const computerSelection = computerPlay()

function playRound(localPlayerSelection, localComputerSelection) {
    if(localPlayerSelection == localComputerSelection) {
        console.log("You tied!")
    } 
    else if(localPlayerSelection=="PAPER" && localComputerSelection=="ROCK") { 
        console.log("You lose! Paper beats rock.")
    } 
    else if(localPlayerSelection=="SCISSORS" && localComputerSelection=="ROCK") {
        console.log("You win! Rock beats paper.")
    } 
    else if(localPlayerSelection=="ROCK" && localComputerSelection=="PAPER") {
        console.log("You win! Paper beats rock.")
    } 
    else if(localPlayerSelection=="SCISSORS" && localComputerSelection=="PAPER") {
        console.log("You lose! Scissors beat paper.")
    } 
    else if(localPlayerSelection=="ROCK" && localComputerSelection=="SCISSORS") {
        console.log("You lose! Rock beats scissors")
    } 
    else if(localPlayerSelection=="PAPER" && localComputerSelection=="SCISSORS") {
        console.log("You lose! Scissors beat paper.")
    } 
    else {
        console.log("You made a typo. Work on your typing!")
    }
}
playRound(playerSelection,computerSelection)

function game() {
    for(let i = 1; i <= ??; i++){
        
    }
}

