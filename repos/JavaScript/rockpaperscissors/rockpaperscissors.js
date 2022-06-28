

//player provides their selection
function userPlay() {
    playerInput  = prompt("Let's play Rock Paper Scissors! Please type your selection here: ")
    //write code that accepts user input that is case insensitive
    playerInputUpper = playerInput.toUpperCase()
    console.log(`You selected ${playerInputUpper}.`)
    return playerInputUpper;
}

//HOW TO RANDOMLY SELECT OBJECT IN AN ARRAY (WITH CONSOLE.LOG SO YOU CAN SEE HOW EACH STEP WORKS)
//console.log(Selection.length) //step 1 selection.length = number of objects in array
//console.log(Math.random()) // step 2 math.random() randomly selects floating point number between 0 and 1
//console.log(Math.random()*Selection.length) // step 3 multiplies math.random() output and number of array objects 
//console.log(Math.floor(Math.random()*Selection.length)) // step 4 math.floor() rounds product down to nearest integer
//let computerSelection = Math.floor(Math.random()*Selection.length) // step 5 creates variable for this function
//console.log(computerSelection) // step 6 logs the number assigned to the object, starting at 0, i.e., first item is item #0, second item is item #1, etc.

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

function playRound(localPlayerSelection, localComputerSelection) {
    let playerOutcome// 0 = player loses, 1 = player wins, undefined = tie
    if(localPlayerSelection == localComputerSelection) {
        console.log("You tied!")
        playerOutcome=.5
    } else if(localPlayerSelection=="PAPER" && localComputerSelection=="ROCK") { 
        console.log("You win! Paper beats rock.")
        playerOutcome=1
    } else if(localPlayerSelection=="SCISSORS" && localComputerSelection=="ROCK") {
        console.log("You lose! Rock beats scissors.")
        playerOutcome=0
    } else if(localPlayerSelection=="ROCK" && localComputerSelection=="PAPER") {
        console.log("You lose! Paper beats rock.")
        playerOutcome=0
    } else if(localPlayerSelection=="SCISSORS" && localComputerSelection=="PAPER") {
        console.log("You win! Scissors beat paper.")
        playerOutcome=1
    } else if(localPlayerSelection=="ROCK" && localComputerSelection=="SCISSORS") {
        console.log("You win! Rock beats scissors")
        playerOutcome=1
    }  else if(localPlayerSelection=="PAPER" && localComputerSelection=="SCISSORS") {
        console.log("You lose! Scissors beat paper.")
        playerOutcome=0
    } else {
        console.log("You made a typo. Work on your typing!")
        playerOutcome=.5
    }
    return playerOutcome

}

function game() {
    //round 1: each player throws rock, paper, or scissors. loop 5 times
    
    let currentScore = 0 //create variable to store player's score
    for (let i= 0; i < 5;i++){
        console.log(`You are playing Round ${i+1}`)
        //player makes their selection
        let playerSelection = userPlay()
        //computer makes their selection
        let computerSelection = computerPlay()
        //play the game and log game outcome
        let roundScore = playRound(playerSelection, computerSelection)
         //keep score for player. increment player's score through the rounds
        currentScore = currentScore + roundScore
        console.log(`You have won ${currentScore} out of ${i+1} games.`)
        //if player wins 3+ games, log message saying player won
    } 
    if(currentScore >=3) {
        console.log("You won the five rounds! Congratulations!")
    } else {
        console.log("You lost the five rounds. Sucks to suck, loser!")
    }
}
game()

