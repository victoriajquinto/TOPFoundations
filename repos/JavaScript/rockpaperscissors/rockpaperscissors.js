

/*
HOW TO RANDOMLY SELECT OBJECT IN AN ARRAY (WITH CONSOLE.LOG SO YOU CAN SEE HOW EACH STEP WORKS)
console.log(Selection.length) //step 1 selection.length = number of objects in array
console.log(Math.random()) // step 2 math.random() randomly selects floating point number between 0 and 1
console.log(Math.random()*Selection.length) // step 3 multiplies math.random() output and number of array objects 
console.log(Math.floor(Math.random()*Selection.length)) // step 4 math.floor() rounds product down to nearest integer
let computerSelection = Math.floor(Math.random()*Selection.length) // step 5 creates variable for this function
console.log(computerSelection) // step 6 logs the number assigned to the object, starting at 0, i.e., first item is item #0, second item is item #1, etc.
*/
//declare cumulative player and computer scores in the global domain
 let cumecompscore = 0;
 let cumeplayerscore = 0;
 let i;

 //randomly selects computer's choice
let Selection = ["ROCK", "PAPER", "SCISSORS"]; // randomly select option: rock, paper, scissors     
function computerPlay() {
    let rngvalue = Math.floor(Math.random()*Selection.length);
    
    let computerChoice = (rngvalue == 0) ? "ROCK":
        (rngvalue == 1) ? "PAPER":
        (rngvalue == 2) ? "SCISSORS":
        "Uhm...something went wrong with the computer's choice, sorry!";
        return computerChoice;
    }

let computerSelection; //creates variable to store computer's choice in the global domain

//displays text for computer's selection on website
function computerText() {
    let computer = document.querySelector('.computer');
        let computertext = document.createElement('p');
    computertext.classList.toggle('computertext');
    computertext.textContent =`Computer selected ${computerSelection}.`;
    computer.appendChild(computertext);

    let compTextEdit = document.getElementById('computerDiv');
    compTextEdit.innerHTML = computertext.textContent;
}

let playerSelection; //creates variable to store player's choice in global domain

//displays text for player's selection on website
function playerText() {
    let player = document.querySelector('.player');
    let playermsg = document.createElement('p');
        playermsg.classList.toggle('playermsg');
        playermsg.textContent = `You selected ${playerSelection}.`
        player.appendChild(playermsg);

    let fieldNameElement = document.getElementById('playerDiv');
    fieldNameElement.innerHTML = playermsg.textContent;
}

//player selection and computer selection are compared and a result message is displayed on website
function playRound(localPlayerSelection, localComputerSelection) {
    let results = document.querySelector('.results');
    let resultsmsg;
    if(localPlayerSelection == localComputerSelection) {
        
        resultsmsg = document.createElement('p');
        resultsmsg.classList.add('resultsmsg');
        resultsmsg.textContent = "You tied!";

    } else if(localPlayerSelection=="PAPER" && localComputerSelection=="ROCK") { 
        
        cumeplayerscore++;
        resultsmsg = document.createElement('p');
        resultsmsg.classList.add('resultsmsg');
        resultsmsg.textContent = "You win! Paper beats rock.";

    } else if(localPlayerSelection=="SCISSORS" && localComputerSelection=="ROCK") {
        
        cumecompscore++;
        resultsmsg = document.createElement('p');
        resultsmsg.classList.add('resultsmsg');
        resultsmsg.textContent = "You lose! Rock beats scissors.";
        
    } else if(localPlayerSelection=="ROCK" && localComputerSelection=="PAPER") {
        
        cumecompscore++;
        resultsmsg = document.createElement('p');
        resultsmsg.classList.add('resultsmsg');
        resultsmsg.textContent = "You lose! Paper beats rock.";
        
    } else if(localPlayerSelection=="SCISSORS" && localComputerSelection=="PAPER") {
        
        cumeplayerscore++;
        resultsmsg = document.createElement('p');
        resultsmsg.classList.add('resultsmsg');
        resultsmsg.textContent = "You win! Scissors beat paper.";
        
    } else if(localPlayerSelection=="ROCK" && localComputerSelection=="SCISSORS") {
        
        cumeplayerscore++;
        resultsmsg = document.createElement('p');
        resultsmsg.classList.add('resultsmsg');
        resultsmsg.textContent = "You win! Rock beats scissors";
        
    }  else if(localPlayerSelection=="PAPER" && localComputerSelection=="SCISSORS") {
        
        cumecompscore++;
        resultsmsg = document.createElement('p');
        resultsmsg.classList.add('resultsmsg');
        resultsmsg.textContent = "You lose! Scissors beat paper.";
        
    } else {
        console.log("If you're seeing this message, Vicky needs to fix her playRound function.")
    }
    results.appendChild(resultsmsg);
    let resultsTextEdit = document.getElementById('resultsDiv');
    resultsTextEdit.innerHTML = resultsmsg.textContent;

    return[cumecompscore, cumeplayerscore];

}

function scoreCounter(localcumeplayerscore, localcumecompscore) {
    let finalScore = document.querySelector('.scorecount');
        
    let ScoreCounter = document.createElement('p');
    ScoreCounter.classList.add('ScoreCounter');
    ScoreCounter.textContent = `You have ${localcumeplayerscore} point(s). Computer has ${localcumecompscore} point(s).`;
    
    

    finalScore.appendChild(ScoreCounter);
    //finalScore.appendChild(computerScoreCounter);
    
    let ScoreCounterTextEdit = document.getElementById('scoreCountDiv');
    ScoreCounterTextEdit.innerHTML =  ScoreCounter.textContent;
    
    
    }
    
// creates event listeners for buttons for when buttons are clicked that calls playRoubd function
     
function userPlay(){
    let buttons = document.querySelectorAll('button');
    let i=0;
    let tourneyWinnerMessage;
    buttons.forEach(
        (button) => {
            button.addEventListener('click', () => {
                playerSelection = button.classList.value; //create a new variable equal to the class value for the button
        
                //calls text display functions when player makes their selection
                if(playerSelection !== undefined) {
                    playerText();
                    computerSelection = computerPlay();
                    computerText();
                }
                        
                //calls playround function
                playRound(playerSelection, computerSelection);
                scoreCounter(cumeplayerscore, cumecompscore);

                i++;
                console.log("i: ", i);
                    if(cumeplayerscore == 5 || cumecompscore == 5) {
                        if(cumeplayerscore > cumecompscore) {
                            tourneyWinnerMessage = "You won the tournament! Congratulations!";
                        } else if (cumeplayerscore < cumecompscore) {
                            tourneyWinnerMessage = "You lost the tournament :(";
                        } else {
                            tourneyWinnerMessage = "You tied with the computer in the tournament. Yay?";
                        }   
                    }
                
                let tourneyWinner = document.querySelector('.tourneyWinner');
                let tourneyWinnerText = document.createElement('p');
                tourneyWinnerText.classList.add('tourneyWinnerText');
                tourneyWinnerText.textContent = tourneyWinnerMessage;
                tourneyWinner.appendChild(tourneyWinnerText);

                let tourneyTextEdit = document.getElementById('tourneyWinnerDiv');
                tourneyTextEdit.innerHTML = tourneyWinnerText.textContent;
                
                }
            );
        }
    );
}
userPlay();