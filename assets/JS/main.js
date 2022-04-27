// declarando elementos
var elQuantPlanta = document.getElementById('quantPlantar');
var elQuantOuro = document.getElementById('quantOuro');
var elOpcao = document.getElementById('plantacao');
var elImgPlanta = document.getElementById('imgPlanta');
var elQuant = document.getElementById('numQuantidade');
var elNumQuant = elQuant.children[1];


// criando objetos
var chirivia = {
    "sementes" : 20,
    "colheita" : 5,
    "armazem" : "20 ouros",
    "joja" : "25 ouros",
    "carrinho" : "100 - 1000 ouros"
};
var alho = {
    "sementes" : 20,
    "colheita" : 5,
    "armazem" : "40 ouros(a partir do segundo ano)",
    "joja" : "não vendido",
    "carrinho" : "100 - 1000 ouros"
};
var batata = {
    "sementes" : 25,
    "colheita" : 4,
    "armazem" : "50 ouros",
    "joja" : "62 ouros",
    "carrinho" : "100 - 1000 ouros" 
};
var couve = {
    "sementes" : 35,
    "colheita" : 5,
    "armazem" : "70 ouros",
    "joja" : "87 ouros",
    "carrinho" : "105 - 1000 ouros"
};
var couveFlor = {
    "sementes" : 20,
    "colheita" : 4
};
var ruibardo = {
    "sementes" : 20,
    "colheita" : 4
};
var vagem = {
    "sementes" : 20,
    "colheita" : 4
};
var cafe = {
    "sementes" : 20,
    "colheita" : 4
};
var morango = {
    "sementes" : 20,
    "colheita" : 4
};
var tulipa = {
    "sementes" : 20,
    "colheita" : 4
};
var jarmimAzul = {
    "sementes" : 20,
    "colheita" : 4
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