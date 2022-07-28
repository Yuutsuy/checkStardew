// Declarando elementos do HTML
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
// Fim declarando elementos do HTML

// Criando objetos
var objChirivia = {
    "colheita" : '5 dias',
    "armazem" : 20,
    "joja" : 25,
    "carrinho" : "100 - 1000",
    "mercadoNoturno" : 20,
    "oasis" : "Indisponível"
};
var objAlho = {
    "colheita" : '5 dias',
    "armazem" : 40,
    "joja" : "Indisponível",
    "carrinho" : "100 - 1000",
    "mercadoNoturno" : 40,
    "oasis" : "Indisponível"
};
var objBatata = {
    "colheita" : '6 dias',
    "armazem" : 50,
    "joja" : 62,
    "carrinho" : "100 - 1000",
    "mercadoNoturno" : 50,
    "oasis" : "Indisponível"
};
var objCouve = {
    "colheita" : '6 dias',
    "armazem" : 70,
    "joja" : 87,
    "carrinho" : "105 - 1000",
    "mercadoNoturno" : 70,
    "oasis" : "Indisponível"
};
var objCouveFlor = {
    "colheita" : '12 dias',
    "armazem" : 80,
    "joja" : 100,
    "carrinho" : "120 - 1000",
    "mercadoNoturno" : 80,
    "oasis" : "Indisponível"
};
var objRuibardo = {
    "colheita" : '13 dias',
    "armazem" : "Indisponível",
    "joja" : "Indisponível",
    "carrinho" : "150 - 1000",
    "mercadoNoturno" : "Indisponível",
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
    "armazem" : "Indisponível",
    "joja" : "Indisponível",
    "carrinho" : "Indisponível",
    "mercadoNoturno" : "Indisponível",
    "oasis" : "Indisponível"
};
var objMorango = {
    "colheita" : '8 dias',
    "armazem" : "Indisponível",
    "joja" : "Indisponível",
    "carrinho" : "Indisponível",
    "mercadoNoturno" : "Indisponível",
    "oasis" : "Indisponível",
    "festival" : 100
};
var objTulipa = {
    "colheita" : '7 dias',
    "armazem" : 30,
    "joja" : 37,
    "carrinho" : "100 - 1000",
    "mercadoNoturno" : 30,
    "oasis" : "Indisponível"
};
var objJasmimAzul = {
    "colheita" : '7 dias',
    "armazem" : 30,
    "joja" : 37,
    "carrinho" : "100 - 1000",
    "mercadoNoturno" : 30,
    "oasis" : "Indisponível"
};
// Fim criando objetos

