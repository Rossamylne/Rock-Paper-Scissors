


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

function round(playerSelection, computerSelection) {
    if (playerSelection == "rock" && computerSelection == "scissors" 
        || playerSelection == "paper" && computerSelection == "rock"
        || playerSelection == "scissors" && computerSelection == "paper") {
            return 2; /* Player wins */
        }
    else if (playerSelection == computerSelection) {
        return 1; /* Tie Game */
    }
    else {
        return 0; /* Player looses */
    }
}


function game() {
    let playerScore, computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let inputedChoice = prompt("rock, paper or scissors ?");
        const playerChoice = inputedChoice.toLowerCase();
        const computerChoice = getComputerChoice();
        console.log(`Player choice is ${playerChoice} and computer choice is ${computerChoice}`);
        switch(round(playerChoice, computerChoice)) {
        case 2:
            console.log(`You win, ${playerChoice} beats ${computerChoice}`);
            playerScore ++;
            break;
        case 1:
            console.log("Equality !");
            break;
        case 0:
            console.log(`You lose, ${computerChoice} beats ${playerChoice}`);
            computerScore ++;
            break;
        }
    (playerScore > computerScore) ? console.log(`You win, you have ${playerScore} points and computer has ${computerScore} points`) :
    (playerScore == computerScore) ? console.log(`Equality !`):
    console.log(`You lose, you have ${playerScore} points and computer has ${computerScore} points`)
    } 
}

game();