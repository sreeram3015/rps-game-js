function getComputerChoice(){
    const options = ["Rock", "Paper", "Scissors"];
    let randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex]
}

let computerChoice = getComputerChoice();
console.log(computerChoice)