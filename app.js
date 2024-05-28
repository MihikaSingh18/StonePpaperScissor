let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIndex = Math.floor(Math.random() * 3);
    return options[randIndex];
};

const drawGame = () => {
    msg.innerText = "Game Draw!";
    msg.style.backgroundColor = "yellow";
};

const showWinner = (userWin, userChoice, computerChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You lost! ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) => {
    const computerChoice = genComputerChoice();

    if (userChoice === computerChoice) {
        drawGame();
    } else {
        let userWin = false;
        if (
            (userChoice === "rock" && computerChoice === "scissor") ||
            (userChoice === "paper" && computerChoice === "rock") ||
            (userChoice === "scissor" && computerChoice === "paper")
        ) {
            userWin = true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
