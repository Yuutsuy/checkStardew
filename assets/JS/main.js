var quantPlanta = document.getElementById('quantPlantar');
var quantOuro = document.getElementById('quantOuro');
var opcao = document.getElementById('plantacao');
var imgPlanta = document.getElementById('imgPlanta');
var quantidade = document.getElementById('numQuantidade');

var exibQuantidade = function() {
    imgPlanta.classList.remove('');

    if(quantPlanta.value !== "") {
        alert("Planta");
        quantPlanta.value = "";

        switch(opcao.value) {
            case 'opt1':
                imgPlanta.classList.add('chirivia');
                break;
            case 'opt2':
                imgPlanta.classList.add('alho');
                break;
            case 'opt3':
                imgPlanta.classList.add('treix');
                break;
        };
    }else{
        alert('Digite algo no campo de quantidade de ouro');
    }
}

var exibOuro = function() {
    if(quantOuro.value !== "") {
        alert("Ouro");
        alert(quantOuro.value);
        quantOuro.value = "";
    }else{
        alert('Digite algo no campo de quantidade de plantas');
    }
}