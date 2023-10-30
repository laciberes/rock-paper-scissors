    const rps = ["rock", "paper", "scissors"];

            // The random choice of the computer
            function getComputerChoice() {
                return rps[Math.floor(Math.random()*3)];
            }

            // Player's choice from prompt
            function getUserChoice() {
            return prompt('Rock, paper or scissors?').toLowerCase();
            }
            
            // Variables to store score of a game
            let playerScore = 0;
            let computerScore = 0;
            // Variables to keep count of total score
            let playerScoreCount;
            let computerScoreCount;

            
            // -- FUNCTION THAT PLAYS THE INDIVIDUAL ROUNDS -- //
            function playRound() {

                let playerSelection = getUserChoice();    
                let computerSelection = getComputerChoice();
            

            // console.log("Computer says: " + computerSelection + " --- " + "You say:  " + playerSelection);

                
                // User choice: ROCK
                if (playerSelection === "rock" && computerSelection === "rock") {
                    playerScoreCount = ++playerScore;
                    computerScoreCount = ++computerScore;
                    return "No winner, play again!";
                    // console.log("Player: " + playerScore + "  " + "Computer:" + computerScore);

                } else if (playerSelection === "rock" && computerSelection === "paper") {
                    // playerScoreCount = playerScore;
                    computerScoreCount = ++computerScore;
                    return "Computer won! Paper beats rock.";
                    // console.log ("Player: " + playerScore + "  " + "Computer:" + computerScore);
                } 

                // User choice: PAPER
                else if (playerSelection === "paper" && computerSelection === "paper") {
                    playerScoreCount = ++playerScore;
                    computerScoreCount = ++computerScore;
                    return "No winner, play again!";
                    // console.log("Player: " + playerScore + "  " + "Computer:" + computerScore);

                } else if (playerSelection === "paper" && computerSelection === "scissors") {
                    // playerScoreCount = playerScore;
                    computerScoreCount = ++computerScore;
                    return "Computer won! Scissors beat paper.";
                    // console.log("Player: " + playerScore + "  " + "Computer:" + computerScore);
                } 

                // User choice: SCISSORS
                else if (playerSelection === "scissors" && computerSelection === "scissors") {
                    playerScoreCount = ++playerScore;
                    computerScoreCount = ++computerScore;
                    return "No winner, play again!";
                    // console.log("Player: " + playerScore + "  " + "Computer:" + computerScore);
                } 
                else if (playerSelection === "scissors" && computerSelection === "rock") {
                    // playerScoreCount = playerScore;
                    computerScoreCount = ++computerScore;
                    return "Computer won! Rock beat scissors.";
                    // console.log("Player: " + playerScore + "  " + "Computer:" + computerScore);
                } 
                
                // User choice: any other words
                else if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
                    return "Wrong input, please write: rock or paper or scissors.";
                } 
                
                else { 
                playerScoreCount = ++playerScore;
                computerScoreCount = computerScore;
                return "You won!"
                // console.log("Player: " + playerScore + "  " + "Computer:" + computerScore);
                }

            }
            
            // Function to run 5 rounds, display the round's and the the final score
            function game() {

            for (let i = 1; i < 6; i++) {
                console.log(playRound());
            }

                if (playerScoreCount > computerScoreCount) {
                    console.log("End of 5 rounds. Player won by " + playerScoreCount + ":" + computerScoreCount);
                } else if (playerScoreCount < computerScoreCount) {
                    console.log("End of 5 rounds. Computer won by " + playerScoreCount + ":" + computerScoreCount);
                } else { console.log("End of 5 rounds. Its a draw! " + playerScoreCount + " : " + computerScoreCount);
                
                console.log(playerScoreCount + "  " + computerScoreCount);
            }
           }

           game();
        
           
            