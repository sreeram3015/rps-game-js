function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex]
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
    ){
        return `You Win! ${playerChoice} beats ${computerChoice}`;
    }

    else{
        return `You Lose! ${computerChoice} beats ${playerChoice}`;
    }
}