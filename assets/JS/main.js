var quantPlanta = document.getElementById('quantPlantar');
var quantOuro = document.getElementById('quantOuro');
var opcao = document.getElementById('plantacao');
var imgPlanta = document.getElementById('imgPlanta');
var numQuant = document.getElementById('numQuantidade');

var exibQuantidade = function() {
    // limpa a imagem na div imgPlanta
    imgPlanta.classList = '';
    // cria condição para avaliar se a caixa de entrada recebe ou não algum valor
    if(quantPlanta.value !== "") {
        // alert("Planta");
        quantPlanta.value = ""; // limpa a caixa de entrada com o id quantPlanta
        // verifica o valor selecionado no id opcoes
        switch(opcao.value) {
            case 'opt1':
                imgPlanta.classList.add('chirivia');
                break;
            case 'opt2':
                imgPlanta.classList.add('alho');
                break;
            case 'opt3':
                imgPlanta.classList.add('batata');
                break;
            case 'opt4':
                imgPlanta.classList.add('couve');
                break;
            case 'opt5':
                imgPlanta.classList.add('couve-flor');
                break;
            case 'opt6':
                imgPlanta.classList.add('ruibardo');
                break;
            case 'opt7':
                imgPlanta.classList.add('vagem');
                break;
            case 'opt8':
                imgPlanta.classList.add('cafe');
                break;
            case 'opt9':
                imgPlanta.classList.add('morango');
                break;
            case 'opt10':
                imgPlanta.classList.add('tulipa');
                break;
            case 'opt11':
                imgPlanta.classList.add('jasmim-azul');
                break;
        };
    }else{
        alert('Digite algo no campo de quantidade de plantas');
    }
}

var exibOuro = function() {
    // limpa a imagem na div imgPlanta
    imgPlanta.classList = '';
    // cria condição para avaliar se a caixa de entrada recebe ou não algum valor
    if(quantOuro.value !== "") {
        // alert("Ouro");
        // alert(quantOuro.value);
        quantOuro.value = ""; // limpa a caixa de entrada quantOuro
        // verifica o valor selecionado no id opcoes
        switch(opcao.value) {
            case 'opt1':
                imgPlanta.classList.add('chirivia');
                break;
            case 'opt2':
                imgPlanta.classList.add('alho');
                break;
            case 'opt3':
                imgPlanta.classList.add('batata');
                break;
            case 'opt4':
                imgPlanta.classList.add('couve');
                break;
            case 'opt5':
                imgPlanta.classList.add('couve-flor');
                break;
            case 'opt6':
                imgPlanta.classList.add('ruibardo');
                break;
            case 'opt7':
                imgPlanta.classList.add('vagem');
                break;
            case 'opt8':
                imgPlanta.classList.add('cafe');
                break;
            case 'opt9':
                imgPlanta.classList.add('morango');
                break;
            case 'opt10':
                imgPlanta.classList.add('tulipa');
                break;
            case 'opt11':
                imgPlanta.classList.add('jasmim-azul');
                break;
        };
    }else{
        alert('Digite algo no campo de quantidade de ouro');
    }
}