let order = [];
let clickedOrder = [];
let score = 0;

//0 - verde
//1 - vermelho
//2 - amarelo
//3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

//funçaõ para criar ordem aleatória de cores
let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order) {
        let elementColor = createColorElement(order[i]);
        lightColor(elementColor, Number(i) + 1)
    }
}

//função para acender próxima cor
let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(()  => {
        element.classList.remove('selected');
    });
}

//função para checar e os botões clicados são os mesmo da ordem gerada pelo game
let checkOrder = () => {
    for(let i in clickedOrder) {
        if(clickedOrder[i] != order[i]) {
            lose();
            break;
        }
    }
    if(clickedOrder.length == order.length) {
        alert(`Pontuação ${score}\n você Acertou! Inicianco Próximo Nível!`);
        nextLevel();
    }
}

//função para click do usuario
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
        createColorElement(color).classList.remove('selected');
        checkOrder();
    }, 250);

}

//Cria Função que retorna a cor
let createColorElement = (color) => {
    if(color==0) {
        return green;
    } else if(color==1) {
        return red;
    } else if(color==2) {
        return yellow;
    } else if(color==3) {
        return blue;
    }
}

//Cria Função para passar Nível do Game
let nextLevel = () => {
    score++;
    shuffleOrder();
}

//Cria Função para game over
let lose = () => {
    alert(`Pontuação: ${score}\n Você Perdeu! Clique OK para Reiniciar o Game\n`);
    order= [];
    clickedOrder = [];

    playGame();
}

//Cria função para iniciar Game
let playGame = () => {
    alert(`Bem Vindo Ao Game!\n Iniciando NOVO JOGO!\n BOA SORTE!`)
    score = 0;

    nextLevel();
}

//enventos de clique das cores
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

//inicia game
playGame();
