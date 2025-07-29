let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userscorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");

const gencompchoice = () => {
    // rock, paper, scissors
    const options = ["rock", "paper", "scissors"];
    const randix = Math.floor(Math.random() * 3);
    return options[randix];
};

const drawGame = () => {
    msg.innerText = "Game was draw, play again!";
    msg.style.backgroundColor = "grey";
};

const showWinner = (userwin, userchoice, compChoice) => {
    if (userwin) {
        userScore++;
        userscorepara.innerText = userScore;
        msg.innerText = `You win! Your ${userchoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compscorepara.innerText = compScore; // ✅ Fixed here
        msg.innerText = `You lose! ${compChoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) => {
    console.log("userchoice =", userchoice);
    const compChoice = gencompchoice();
    console.log("comp choice =", compChoice);

    if (userchoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userchoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userchoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id");
        playgame(userchoice);
        console.log("choice was clicked", userchoice);
    });
});
