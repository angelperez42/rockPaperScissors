console.log("Welcome to Rock Paper Scissors");

let humanScore = 0;
let computerScore = 0;

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

// let humanScore = 0;
// let computerScore = 0;

function playRound (humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log("There is a tie. Nobody wins!");
    } else if ((humanChoice === "rock") && (computerChoice === "scissors")) {
        console.log("You win! Rock beats scissors.");
        humanScore = humanScore + 1;
    } else if ((humanChoice === "scissors") && (computerChoice === "paper")) {
        console.log("You win! Scissors beats paper.");
        humanScore = humanScore + 1;
    } else if ((humanChoice === "paper") && (computerChoice === "rock")) {
        console.log("You win! Paper beats rock.");
        humanScore = humanScore + 1;
    } else if ((humanChoice === "scissors") && (computerChoice === "rock")) {
        console.log("You lose! Rock beats scissors.");
        computerScore = computerScore + 1;
    } else if ((humanChoice === "paper") && (computerChoice === "scissors")) {
        console.log("You lose! Scissors beats paper.");
        computerScore = computerScore + 1;
    } else if ((humanChoice === "rock") && (computerChoice === "paper")) {
        console.log("You lose! Paper beats rock.");
        computerScore = computerScore + 1;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(`The computer choice is: ${computerSelection}`);
console.log(`Your score is ${humanScore}`);
console.log(`The computer's score is ${computerScore}`);