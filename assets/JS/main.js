// declarando elementos
var elQuantPlanta = document.getElementById('quantPlantar');
var elQuantOuro = document.getElementById('quantOuro');
var elOpcao = document.getElementById('plantacao');
var elImgPlanta = document.getElementById('imgPlanta');

var elCustoArmazem = document.getElementById('custoArmazem');
var elNumCustoArmazem = elCustoArmazem.children[1];
var elCustoJoja = document.getElementById('custoJoja');
var elNumCustoJoja = elCustoJoja.children[1];
var elCustoCarrinho = document.getElementById('custoCarrinho');
var elNumCustoCarrinho = elCustoCarrinho.children[1];
var elCustoMercadoNoturno = document.getElementById('custoMercNoturno');
var elNumCustoMercadoNoturno = elCustoMercadoNoturno.children[1];
var elCustoOasis = document.getElementById('custoOasis');
var elNumCustoOasis = elCustoOasis.children[1];

// criando objetos
var objChirivia = {
    "colheita" : 5,
    "armazem" : 20,
    "joja" : 25,
    "carrinho" : "100 - 1000",
    "mercadoNoturno" : 20,
    "oasis" : "Não vendido"
};
var objAlho = {
    "colheita" : 5,
    "armazem" : 40,
    "joja" : "Não vendido",
    "carrinho" : "100 - 1000",
    "mercadoNoturno" : 40,
    "oasis" : "Não vendido"
};
var objBatata = {
    "colheita" : 6,
    "armazem" : 50,
    "joja" : 62,
    "carrinho" : "100 - 1000",
    "mercadoNoturno" : 50,
    "oasis" : "Não vendido"
};
var objCouve = {
    "colheita" : 6,
    "armazem" : 70,
    "joja" : 87,
    "carrinho" : "105 - 1000",
    "mercadoNoturno" : 70,
    "oasis" : "Não vendido"
};
var objCouveFlor = {
    "colheita" : 12,
    "armazem" : 80,
    "joja" : 100,
    "carrinho" : "120 - 1000",
    "mercadoNoturno" : 80,
    "oasis" : "Não vendido"
};
var objRuibardo = {
    "colheita" : 13,
    "armazem" : "Não vendido",
    "joja" : "Não vendido",
    "carrinho" : "150 - 1000",
    "mercadoNoturno" : "Não vendido",
    "oasis" : 100
};
var objVagem = {
    "colheita" : 10,
    "armazem" : 60,
    "joja" : 75,
    "carrinho" : "100 - 1000",
    "mercadoNoturno" : 60,
    "oasis" : 100
};
var objCafe = {
    "colheita" : 10,
    "armazem" : "Não vendido",
    "joja" : "Não vendido",
    "carrinho" : "Não vendido",
    "mercadoNoturno" : "Não vendido",
    "oasis" : "Não vendido"
};
var objMorango = {
    "colheita" : 8,
    "armazem" : "Não vendido",
    "joja" : "Não vendido",
    "carrinho" : "Não vendido",
    "mercadoNoturno" : "Não vendido",
    "oasis" : "Não vendido"
};
var objTulipa = {
    "colheita" : 7,
    "armazem" : 30,
    "joja" : 37,
    "carrinho" : "100 - 1000",
    "mercadoNoturno" : 30,
    "oasis" : "Não vendido"
};
var objJasmimAzul = {
    "colheita" : 7,
    "armazem" : 30,
    "joja" : 37,
    "carrinho" : "100 - 1000",
    "mercadoNoturno" : 30,
    "oasis" : "Não vendido"
};