// Chamando a função exibQuantidade
var exibQuantidade = function() {
    // limpa a imagem na div imgPlanta
    elImgPlanta.classList = '';
    // alert(elQuantPlanta.value);
    // cria condição para avaliar se a caixa de entrada recebe ou não algum valor
    if(elQuantPlanta.value !== "") {
        //condição para exibir a quantidade no formato de 08, 09, 10, 11
        if(elQuantPlanta.value < 10){
            elNumExibQuant.innerHTML = (`0${elQuantPlanta.value}`)
        }else{
            elNumExibQuant.innerHTML = elQuantPlanta.value 
        };
        // verifica o valor selecionado no id opcoes
        switch(elOpcao.value) {
            case 'opt1':
                // chama a imagem da chirivia
                elImgPlanta.classList.add('chirivia');
                // exibe valor que retorna texto
                elNumCustoCarrinho.innerText = objChirivia.carrinho;
                elNumCustoOasis.innerText = objChirivia.oasis;
                // exibe o valor total de cada item para ser gasto na compra das sementes
                elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objChirivia.armazem);
                elNumCustoJoja.innerHTML = (elQuantPlanta.value * objChirivia.joja);
                elNumCustoMercadoNoturno.innerHTML = (elQuantPlanta.value * objChirivia.mercadoNoturno);
                // exibe os dias para colher
                elNumColheita.innerText = objChirivia.colheita;
                elInfoText.innerText = '';
                break;
                
            case 'opt2':
                // chama a imagem do alho
                elImgPlanta.classList.add('alho');
                // exibe valor que retorna texto
                elNumCustoJoja.innerText = objAlho.joja;
                elNumCustoCarrinho.innerText = objAlho.carrinho;
                elNumCustoOasis.innerText = objAlho.oasis;
                // exibe o valor total de cada item para ser gasto na compra das sementes
                elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objAlho.armazem);
                elNumCustoMercadoNoturno.innerHTML = (elQuantPlanta.value * objAlho.mercadoNoturno);
                // exibe os dias para colher
                elNumColheita.innerText = objAlho.colheita;
                elInfoText.innerText = '';
                break;

            case 'opt3':
                // chama a imagem da batata
                elImgPlanta.classList.add('batata');
                // exibe valor que retorna texto
                elNumCustoCarrinho.innerText = objBatata.carrinho;
                elNumCustoOasis.innerText = objBatata.oasis;
                // exibe o valor total de cada item para ser gasto na compra das sementes
                elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objBatata.armazem);
                elNumCustoJoja.innerHTML = (elQuantPlanta.value * objBatata.joja);
                elNumCustoMercadoNoturno.innerHTML = (elQuantPlanta.value * objBatata.mercadoNoturno);
                // exibe os dias para colher
                elNumColheita.innerText = objBatata.colheita;
                elInfoText.innerText = '';
                break;

            case 'opt4':
                // chama a imagem da couve
                elImgPlanta.classList.add('couve');
                // exibe valor que retorna texto
                elNumCustoCarrinho.innerText = objCouve.carrinho;
                elNumCustoOasis.innerText = objCouve.oasis;
                // exibe o valor total de cada item para ser gasto na compra das sementes
                elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objCouve.armazem);
                elNumCustoJoja.innerHTML = (elQuantPlanta.value * objCouve.joja);
                elNumCustoMercadoNoturno.innerHTML = (elQuantPlanta.value * objCouve.mercadoNoturno);
                // exibe os dias para colher
                elNumColheita.innerText = objCouve.colheita;
                elInfoText.innerText = '';
                break;

            case 'opt5':
                // chama a imagem da couve-flor
                elImgPlanta.classList.add('couve-flor');
                // exibe valor que retorna texto
                elNumCustoCarrinho.innerText = objCouveFlor.carrinho;
                elNumCustoOasis.innerText = objCouveFlor.oasis;
                // exibe o valor total de cada item para ser gasto na compra das sementes
                elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objCouveFlor.armazem);
                elNumCustoJoja.innerHTML = (elQuantPlanta.value * objCouveFlor.joja);
                elNumCustoMercadoNoturno.innerHTML = (elQuantPlanta.value * objCouveFlor.mercadoNoturno);
                // exibe os dias para colher
                elNumColheita.innerText = objCouveFlor.colheita;
                elInfoText.innerText = '';
                break;

            case 'opt6':
                // chama a imagem do ruibardo
                elImgPlanta.classList.add('ruibardo');
                // exibe valor que retorna texto
                elNumCustoArmazem.innerText = objRuibardo.armazem;
                elNumCustoJoja.innerText = objRuibardo.joja;
                elNumCustoCarrinho.innerText = objRuibardo.carrinho;
                elNumCustoMercadoNoturno.innerHTML = objRuibardo.mercadoNoturno;
                // exibe o valor total de cada item para ser gasto na compra das sementes
                elNumCustoOasis.innerHTML = (elQuantPlanta.value * objRuibardo.oasis);
                // exibe os dias para colher
                elNumColheita.innerText = objRuibardo.colheita;
                elInfoText.innerText = '';
                break;

            case 'opt7':
                // chama a imagem da vagem
                elImgPlanta.classList.add('vagem');
                // exibe valor que retorna texto
                elNumCustoCarrinho.innerText = objVagem.carrinho
                // exibe o valor total de cada item para ser gasto na compra das sementes
                elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objVagem.armazem);
                elNumCustoJoja.innerHTML = (elQuantPlanta.value * objVagem.joja);
                elNumCustoMercadoNoturno.innerHTML = (elQuantPlanta.value * objVagem.mercadoNoturno);
                elNumCustoOasis.innerHTML = (elQuantPlanta.value * objVagem.oasis);
                // exibe os dias para colher
                elNumColheita.innerText = objVagem.colheita;
                elInfoText.innerText = '';
                break;

            case 'opt8':
                // chama a imagem do cafe
                elImgPlanta.classList.add('cafe');
                // exibe valor que retorna texto
                elNumCustoArmazem.innerText = objCafe.armazem;
                elNumCustoJoja.innerText = objCafe.joja;
                elNumCustoCarrinho.innerText = objCafe.carrinho;
                elNumCustoMercadoNoturno.innerHTML = objCafe.mercadoNoturno;
                elNumCustoOasis.innerText = objCafe.oasis;
                // exibe os dias para colher
                elNumColheita.innerText = objCafe.colheita;
                elInfoText.innerText = ('Um Grão de café é ao mesmo tempo um cultivo e uma semente que pode ser plantada. Os grãos de café crescem e amadurecem 10 dias após serem plantados (e a cada 2 dias em diante) tanto na primavera quanto no verão. Colocar 5 grãos de café dentro de um Barril produzirá Café.');
                break;

            case 'opt9':
                // chama a imagem do morango
                elImgPlanta.classList.add('morango');
                // exibe os dias para colher
                elNumColheita.innerText = objMorango.colheita;
                elNumCustoJoja.innerText = objMorango.joja;
                elNumCustoCarrinho.innerText = objMorango.carrinho;
                elNumCustoMercadoNoturno.innerText = objMorango.mercadoNoturno;
                elNumCustoOasis.innerText = objMorango.oasis;
                elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objMorango.festival);
                elInfoText.innerHTML = `Sementes de morango são um tipo de semente. Plantas maduras produzem Morangos. Elas podem ser compradas por ${objMorango.festival} ouros cada no Festival do Ovo`;
                break;

            case 'opt10':
                // chama a imagem da tulipa
                elImgPlanta.classList.add('tulipa');
                // exibe valor que retorna texto
                elNumCustoCarrinho.innerText = objTulipa.carrinho;
                elNumCustoOasis.innerText = objTulipa.oasis;
                // exibe o valor total de cada item para ser gasto na compra das sementes
                elNumCustoArmazem.innerHTML = (elQuantPlanta.value * objTulipa.armazem);
                elNumCustoJoja.innerHTML = (elQuantPlanta.value * objTulipa.joja);
                elNumCustoMercadoNoturno.innerHTML = (elQuantPlanta.value * objTulipa.mercadoNoturno);
                // exibe os dias para colher
                elNumColheita.innerText = objTulipa.colheita;
                elInfoText.innerText = '';
                break;

            case 'opt11':
                // chama a imagem da jasmin-azul
                elImgPlanta.classList.add('jasmim-azul');
                // exibe o valor total de cada item para ser gasto na compra das sementes
                elNumCustoArmazem.innerText = (elQuantPlanta.value * objJasmimAzul.armazem);
                // exibe os dias para colher
                elNumColheita.innerText = objJasmimAzul.colheita;
                elInfoText.innerText = '';
                break;
        };
        elQuantPlanta.value = ""; // limpa a caixa de entrada com o id quantPlanta
    }else{
        // limpa as informações caso a função seja chamada sem receber dados (como quantidade de plantas)
        alert('Digite algo no campo QUANTIDADE DE PLANTAS');
        elNumCustoArmazem.innerText = '00';
        elNumCustoJoja.innerText = '00';
        elNumCustoCarrinho.innerText = '00';
        elNumCustoMercadoNoturno.innerText = '00';
        elNumCustoOasis.innerText = '00';
        elNumExibQuant.innerText = '00';
        elNumColheita.innerText = '0 dias';
        elInfoText.innerText = '';
    }
}
// Fim chamando a função exibQuantidade

