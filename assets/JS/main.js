// declarando elementos
var elQuantPlanta = document.getElementById('quantPlantar');
var elQuantOuro = document.getElementById('quantOuro');
var elOpcao = document.getElementById('plantacao');
var elImgPlanta = document.getElementById('imgPlanta');
var elQuant = document.getElementById('numQuantidade');
var elNumQuant = elQuant.children[1];
var elCusto = document.getElementById('custoTotal');
var elNumCusto = elCusto.children[1];

// criando objetos
var chirivia = {
    "colheita" : 5,
    "armazem" : 20,
    "joja" : 25,
    "carrinho" : "100 - 1000 ouros",
    "mercadoNoturno" : 20,
    "oasis" : "Não vendido"
};
var alho = {
    "colheita" : 5,
    "armazem" : 40,
    "joja" : "não vendido",
    "carrinho" : "100 - 1000 ouros",
    "mercadoNoturno" : 40,
    "oasis" : "Não vendido"
};
var batata = {
    "colheita" : 6,
    "armazem" : 50,
    "joja" : 62,
    "carrinho" : "100 - 1000 ouros",
    "mercadoNoturno" : 50,
    "oasis" : "Não vendido"
};
var couve = {
    "colheita" : 6,
    "armazem" : 70,
    "joja" : 87,
    "carrinho" : "105 - 1000 ouros",
    "mercadoNoturno" : 70,
    "oasis" : "Não vendido"
};
var couveFlor = {
    "colheita" : 12,
    "armazem" : 80,
    "joja" : 100,
    "carrinho" : "120 - 1000 ouros",
    "mercadoNoturno" : 80,
    "oasis" : "Não vendido"
};
var ruibardo = {
    "colheita" : 13,
    "armazem" : "Não vendido",
    "joja" : "Não vendido",
    "carrinho" : "150 - 1000 ouros",
    "mercadoNoturno" : "Não vendido",
    "oasis" : 100
};
var vagem = {
    "colheita" : 10,
    "armazem" : 60,
    "joja" : 75,
    "carrinho" : "100 - 1000 ouros",
    "mercadoNoturno" : 60,
    "oasis" : 100
};
var cafe = {
    "colheita" : 10,
    "armazem" : "Não vendido",
    "joja" : "Não vendido",
    "carrinho" : "Não vendido",
    "mercadoNoturno" : "Não vendido",
    "oasis" : "Não vendido"
};
var morango = {
    "colheita" : 8,
    "armazem" : "Não vendido",
    "joja" : "Não vendido",
    "carrinho" : "Não vendido",
    "mercadoNoturno" : "Não vendido",
    "oasis" : "Não vendido"
};
var tulipa = {
    "colheita" : 7,
    "armazem" : 30,
    "joja" : 37,
    "carrinho" : "100 - 1000 ouros",
    "mercadoNoturno" : 30,
    "oasis" : "Não vendido"
};
var jarmimAzul = {
    "colheita" : 7,
    "armazem" : 30,
    "joja" : 37,
    "carrinho" : "100 - 1000 ouros",
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
                elImgPlanta.classList.add('chirivia');
                if(elQuantPlanta.value <= 9){
                    elNumQuant.innerHTML = `0${elQuantPlanta.value}`;
                }else{
                    elNumQuant.innerHTML = elQuantPlanta.value;
                }
                if(elNumCusto <= 9){
                    elNumCusto.innerHTML = `${elQuantPlanta.value * chirivia.armazem}`;
                }else{
                    elNumCusto.innerHTML = (elQuantPlanta.value * chirivia.armazem);
                }
                break;
            case 'opt2':
                elImgPlanta.classList.add('alho');
                if(elQuantPlanta.value <= 9){
                    elNumQuant.innerHTML = `0${elQuantPlanta.value}`;
                }else{
                    elNumQuant.innerHTML = elQuantPlanta.value;
                }
                break;
            case 'opt3':
                elImgPlanta.classList.add('batata');
                if(elQuantPlanta.value <= 9){
                    elNumQuant.innerHTML = `0${elQuantPlanta.value}`;
                }else{
                    elNumQuant.innerHTML = elQuantPlanta.value;
                }
                break;
            case 'opt4':
                elImgPlanta.classList.add('couve');
                if(elQuantPlanta.value <= 9){
                    elNumQuant.innerHTML = `0${elQuantPlanta.value}`;
                }else{
                    elNumQuant.innerHTML = elQuantPlanta.value;
                }
                break;
            case 'opt5':
                elImgPlanta.classList.add('couve-flor');
                if(elQuantPlanta.value <= 9){
                    elNumQuant.innerHTML = `0${elQuantPlanta.value}`;
                }else{
                    elNumQuant.innerHTML = elQuantPlanta.value;
                }
                break;
            case 'opt6':
                elImgPlanta.classList.add('ruibardo');
                if(elQuantPlanta.value <= 9){
                    elNumQuant.innerHTML = `0${elQuantPlanta.value}`;
                }else{
                    elNumQuant.innerHTML = elQuantPlanta.value;
                }
                break;
            case 'opt7':
                elImgPlanta.classList.add('vagem');
                if(elQuantPlanta.value <= 9){
                    elNumQuant.innerHTML = `0${elQuantPlanta.value}`;
                }else{
                    elNumQuant.innerHTML = elQuantPlanta.value;
                }
                break;
            case 'opt8':
                elImgPlanta.classList.add('cafe');
                if(elQuantPlanta.value <= 9){
                    elNumQuant.innerHTML = `0${elQuantPlanta.value}`;
                }else{
                    elNumQuant.innerHTML = elQuantPlanta.value;
                }
                break;
            case 'opt9':
                elImgPlanta.classList.add('morango');
                if(elQuantPlanta.value <= 9){
                    elNumQuant.innerHTML = `0${elQuantPlanta.value}`;
                }else{
                    elNumQuant.innerHTML = elQuantPlanta.value;
                }
                break;
            case 'opt10':
                elImgPlanta.classList.add('tulipa');
                if(elQuantPlanta.value <= 9){
                    elNumQuant.innerHTML = `0${elQuantPlanta.value}`;
                }else{
                    elNumQuant.innerHTML = elQuantPlanta.value;
                }
                break;
            case 'opt11':
                elImgPlanta.classList.add('jasmim-azul');
                if(elQuantPlanta.value <= 9){
                    elNumQuant.innerHTML = `0${elQuantPlanta.value}`;
                }else{
                    elNumQuant.innerHTML = elQuantPlanta.value;
                }
                break;
            default:
                alert('Isso não é uma opção');
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