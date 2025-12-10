const botoes = document.querySelectorAll(".btn");

const userChose = document.getElementById("user-chose");
const pcChose = document.getElementById("pc-chose");

const winnerText = document.getElementById("winner");

const userScore = document.getElementById("user-score");
const pcScore = document.getElementById("pc-score");

let pontosUser = 0;
let pontosPc = 0;

botoes.forEach(botao => {
    botao.addEventListener("click", () => {

        // Escolha do usuário
        let user = botao.getAttribute("data-move");
        userChose.textContent = " " + user;

        // Escolha do PC
        let opcoes = ["pedra", "papel", "tesoura"];
        let pc = opcoes[Math.floor(Math.random() * 3)];
        pcChose.textContent = " " + pc;

        // Descobrir quem venceu
        let resultado = "";

        if (user === pc) {
            resultado = "Empate!";
        } else if (
            (user === "pedra" && pc === "tesoura") ||
            (user === "papel" && pc === "pedra") ||
            (user === "tesoura" && pc === "papel")
        ) {
            resultado = "Você venceu!";
            pontosUser++;
            userScore.textContent = pontosUser;
        } else {
            resultado = "Computador venceu!";
            pontosPc++;
            pcScore.textContent = pontosPc;
        }

        winnerText.textContent = resultado;
    });
});
