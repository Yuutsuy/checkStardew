var quantPlanta = document.getElementById('quantPlantar');
var quantOuro = document.getElementById('quantOuro');

var exibirDados = function() {
    if(quantOuro.value === "") {
        alert("Planta");
        alert(quantPlanta.value);
        quantPlanta.value = "";
        quantOuro.value = "";
    }else{
        alert("Ouro");
        alert(quantOuro.value);
        quantOuro.value = "";
        quantPlanta.value = "";
    }
}