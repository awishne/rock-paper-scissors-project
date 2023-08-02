// Create function called getComputerChoice that will return a random choice from an array of choices

function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// Write function that plays single round. Needs two parameters called playerSelection and computerSelection


function singleRound(playerSelection, computerSelection) {

    //playerSelection needs to be case-insensitive
    let player = playerSelection.toLowerCase();
    let computer = computerSelection.toLowerCase();

    if (player === computer) {
        return 'Its a tie!'; 
    } else if (player === 'rock') {
        if (computer === 'paper') {
            return "You Lose! Paper beats Rock!";
    }   else (computer === 'scissors');
            return "You Win! Rock beats Scissors!";
        
    } else if (player === 'paper') {
        if (computer === 'rock') {
            return "You Win! Paper beats Rock!";
    }   else (computer === 'Scissors');
            return "You Lose! Scissors beats Paper!";

    } else if (player === 'scissors') {
        if (computer === 'rock') {
            return "You Lose! Rock beats Scissors!";        
    } else (computer === 'paper');
            return "You Win! Scissors beats Paper!";

    } else {
        return 'Your input is invalid!'; }
}


// Write function game(), use the singleRound function inside of game function. 5 round game that keeps score and reports winner or loser
function game() {
    //store score for both player and computer
    let computerScore = 0;
    let playerScore = 0;

    //set parameters for when player or computer scores a point, loop 5 rounds and keep score
    while (playerScore < 5 && computerScore < 5) {
        let playerSelection = prompt('Rock, Paper, or Scissors?');
        let computerSelection = getComputerChoice();
        console.log('Computer chose ' + computerSelection);
        console.log('Human chose '+ playerSelection); 
        console.log(singleRound(playerSelection, computerSelection));
    
    if (singleRound(playerSelection, computerSelection).includes('Win')) {
        playerScore++;
    } else if (singleRound(playerSelection, computerSelection).includes('Lose')) {
        computerScore++;
    } else (singleRound(playerSelection, computerSelection).includes('tie'));

        console.log ('Computer score is ' + computerScore + ' and your score is ' + playerScore );
}
 
    //Show the result of the game after 5 rounds
    if (computerScore > playerScore) {
        return "You lost! The computer won " + computerScore + " to " + playerScore; 
    } else if (computerScore < playerScore) {
        return "You won! You won " + playerScore + " to " + computerScore;
    } else (computerScore === playerScore);
        return "You tied with the Computer!";

}

console.log(game());