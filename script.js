


function getComputerChoice() {
    let choiceConversion = "";
    let generatedChoice = Math.random();
    switch (parseInt(generatedChoice * 3)) {
        case 0:
            choiceConversion = "rock";
            break;
        case 1:
            choiceConversion = "paper"
            break;
        case 2:
            choiceConversion = "scissors"
            break;
    }
    return choiceConversion;
}




function playRound(player, computer) {
    console.log(`selections are : player ${player} and computer ${computer}`)
    if (player == "rock" && computer == "scissors" 
        || player == "paper" && computer == "rock"
        || player == "scissors" && computer == "paper") {
            return 2; /* Player wins */
        }
    else if (player == computer) {
        return 1; /* Tie Game */
    }
    else {
        return 0; /* Player looses */
    }
}

const resultsContainer = document.querySelector(".results-container");
const roundResults = document.querySelector(".round-result");
const finalScoreResults = document.querySelector(".final-results");


const buttonContainer = document.querySelector(".button-container");
const buttons = buttonContainer.querySelectorAll('button');
let playerSelection ="";
let playerScore = 0;
let computerScore = 0;
let incrementer = 0;
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id;
        
        if (incrementer < 5) {
            switch(playRound(playerSelection,getComputerChoice())) {
                case 2:
                    console.log("Win")
                    playerScore ++;
                    roundResults.textContent = `You won`;
                    break;
                case 1:
                    console.log('Tie game');
                    roundResults.textContent = `Tie game`;
                    break;
                case 0:
                    console.log("Defeat")
                    roundResults.textContent = `You lose`;
                    computerScore ++;
                    break;
            }
            console.log(`player = ${playerScore} || computer = ${computerScore}`);
        } else {
            (playerScore > computerScore) ?
                finalScoreResults.textContent = `You won, you have ${playerScore} and computer get ${computerScore}`:
            (playerScore == computerScore) ?
                finalScoreResults.textContent = `Tie Game, you have ${playerScore} and computer get ${computerScore}`:

            finalScoreResults.textContent = `You lose, you have ${playerScore} and computer get ${computerScore}`;
        }
    incrementer ++;
    }
)});