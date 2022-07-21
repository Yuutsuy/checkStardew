// declarando elementos
var elQuantPlanta = document.getElementById('quantPlantar');
var elQuantOuro = document.getElementById('quantOuro');
var elOpcao = document.getElementById('plantacao');
var elImgPlanta = document.getElementById('imgPlanta');
var elColheita = document.getElementById('diasColheita');
var elNumColheita = elColheita.children[1];
var elInfo = document.getElementById('info');
var elInfoText = elInfo.children[0];

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
var elExibiQuantidade = document.getElementById('exibQuantTotal');
var elNumExibQuant = elExibiQuantidade.children[1];

// criando objetos
var objChirivia = {
    "colheita" : '5 dias',
    "armazem" : 20,
    "joja" : 25,
    "carrinho" : "100 - 1000",
    "mercadoNoturno" : 20,
    "oasis" : "Não vendido"
};
var objAlho = {
    "colheita" : '5 dias',
    "armazem" : 40,
    "joja" : "Não vendido",
    "carrinho" : "100 - 1000",
    "mercadoNoturno" : 40,
    "oasis" : "Não vendido"
};
var objBatata = {
    "colheita" : '6 dias',
    "armazem" : 50,
    "joja" : 62,
    "carrinho" : "100 - 1000",
    "mercadoNoturno" : 50,
    "oasis" : "Não vendido"
};
var objCouve = {
    "colheita" : '6 dias',
    "armazem" : 70,
    "joja" : 87,
    "carrinho" : "105 - 1000",
    "mercadoNoturno" : 70,
    "oasis" : "Não vendido"
};
var objCouveFlor = {
    "colheita" : '12 dias',
    "armazem" : 80,
    "joja" : 100,
    "carrinho" : "120 - 1000",
    "mercadoNoturno" : 80,
    "oasis" : "Não vendido"
};
var objRuibardo = {
    "colheita" : '13 dias',
    "armazem" : "Não vendido",
    "joja" : "Não vendido",
    "carrinho" : "150 - 1000",
    "mercadoNoturno" : "Não vendido",
    "oasis" : 100
};
var objVagem = {
    "colheita" : '10 dias',
    "armazem" : 60,
    "joja" : 75,
    "carrinho" : "100 - 1000",
    "mercadoNoturno" : 60,
    "oasis" : 100
};
var objCafe = {
    "colheita" : '10 dias',
    "armazem" : "Não vendido",
    "joja" : "Não vendido",
    "carrinho" : "Não vendido",
    "mercadoNoturno" : "Não vendido",
    "oasis" : "Não vendido"
};
var objMorango = {
    "colheita" : '8 dias',
    "armazem" : "Não vendido",
    "joja" : "Não vendido",
    "carrinho" : "Não vendido",
    "mercadoNoturno" : "Não vendido",
    "oasis" : "Não vendido",
    "festival" : 100
};
var objTulipa = {
    "colheita" : '7 dias',
    "armazem" : 30,
    "joja" : 37,
    "carrinho" : "100 - 1000",
    "mercadoNoturno" : 30,
    "oasis" : "Não vendido"
};
var objJasmimAzul = {
    "colheita" : '7 dias',
    "armazem" : 30,
    "joja" : 37,
    "carrinho" : "100 - 1000",
    "mercadoNoturno" : 30,
    "oasis" : "Não vendido"
};
var objRepolho = {
    "colheita" : "9 dias",
    "armazem" : 100,
    "joja" : "Não vendido",
    "carrinho" : "150 - 1000",
    "mercadoNoturno" : 100,
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
                // chama a imagem da chirivia
                elImgPlanta.classList.add('chirivia');
                elNumExibQuant.innerHTML = elQuantPlanta.value;
                // exibe valor que retorna texto
                elNumCustoCarrinho.innerHTML = objChirivia.carrinho;
                elNumCustoOasis.innerHTML = objChirivia.oasis;                
                // exibe o valor total de cada item para ser gasto na compra das sementes
                elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objChirivia.armazem);
                elNumCustoJoja.innerHTML = (elQuantPlanta.value * objChirivia.joja);
                elNumCustoMercadoNoturno.innerHTML = (elQuantPlanta.value * objChirivia.mercadoNoturno);
                // exibe os dias para colher
                elNumColheita.innerHTML = objChirivia.colheita;
                elInfoText.innerHTML = '';
                break;
                
            case 'opt2':
                // chama a imagem do alho
                elImgPlanta.classList.add('alho');
                elNumExibQuant.innerHTML = elQuantPlanta.value;
                // exibe valor que retorna texto
                elNumCustoJoja.innerHTML = objAlho.joja;
                elNumCustoCarrinho.innerHTML = objAlho.carrinho;
                elNumCustoOasis.innerHTML = objAlho.oasis;
                // exibe o valor total de cada item para ser gasto na compra das sementes
                elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objAlho.armazem);
                elNumCustoMercadoNoturno.innerHTML = (elQuantPlanta.value * objAlho.mercadoNoturno);
                // exibe os dias para colher
                elNumColheita.innerHTML = objAlho.colheita;
                elInfoText.innerHTML = '';
                break;

            case 'opt3':
                // chama a imagem da batata
                elImgPlanta.classList.add('batata');
                elNumExibQuant.innerHTML = elQuantPlanta.value;
                // exibe valor que retorna texto
                elNumCustoCarrinho.innerHTML = objBatata.carrinho;
                elNumCustoOasis.innerHTML = objBatata.oasis;
                // exibe o valor total de cada item para ser gasto na compra das sementes
                elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objBatata.armazem);
                elNumCustoJoja.innerHTML = (elQuantPlanta.value * objBatata.joja);
                elNumCustoMercadoNoturno.innerHTML = (elQuantPlanta.value * objBatata.mercadoNoturno);
                // exibe os dias para colher
                elNumColheita.innerHTML = objBatata.colheita;
                elInfoText.innerHTML = '';
                break;

            case 'opt4':
                // chama a imagem da couve
                elImgPlanta.classList.add('couve');
                elNumExibQuant.innerHTML = elQuantPlanta.value;
                // exibe valor que retorna texto
                elNumCustoCarrinho.innerHTML = objCouve.carrinho;
                elNumCustoOasis.innerHTML = objCouve.oasis;
                // exibe o valor total de cada item para ser gasto na compra das sementes
                elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objCouve.armazem);
                elNumCustoJoja.innerHTML = (elQuantPlanta.value * objCouve.joja);
                elNumCustoMercadoNoturno.innerHTML = (elQuantPlanta.value * objCouve.mercadoNoturno);
                // exibe os dias para colher
                elNumColheita.innerHTML = objCouve.colheita;
                elInfoText.innerHTML = '';
                break;

            case 'opt5':
                // chama a imagem da couve-flor
                elImgPlanta.classList.add('couve-flor');
                // exibe valor que retorna texto
                elNumExibQuant.innerHTML = elQuantPlanta.value;
                elNumCustoCarrinho.innerHTML = objCouveFlor.carrinho;
                elNumCustoOasis.innerHTML = objCouveFlor.oasis;
                // exibe o valor total de cada item para ser gasto na compra das sementes
                elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objCouveFlor.armazem);
                elNumCustoJoja.innerHTML = (elQuantPlanta.value * objCouveFlor.joja);
                elNumCustoMercadoNoturno.innerHTML = (elQuantPlanta.value * objCouveFlor.mercadoNoturno);
                // exibe os dias para colher
                elNumColheita.innerHTML = objCouveFlor.colheita;
                elInfoText.innerHTML = '';
                break;

            case 'opt6':
                // chama a imagem do ruibardo
                elImgPlanta.classList.add('ruibardo');
                elNumExibQuant.innerHTML = elQuantPlanta.value;
                // exibe valor que retorna texto
                elNumCustoArmazem.innerHTML = objRuibardo.armazem;
                elNumCustoJoja.innerHTML = objRuibardo.joja;
                elNumCustoCarrinho.innerHTML = objRuibardo.carrinho;
                elNumCustoMercadoNoturno.innerHTML = objRuibardo.mercadoNoturno;
                // exibe o valor total de cada item para ser gasto na compra das sementes
                elNumCustoOasis.innerHTML = (elQuantPlanta.value * objRuibardo.oasis);
                // exibe os dias para colher
                elNumColheita.innerHTML = objRuibardo.colheita;
                elInfoText.innerHTML = '';
                break;

            case 'opt7':
                // chama a imagem da vagem
                elImgPlanta.classList.add('vagem');
                // exibe valor que retorna texto
                elNumExibQuant.innerHTML = elQuantPlanta.value;
                elNumCustoCarrinho.innerHTML = objVagem.carrinho
                // exibe o valor total de cada item para ser gasto na compra das sementes
                elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objVagem.armazem);
                elNumCustoJoja.innerHTML = (elQuantPlanta.value * objVagem.joja);
                elNumCustoMercadoNoturno.innerHTML = (elQuantPlanta.value * objVagem.mercadoNoturno);
                elNumCustoOasis.innerHTML = (elQuantPlanta.value * objVagem.oasis);
                // exibe os dias para colher
                elNumColheita.innerHTML = objVagem.colheita;
                elInfoText.innerHTML = '';
                break;

            case 'opt8':
                // chama a imagem do cafe
                elImgPlanta.classList.add('cafe');
                elNumExibQuant.innerHTML = elQuantPlanta.value;
                // exibe valor que retorna texto
                elNumCustoArmazem.innerHTML = objCafe.armazem;
                elNumCustoJoja.innerHTML = objCafe.joja;
                elNumCustoCarrinho.innerHTML = objCafe.carrinho;
                elNumCustoMercadoNoturno.innerHTML = objCafe.mercadoNoturno;
                elNumCustoOasis.innerHTML = objCafe.oasis;
                // exibe os dias para colher
                elNumColheita.innerHTML = objCafe.colheita;
                elInfoText.innerHTML = ('Um Grão de café é ao mesmo tempo um cultivo e uma semente que pode ser plantada. Os grãos de café crescem e amadurecem 10 dias após serem plantados (e a cada 2 dias em diante) tanto na primavera quanto no verão. Colocar 5 grãos de café dentro de um Barril produzirá Café.');
                break;

            case 'opt9':
                // chama a imagem do morango
                elImgPlanta.classList.add('morango');
                // exibe os dias para colher
                elNumColheita.innerHTML = objMorango.colheita;
                elNumExibQuant.innerHTML = elQuantPlanta.value;
                elNumCustoJoja.innerHTML = objMorango.joja;
                elNumCustoCarrinho.innerHTML = objMorango.carrinho;
                elNumCustoMercadoNoturno.innerHTML = objMorango.mercadoNoturno;
                elNumCustoOasis.innerHTML = objMorango.oasis;
                elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objMorango.festival);
                elInfoText.innerHTML = `Sementes de morango são um tipo de semente. Plantas maduras produzem Morangos. Elas podem ser compradas por ${objMorango.festival} ouros cada no Festival do Ovo`;
                break;

            case 'opt10':
                // chama a imagem da tulipa
                elImgPlanta.classList.add('tulipa');
                elNumExibQuant.innerHTML = elQuantPlanta.value;
                // exibe valor que retorna texto
                elNumCustoCarrinho.innerHTML = objTulipa.carrinho;
                elNumCustoOasis.innerHTML = objTulipa.oasis;
                // exibe o valor total de cada item para ser gasto na compra das sementes
                elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objTulipa.armazem);
                elNumCustoJoja.innerHTML = (elQuantPlanta.value * objTulipa.joja);
                elNumCustoMercadoNoturno.innerHTML = (elQuantPlanta.value * objTulipa.mercadoNoturno);
                // exibe os dias para colher
                elNumColheita.innerHTML = objTulipa.colheita;
                elInfoText.innerHTML = '';
                break;

            case 'opt11':
                // cchama a imagem da jasmin-azul
                elImgPlanta.classList.add('jasmim-azul');
                elNumExibQuant.innerHTML = elQuantPlanta.value;
                // exibe o valor total de cada item para ser gasto na compra das sementes
                elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objJasmimAzul.armazem);
                // exibe os dias para colher
                elNumColheita.innerHTML = objJasmimAzul.colheita;
                elInfoText.innerHTML = '';
                break;
        };
        elQuantPlanta.value = ""; // limpa a caixa de entrada com o id quantPlanta
    }else{
        alert('Digite algo no campo QUANTIDADE DE PLANTAS');
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
        // verifica o valor selecionado no id opcoes
        switch(elOpcao.value) {
            case 'opt1':
                elImgPlanta.classList.add('chirivia');
                elNumCustoArmazem.innerHTML = Math.floor(elQuantOuro.value / objChirivia.armazem);
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
        elQuantOuro.value = ""; // limpa a caixa de entrada elQuantOuro
    }else{
        alert('Digite algo no campo QUANTIDADE DE OURO');
    }
}