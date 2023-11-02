let playerScore = 0;
let computerScore = 0;

function resetGame(){
    playerScore = 0;
    computerScore = 0;
    updateScore();
    updateResults("");
    document.querySelector("#final-result").textContent = "";
}

function updateScore(){
    const scoreElement = document.querySelector('#score');
    scoreElement.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
}

function updateResults(result){
    const resultElement = document.querySelector('#results');
    resultElement.textContent = result;
}

function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();

    if (playerChoice == computerChoice) {
        return "It's a tie!";
    }

    else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return `You Win! ${playerChoice} beats ${computerChoice}`;
    }

    else {
        return `You Lose! ${computerChoice} beats ${playerChoice}`;
    }
}

function game(playerSelection) {

    if(playerScore == 5 || computerScore == 5){
        resetGame();
    }

    let computerSelection = getComputerChoice();
    let result = playRound(playerSelection, computerSelection);

    console.log(result);

    if (result.includes('Win')) {
        playerScore++;
    }
    else if (result.includes('Lose')) {
        computerScore++;
    }

    updateScore();
    updateResults(result);

    let finalResultElement = document.querySelector("#final-result");
    if (playerScore == 5) {
        finalResultElement.textContent = "You won the game!";
    }

    else if (computerScore == 5) {
        finalResultElement.textContent = "You lost the game!";
    }
}

const rock = document.querySelector("#rock");
rock.addEventListener('click', () => game('Rock'))

const paper = document.querySelector("#paper");
paper.addEventListener('click', () => game('Paper'))

const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', () => game('Scissors'))