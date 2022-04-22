var quantPlanta = document.getElementById('quantPlantar');
var quantOuro = document.getElementById('quantOuro');

var exibQuantidade = function() {
    if(quantPlanta.value !== "") {
        alert("Planta");
        alert(quantPlanta.value);
        quantPlanta.value = "";
    }else{
        alert('Digite algo no campo de ouro');
    }
}

var exibOuro = function() {
    if(quantOuro.value !== "") {
        alert("Ouro");
        alert(quantOuro.value);
        quantOuro.value = "";
    }else{
        alert('Digite algo no campo de plantas');
    }
}