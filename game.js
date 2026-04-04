
let rockBtn = document.getElementById("rock");
let paperBtn = document.getElementById("paper");
let scissorsBtn = document.getElementById("scissors");


rockBtn.addEventListener("click", function() {
    playGame("rock");
});

paperBtn.addEventListener("click", function() {
    playGame("paper");
});

scissorsBtn.addEventListener("click", function() {
    playGame("scissors");
});


function playGame(playerChoice) {

    let choices = ["rock", "paper", "scissors"];

    
    let randomIndex = Math.floor(Math.random() * 3);
    let computerChoice = choices[randomIndex];

    
    document.getElementById("player").textContent =
        "You: " + playerChoice;

    document.getElementById("computer").textContent =
        "Computer: " + computerChoice;

    // Decide winner
    let result = "";

 
    if (playerChoice === computerChoice) {
        result = "It's a Tie!";
    } 
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You Win!";
    } 
     else {
        result = "Computer Wins!";
    }
}