// chamando a função exibQuantidade
var exibQuantidade = function() {
    // limpa a imagem na div imgPlanta
    elImgPlanta.classList = '';
    // alert(elQuantPlanta.value);
    // cria condição para avaliar se a caixa de entrada recebe ou não algum valor
    if(elQuantPlanta.value !== "") {
        // alert("Planta");
        // verifica o valor selecionado no id opcoes
        switch(elOpcao.value) {
            case 'opt1':
                // chama a classe css indicada dentro do método add
                elImgPlanta.classList.add('chirivia');
                elNumCustoCarrinho.innerHTML = objChirivia.carrinho;
                elNumCustoOasis.innerHTML = objChirivia.oasis;
                // condição para exibir o custo total como 01, 02, 03 OU 10, 11, 12
                if(elNumCustoArmazem <= 9 || elNumCustoJoja <= 9 || elNumCustoMercadoNoturno <= 9){
                    elNumCustoArmazem.innerHTML = (`0${elQuantPlanta.value * objChirivia.armazem}`);
                    elNumCustoJoja.innerHTML = (`0${elQuantPlanta.value * objChirivia.joja}`);
                    elNumCustoMercadoNoturno.innerHTML = (`0${elQuantPlanta.value * objChirivia.mercadoNoturno}`);
                }else{
                    elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objChirivia.armazem);
                    elNumCustoJoja.innerHTML = (elQuantPlanta.value * objChirivia.joja);
                    elNumCustoMercadoNoturno.innerHTML = (elQuantPlanta.value * objChirivia.mercadoNoturno);
                }
                break;
                
            case 'opt2':
                // chama a classe css indicada dentro do método add
                elImgPlanta.classList.add('alho');
                elNumCustoJoja.innerHTML = objAlho.joja;
                elNumCustoCarrinho.innerHTML = objAlho.carrinho;
                elNumCustoOasis.innerHTML = objAlho.oasis;
                // condição para exibir o custo total como 01, 02, 03 OU 10, 11, 12
                if(elNumCustoArmazem <= 9){
                    elNumCustoArmazem.innerHTML = (0`${elQuantPlanta.value * objAlho.armazem}`);
                    elNumCustoMercadoNoturno.innerHTML = (0`${elQuantPlanta.value * objAlho.mercadoNoturno}`);
                }else{
                    elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objAlho.armazem);
                    elNumCustoMercadoNoturno.innerHTML = (elQuantPlanta.value * objAlho.mercadoNoturno);
                }
                break;

            case 'opt3':
                // chama a classe css indicada dentro do método add
                elImgPlanta.classList.add('batata');
                elNumCustoCarrinho.innerHTML = objBatata.carrinho;
                elNumCustoOasis.innerHTML = objBatata.oasis;
                // condição para exibir o custo total como 01, 02, 03 OU 10, 11, 12
                if(elNumCustoArmazem <= 9 || elNumCustoJoja <= 9 || elNumCustoMercadoNoturno <= 9){
                    elNumCustoArmazem.innerHTML = (0`${elQuantPlanta.value * objBatata.armazem}`);
                    elNumCustoJoja.innerHTML = (0`${elQuantPlanta.value * objBatata.joja}`);
                    elNumCustoMercadoNoturno.innerHTML = (0`${elQuantPlanta.value * objBatata.mercadoNoturno}`);
                }else{
                    elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objBatata.armazem);
                    elNumCustoJoja.innerHTML = (elQuantPlanta.value * objBatata.joja);
                    elNumCustoMercadoNoturno.innerHTML = (elQuantPlanta.value * objBatata.mercadoNoturno);
                }
                break;

            case 'opt4':
                // chama a classe css indicada dentro do método add
                elImgPlanta.classList.add('couve');
                elNumCustoCarrinho.innerHTML = objCouve.carrinho;
                elNumCustoOasis.innerHTML = objCouve.oasis;
                // condição para exibir o custo total como 01, 02, 03 OU 10, 11, 12
                if(elNumCustoArmazem <= 9 || elNumCustoJoja <= 9 || elNumCustoMercadoNoturno <= 9){
                    elNumCustoArmazem.innerHTML = (0`${elQuantPlanta.value * objCouve.armazem}`);
                    elNumCustoJoja.innerHTML = (0`${elQuantPlanta.value * objCouve.joja}`);
                    elNumCustoMercadoNoturno.innerHTML = (0`${elQuantPlanta.value * objCouve.mercadoNoturno}`);
                }else{
                    elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objCouve.armazem);
                    elNumCustoJoja.innerHTML = (elQuantPlanta.value * objCouve.joja);
                    elNumCustoMercadoNoturno.innerHTML = (elQuantPlanta.value * objCouve.mercadoNoturno);
                }
                break;

            case 'opt5':
                // chama a classe css indicada dentro do método add
                elImgPlanta.classList.add('couve-flor');
                elNumCustoCarrinho.innerHTML = objCouveFlor.carrinho;
                elNumCustoOasis.innerHTML = objCouveFlor.oasis;
                // condição para exibir o custo total como 01, 02, 03 OU 10, 11, 12
                if(elNumCustoArmazem <= 9 || elNumCustoJoja <= 9 || elNumCustoMercadoNoturno <= 9){
                    elNumCustoArmazem.innerHTML = (0`${elQuantPlanta.value * objCouveFlor.armazem}`);
                    elNumCustoJoja.innerHTML = (0`${elQuantPlanta.value * objCouveFlor.joja}`);
                    elNumCustoMercadoNoturno.innerHTML = (0`${elQuantPlanta.value * objCouveFlor.mercadoNoturno}`);
                }else{
                    elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objCouveFlor.armazem);
                    elNumCustoJoja.innerHTML = (elQuantPlanta.value * objCouveFlor.joja);
                    elNumCustoMercadoNoturno.innerHTML = (elQuantPlanta.value * objCouveFlor.mercadoNoturno);
                }
                break;

            case 'opt6':
                // chama a classe css indicada dentro do método add
                elImgPlanta.classList.add('ruibardo');
                // condição para exibir o custo total como 01, 02, 03 OU 10, 11, 12
                elNumCustoArmazem.innerHTML = objRuibardo.armazem;
                elNumCustoJoja.innerHTML = objRuibardo.joja;
                elNumCustoCarrinho.innerHTML = objRuibardo.carrinho;
                elNumCustoMercadoNoturno.innerHTML = objRuibardo.mercadoNoturno;
                if(elNumCustoOasis <= 9){
                    elNumCustoOasis.innerHTML = (0`${elQuantPlanta.value * objRuibardo.oasis}`);
                }else{
                    elNumCustoOasis.innerHTML = (elQuantPlanta.value * objRuibardo.oasis);
                }
                break;

            case 'opt7':
                // chama a classe css indicada dentro do método add
                elImgPlanta.classList.add('vagem');
                elNumCustoCarrinho.innerHTML = objVagem.carrinho;

                // condição para exibir o custo total como 01, 02, 03 OU 10, 11, 12
                if(elNumCustoArmazem <= 9 || elNumCustoJoja <= 9 || elNumCustoMercadoNoturno <= 9 || elNumCustoOasis <= 9){
                    elNumCustoArmazem.innerHTML = (0`${elQuantPlanta.value * objVagem.armazem}`);
                    elNumCustoJoja.innerHTML = (0`${elQuantPlanta.value * objVagem.joja}`);
                    elNumCustoMercadoNoturno.innerHTML = (0`${elQuantPlanta.value * objVagem.mercadoNoturno}`);
                    elNumCustoOasis.innerHTML = (0`${elQuantPlanta.value * objVagem.oasis}`);
                }else{
                    elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objVagem.armazem);
                    elNumCustoJoja.innerHTML = (elQuantPlanta.value * objVagem.joja);
                    elNumCustoMercadoNoturno.innerHTML = (elQuantPlanta.value * objVagem.mercadoNoturno);
                    elNumCustoOasis.innerHTML = (elQuantPlanta.value * objVagem.oasis);
                }
                break;

            case 'opt8':
                // chama a classe css indicada dentro do método add
                elImgPlanta.classList.add('cafe');
                // condição para exibir o custo total como 01, 02, 03 OU 10, 11, 12
                if(elNumCustoArmazem <= 9){
                    elNumCustoArmazem.innerHTML = (0`${elQuantPlanta.value * objCafe.armazem}`);
                }else{
                    elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objCafe.armazem);
                    elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objCafe.joja);
                    elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objCafe.carrinho);
                    elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objCafe.mercadoNoturno);
                    elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objCafe.oasis);
                }
                break;

            case 'opt9':
                // chama a classe css indicada dentro do método add
                elImgPlanta.classList.add('morango');
                // condição para exibir o custo total como 01, 02, 03 OU 10, 11, 12
                if(elNumCustoArmazem <= 9){
                    elNumCustoArmazem.innerHTML = (0`${elQuantPlanta.value * objMorango.armazem}`);
                }else{
                    elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objMorango.armazem);
                }
                break;

            case 'opt10':
                // chama a classe css indicada dentro do método add
                elImgPlanta.classList.add('tulipa');
                // condição para exibir o custo total como 01, 02, 03 OU 10, 11, 12
                if(elNumCustoArmazem <= 9){
                    elNumCustoArmazem.innerHTML = (0`${elQuantPlanta.value * objTulipa.armazem}`);
                }else{
                    elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objTulipa.armazem);
                }
                break;

            case 'opt11':
                // chama a classe css indicada dentro do método add
                elImgPlanta.classList.add('jasmim-azul');
                // condição para exibir o custo total como 01, 02, 03 OU 10, 11, 12
                if(elNumCustoArmazem <= 9){
                    elNumCustoArmazem.innerHTML = (0`${elQuantPlanta.value * objJasmimAzul.armazem}`);
                }else{
                    elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objJasmimAzul.armazem);
                }
                break;
        };
        elQuantPlanta.value = ""; // limpa a caixa de entrada com o id quantPlanta
    }else{
        alert('Digite algo no campo de quantidade de plantas');
    }
}

