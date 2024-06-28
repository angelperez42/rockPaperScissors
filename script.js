console.log("Welcome to Rock Paper Scissors");

var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3) + 1;
    // console.log(num);
    if (num === 1) {
        return "rock";
    } else if (num == 2) {
        return "paper";
    } else if (num == 3) {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Enter your choice: rock, paper or scissors");
}

// console.log(`The human choice is: ${getHumanChoice()}`);




// console.log(`The computer choice is: ${computerSelection}`);
// console.log(`Your score is ${humanScore}`);
// console.log(`The computer's score is ${computerScore}`);

function playGame () {
    function playRound (humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice === computerChoice) {
            console.log("There is a tie. Nobody wins!");
            return humanScore = 0, computerScore = 0;
        } else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
            console.log("You win! Rock beats scissors.");
            return humanScore = 1, computerScore = 0;
        } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
            console.log("You win! Scissors beats paper.");
            return humanScore = 1, computerScore = 0;
        } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
            console.log("You win! Paper beats rock.");
            return humanScore = 1, computerScore = 0;
        } else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
            console.log("You lose! Rock beats scissors.");
            return computerScore = 1, humanScore = 0;
        } else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
            console.log("You lose! Scissors beats paper.");
            return computerScore = 1, humanScore = 0;
        } else if ((humanChoice === "rock") && (computerChoice === "paper")) {
            console.log("You lose! Paper beats rock.");
            return computerScore = 1, humanScore = 0;
        }
    }
    // let humanSelection = getHumanChoice();
    // let computerSelection = getComputerChoice();
    
    let realComputerScore = 0;
    let realHumanScore = 0;

    playRound(getHumanChoice(), getComputerChoice());
    realComputerScore = realComputerScore + computerScore;
    realHumanScore = realHumanScore + humanScore;
    console.groupCollapsed("1st Try");
    console.log(`Your score is ${realHumanScore}`);
    console.log(`The computer's score is ${realComputerScore}`);
    console.groupEnd();
    playRound(getHumanChoice(), getComputerChoice());
    realComputerScore = realComputerScore + computerScore;
    realHumanScore = realHumanScore + humanScore;
    console.groupCollapsed("2nd Try");
    console.log(`Your score is ${realHumanScore}`);
    console.log(`The computer's score is ${realComputerScore}`);
    console.groupEnd();
    playRound(getHumanChoice(), getComputerChoice());
    realComputerScore = realComputerScore + computerScore;
    realHumanScore = realHumanScore + humanScore;
    console.groupCollapsed("3rd Try");
    console.log(`Your score is ${realHumanScore}`);
    console.log(`The computer's score is ${realComputerScore}`);
    console.groupEnd();
    playRound(getHumanChoice(), getComputerChoice());
    realComputerScore = realComputerScore + computerScore;
    realHumanScore = realHumanScore + humanScore;
    console.groupCollapsed("4th Try");
    console.log(`Your score is ${realHumanScore}`);
    console.log(`The computer's score is ${realComputerScore}`);
    console.groupEnd();
    playRound(getHumanChoice(), getComputerChoice());
    realComputerScore = realComputerScore + computerScore;
    realHumanScore = realHumanScore + humanScore;
    console.groupCollapsed("5th Try");
    console.log(`Your score is ${realHumanScore}`);
    console.log(`The computer's score is ${realComputerScore}`);
    console.groupEnd();
    
    console.groupCollapsed("Final");
    console.log(`Your final score is ${realHumanScore}`);
    console.log(`The computer's final score is ${realComputerScore}`);
    console.groupEnd();

    if (realHumanScore > realComputerScore) {
        console.log('You won! CONGRATULATIONS!');
    } else if (realHumanScore < realComputerScore) {
        console.log('You lost. Better luck next time!');
    } else if (realHumanScore === realComputerScore) {
        console.log('There was a tie!');
    }
}

playGame();