// Chamando a função exibOuro
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
                // chama a imagem da chirivia
                elImgPlanta.classList.add('chirivia');
                // faz o calculo de arredondamento para cada elemento
                elNumCustoArmazem.innerHTML = Math.floor(elQuantOuro.value / objChirivia.armazem);
                elNumCustoJoja.innerHTML = Math.floor(elQuantOuro.value / objChirivia.joja);
                elNumCustoCarrinho.innerText = objChirivia.carrinho;
                elNumCustoMercadoNoturno.innerHTML = Math.floor(elQuantOuro.value / objChirivia.mercadoNoturno);
                elNumCustoOasis.innerText = objChirivia.oasis;
                // exibe os dias para colher
                elNumColheita.innerHTML = objChirivia.colheita;
                break;

            case 'opt2':
                // chama a imagem do alho
                elImgPlanta.classList.add('alho');
                // faz o calculo de arredondamento para cada elemento
                elNumCustoArmazem.innerHTML = Math.floor(elQuantOuro.value / objAlho.armazem);
                elNumCustoJoja.innerText = objAlho.joja;
                elNumCustoCarrinho.innerText = objAlho.carrinho;
                elNumCustoMercadoNoturno.innerHTML = Math.floor(elQuantOuro.value / objAlho.mercadoNoturno);
                elNumCustoOasis.innerText = objAlho.oasis;
                // exibe os dias para colher
                elNumColheita.innerHTML = objAlho.colheita;
                break;

            case 'opt3':
                // chama a imagem da batata
                elImgPlanta.classList.add('batata');
                // faz o calculo de arredondamento para cada elemento
                elNumCustoArmazem.innerHTML = Math.floor(elQuantOuro.value / objBatata.armazem);
                elNumCustoJoja.innerText = objBatata.joja;
                elNumCustoCarrinho.innerText = objBatata.carrinho;
                elNumCustoMercadoNoturno.innerHTML = Math.floor(elQuantOuro.value / objBatata.mercadoNoturno);
                elNumCustoOasis.innerText = objBatata.oasis;
                // exibe os dias para colher
                elNumColheita.innerText = objBatata.colheita;
                break;

            case 'opt4':
                // chama a imagem da couve
                elImgPlanta.classList.add('couve');
                // faz o calculo de arredondamento para cada elemento
                elNumCustoArmazem.innerHTML = Math.floor(elQuantOuro.value / objCouve.armazem);
                elNumCustoJoja.innerHTML = Math.floor(elQuantOuro.value /objCouve.joja);
                elNumCustoCarrinho.innerText = objCouve.carrinho;
                elNumCustoMercadoNoturno.innerHTML = Math.floor(elQuantOuro.value / objCouve.mercadoNoturno);
                elNumCustoOasis.innerText = objCouve.oasis;
                // exibe os dias para colher
                elNumColheita.innerText = objCouve.colheita;
                break;

            case 'opt5':
                // chama a imagem da couve-flor
                elImgPlanta.classList.add('couve-flor');
                // faz o calculo de arredondamento para cada elemento
                elNumCustoArmazem.innerHTML = Math.floor(elQuantOuro.value / objCouveFlor.armazem);
                elNumCustoJoja.innerHTML = Math.floor(elQuantOuro.value /objCouveFlor.joja);
                elNumCustoCarrinho.innerText = objCouve.carrinho;
                elNumCustoMercadoNoturno.innerHTML = Math.floor(elQuantOuro.value / objCouveFlor.mercadoNoturno);
                elNumCustoOasis.innerText = objCouveFlor.oasis;
                // exibe os dias para colher
                elNumColheita.innerText = objCouveFlor.colheita;
                break;

            case 'opt6':
                // chama a imagem do ruibardo
                elImgPlanta.classList.add('ruibardo');
                // faz o calculo de arredondamento para cada elemento
                elNumCustoArmazem.innerText = objRuibardo.armazem;
                elNumCustoJoja.innerText = objRuibardo.joja;
                elNumCustoCarrinho.innerText = objRuibardo.carrinho;
                elNumCustoMercadoNoturno.innerHTML = objRuibardo.mercadoNoturno;
                elNumCustoOasis.innerHTML = Math.floor(elQuantOuro.value / objRuibardo.oasis);
                // exibe os dias para colher
                elNumColheita.innerHTML = objRuibardo.colheita;
                break;

            case 'opt7':
                // chama a imagem da vagem
                elImgPlanta.classList.add('vagem');
                // faz o calculo de arredondamento para cada elemento
                elNumCustoArmazem.innerHTML = Math.floor(elQuantOuro.value / objVagem.armazem);
                elNumCustoJoja.innerHTML = Math.floor(elQuantOuro.value /objVagem.joja);
                elNumCustoCarrinho.innerText = objCouve.carrinho;
                elNumCustoMercadoNoturno.innerHTML = Math.floor(elQuantOuro.value / objVagem.mercadoNoturno);
                elNumCustoOasis.innerHTML = Math.floor(elQuantOuro.value / objVagem.oasis);
                // exibe os dias para colher
                elNumColheita.innerText = objVagem.colheita;
                break;

            case 'opt8':
                // chama a imagem do café
                elImgPlanta.classList.add('cafe');
                // faz o calculo de arredondamento para cada elemento
                elNumCustoArmazem.innerText = objCafe.armazem;
                elNumCustoJoja.innerText = objCafe.joja;
                elNumCustoCarrinho.innerText = objCafe.carrinho;
                elNumCustoMercadoNoturno.innerText = objCafe.mercadoNoturno;
                elNumCustoOasis.innerText = objCafe.oasis;
                // exibe os dias para colher
                elNumColheita.innerText = objCafe.colheita;
                break;

            case 'opt9':
                // chama a imagem do morango
                elImgPlanta.classList.add('morango');
                // faz o calculo de arredondamento para cada elemento
                elNumCustoArmazem.innerText = Math.floor(elQuantOuro.value / objMorango.festival);
                elNumCustoJoja.innerText = objMorango.joja;
                elNumCustoCarrinho.innerText = objMorango.carrinho;
                elNumCustoMercadoNoturno.innerText = objMorango.mercadoNoturno;
                elNumCustoOasis.innerText = objMorango.oasis;
                // exibe os dias para colher
                elNumColheita.innerText = objMorango.colheita;
                break;

            case 'opt10':
                // chama a imagem da tulipa
                elImgPlanta.classList.add('tulipa');
                // faz o calculo de arredondamento para cada elemento
                elNumCustoArmazem.innerHTML = Math.floor(elQuantOuro.value / objTulipa.armazem);
                elNumCustoJoja.innerHTML = Math.floor(elQuantOuro.value / objTulipa.joja);
                elNumCustoCarrinho.innerText = objTulipa.carrinho;
                elNumCustoMercadoNoturno.innerHTML = Math.floor(elQuantOuro.value / objTulipa.mercadoNoturno);
                elNumCustoOasis.innerText = objTulipa.oasis;
                // exibe os dias para colher
                elNumColheita.innerText = objTulipa.colheita;
                break;

            case 'opt11':
                // chama a imagem da jasmin-azul
                elImgPlanta.classList.add('jasmim-azul');
                // faz o calculo de arredondamento para cada elemento
                elNumCustoArmazem.innerHTML = Math.floor(elQuantOuro.value / objTulipa.armazem);
                elNumCustoJoja.innerHTML = Math.floor(elQuantOuro.value / objTulipa.joja);
                elNumCustoCarrinho.innerText = objTulipa.carrinho;
                elNumCustoMercadoNoturno.innerHTML = Math.floor(elQuantOuro.value / objTulipa.mercadoNoturno);
                elNumCustoOasis.innerText = objTulipa.oasis;
                // exibe os dias para colher
                elNumColheita.innerText = objTulipa.colheita;
                break;
        };
        elQuantOuro.value = ""; // limpa a caixa de entrada elQuantOuro
    }else{
        // limpa as informações caso a função seja chamada sem receber dados (como número de ouros a ser gasto)
        alert('Digite algo no campo QUANTIDADE DE OURO');
        elNumCustoArmazem.innerText = '00';
        elNumCustoJoja.innerText = '00';
        elNumCustoCarrinho.innerText = '00';
        elNumCustoMercadoNoturno.innerText = '00';
        elNumCustoOasis.innerText = '00';
        elNumExibQuant.innerText = '00';
        elNumColheita.innerText = '0 dias';
        elInfoText.innerHTML = '';
    }
}
// Fim chamando a função exibOuro