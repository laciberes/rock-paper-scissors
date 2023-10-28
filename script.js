const rps = ["rock", "paper", "scissors"];

            // The random choice of the computer
            
            function getComputerChoice() {

                return rps[Math.floor(Math.random()*3)];
            }

            let computerSelection = getComputerChoice();


            // The choice of the player entered via prompt

            let playerSelection = (prompt('Rock, paper or scissors?')).toLowerCase();

            
            // This line confirms both selections in the console log
            console.log(playerSelection + " vs " + computerSelection)

           
            function playRound() {
                
                // User choice: ROCK
                if (playerSelection === "rock" && computerSelection === "rock") {
                    console.log("No winner, play again!");

                } else if (playerSelection === "rock" && computerSelection === "paper") {
                    console.log("Computer won! Paper beats rock."); 
                } 

                // User choice: PAPER
                else if (playerSelection === "paper" && computerSelection === "paper") {
                    console.log("No winner, play again!");

                } else if (playerSelection === "paper" && computerSelection === "scissors") {
                    console.log("Computer won! Scissors beat paper."); 
                } 

                // User choice: SCISSORS
                else if (playerSelection === "scissors" && computerSelection === "scissors") {
                    console.log("No winner, play again!");
                } 
                else if (playerSelection === "scissors" && computerSelection === "rock") {
                    console.log("Computer won! Rock beat scissors"); 
                } 
                
                // User choice: any other words
                else if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
                console.log( "Wrong input, please write: rock or paper or scissors.");
                } 
                
                else { console.log("You won!")}

            }

            playRound(playerSelection, computerSelection);