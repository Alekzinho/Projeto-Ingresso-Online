function comprar() {
    let tipoDeIngresso = document.getElementById("tipo-ingresso").value;
    let quantidadeDeIngressos = document.getElementById("qtd").value;
    
    let quantidadePista = parseInt(document.getElementById("qtd-pista").textContent);
    let quantidadeCadeiraSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    let quantidadeCadeiraInferior = parseInt(document.getElementById("qtd-inferior").textContent);

    // Desafio 1: Alerta de quantidade inválida
    if (quantidadeDeIngressos < 0) {
        alert("Selecione uma quantidade válida!");
        return;
    }
    
    //Comprando ingressos de pista
    if (tipoDeIngresso.includes("pista")) {
        if (quantidadeDeIngressos > quantidadePista) {
            alert("Não é possível comprar essa quantidade de ingressos para pista.");
            return;
        } else {
           quantidadePista = quantidadePista - quantidadeDeIngressos;
        document.getElementById("qtd-pista").innerHTML = quantidadePista; 
        }
    }
    
    //Comprando ingressos de cadeira superior
    if (tipoDeIngresso.includes("superior")) {
        if (quantidadeDeIngressos > quantidadeCadeiraSuperior) {
            alert("Não é possível comprar essa quantidade de ingressos para cadeira superior.");
            return;
        } else {
           quantidadeCadeiraSuperior = quantidadeCadeiraSuperior - quantidadeDeIngressos;
        document.getElementById("qtd-superior").innerHTML = quantidadeCadeiraSuperior; 
        }
    }

    //Comprando ingressos de cadeira inferior
    if (tipoDeIngresso.includes("inferior")) {
        if (quantidadeDeIngressos > quantidadeCadeiraInferior) {
            alert("Não é possível comprar essa quantidade de ingressos para cadeira inferiror.");
            return;
        } else {
           quantidadeCadeiraInferior = quantidadeCadeiraInferior - quantidadeDeIngressos;
        document.getElementById("qtd-inferior").innerHTML = quantidadeCadeiraInferior; 
        }
    }

    document.getElementById("qtd").value = '';
}

// Desafio 2: Converter string em número inteiro
let numeroString = "5"

function converterString(string) {
console.log(parseInt(string));
}

converterString(numeroString);

// Desafio 3: Calculadora simples
function adicao(numero1, numero2) {
    console.log(numero1 + numero2);
}

function subtracao(numero1, numero2) {
    console.log(numero1 - numero2);
}

function multiplicacao(numero1, numero2) {
    console.log(numero1 * numero2);
} 

function divisao(numero1, numero2) {
    console.log(numero1 / numero2);
}

function calcular(numero1, numero2, simboloOperacao) {
    if (simboloOperacao == "+") {
        adicao(numero1, numero2);
    } else if (simboloOperacao == "-") {
        subtracao(numero1, numero2);
    } else if (simboloOperacao == "*") {
        multiplicacao(numero1, numero2);
    } else if (simboloOperacao == "/") {
        divisao(numero1 , numero2);
    }
}

calcular(2,10,"*");