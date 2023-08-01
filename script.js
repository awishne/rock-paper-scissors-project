function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    
    if (player === computer) {
        return 'It\'s a tie!';
    } else if (player === 'rock') {
        if (computer === 'paper') {
            return 'You lose! Paper beats Rock';
        } else (computer === 'scissors') 
            return 'You win! Rock beats Scissors';
        }
      
     else if (player === 'paper') {
        if (computer === 'scissors') {
            return 'You lose! Scissors beats Paper';
        } else (computer === 'rock');
            return 'You win! Paper beats Rock';
        }

     else if (player === 'scissors') {
        if (computer === 'rock') {
            return 'You lose! Rock beats scissors';
        } else (computer === 'paper') ;
            return 'You win! Scissors beats Paper';
        }
    else (player !== 'rock' || 'paper' || 'scissors');
        return 'Invalid input';
    }
        
    

const playerSelection = prompt('Rock, Paper or Scissors?');
const computerSelection = getComputerChoice();
console.log('Computer: ' + computerSelection);
console.log(playRound(playerSelection, computerSelection));