// chamando a função exibOuro
var exibOuro = function() {
    // limpa a imagem na div imgPlanta
    elImgPlanta.classList = '';
    // cria condição para avaliar se a caixa de entrada recebe ou não algum valor
    if(elQuantOuro.value !== "") {
        // alert("Ouro");
        // alert(elQuantOuro.value);
        elQuantOuro.value = ""; // limpa a caixa de entrada elQuantOuro
        // verifica o valor selecionado no id opcoes
        switch(elOpcao.value) {
            case 'opt1':
                elImgPlanta.classList.add('chirivia');
                break;
            case 'opt2':
                elImgPlanta.classList.add('alho');
                break;
            case 'opt3':
                elImgPlanta.classList.add('batata');
                break;
            case 'opt4':
                elImgPlanta.classList.add('couve');
                break;
            case 'opt5':
                elImgPlanta.classList.add('couve-flor');
                break;
            case 'opt6':
                elImgPlanta.classList.add('ruibardo');
                break;
            case 'opt7':
                elImgPlanta.classList.add('vagem');
                break;
            case 'opt8':
                elImgPlanta.classList.add('cafe');
                break;
            case 'opt9':
                elImgPlanta.classList.add('morango');
                break;
            case 'opt10':
                elImgPlanta.classList.add('tulipa');
                break;
            case 'opt11':
                elImgPlanta.classList.add('jasmim-azul');
                break;
        };
    }else{
        alert('Digite algo no campo de quantidade de ouro');
    }
}