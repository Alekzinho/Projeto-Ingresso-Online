function comprar() {
    let tipoDeIngresso = document.getElementById("tipo-ingresso").value;
    let quantidadeDeIngressos = document.getElementById("qtd").value;
    
    let quantidadePista = parseInt(document.getElementById("qtd-pista").textContent);
    let quantidadeCadeiraSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    let quantidadeCadeiraInferior = parseInt(document.getElementById("qtd-inferior").textContent);

    if (quantidadeDeIngressos < 0) {
        alert("Selecione uma quantidade válida!");
        return;
    }
    
    //Comprando ingressos de pista
    if (tipoDeIngresso.includes("pista")) {
        if (quantidadeDeIngressos > quantidadePista) {
            alert("Não é possível comprar essa quantidade de ingressos de Pista.");
            return;
        } else {
           quantidadePista = quantidadePista - quantidadeDeIngressos;
        document.getElementById("qtd-pista").innerHTML = quantidadePista; 
        }
    }
    
    //Comprando ingressos de cadeira superior
    if (tipoDeIngresso.includes("superior")) {
        if (quantidadeDeIngressos > quantidadeCadeiraSuperior) {
            alert("Não é possível comprar essa quantidade de ingressos de Cadeira Superior.");
            return;
        } else {
           quantidadeCadeiraSuperior = quantidadeCadeiraSuperior - quantidadeDeIngressos;
        document.getElementById("qtd-superior").innerHTML = quantidadeCadeiraSuperior; 
        }
    }

    //Comprando ingressos de cadeira inferior
    if (tipoDeIngresso.includes("inferior")) {
        if (quantidadeDeIngressos > quantidadeCadeiraInferior) {
            alert("Não é possível comprar essa quantidade de ingressos de Cadeira Inferiror.");
            return;
        } else {
           quantidadeCadeiraInferior = quantidadeCadeiraInferior - quantidadeDeIngressos;
        document.getElementById("qtd-inferior").innerHTML = quantidadeCadeiraInferior; 
        }
    }

    document.getElementById("qtd").value = '';
}