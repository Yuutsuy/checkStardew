// declarando elementos
var elQuantPlanta = document.getElementById('quantPlantar');
var elQuantOuro = document.getElementById('quantOuro');
var elOpcao = document.getElementById('plantacao');
var elImgPlanta = document.getElementById('imgPlanta');
var elCusto = document.getElementById('custoArmazem');
var elNumCusto = elCusto.children[1];

// criando objetos
var objChirivia = {
    "colheita" : 5,
    "armazem" : 20,
    "joja" : 25,
    "carrinho" : "100 - 1000 ouros",
    "mercadoNoturno" : 20,
    "oasis" : "Não vendido"
};
var objAlho = {
    "colheita" : 5,
    "armazem" : 40,
    "joja" : "não vendido",
    "carrinho" : "100 - 1000 ouros",
    "mercadoNoturno" : 40,
    "oasis" : "Não vendido"
};
var objBatata = {
    "colheita" : 6,
    "armazem" : 50,
    "joja" : 62,
    "carrinho" : "100 - 1000 ouros",
    "mercadoNoturno" : 50,
    "oasis" : "Não vendido"
};
var objCouve = {
    "colheita" : 6,
    "armazem" : 70,
    "joja" : 87,
    "carrinho" : "105 - 1000 ouros",
    "mercadoNoturno" : 70,
    "oasis" : "Não vendido"
};
var objCouveFlor = {
    "colheita" : 12,
    "armazem" : 80,
    "joja" : 100,
    "carrinho" : "120 - 1000 ouros",
    "mercadoNoturno" : 80,
    "oasis" : "Não vendido"
};
var objRuibardo = {
    "colheita" : 13,
    "armazem" : "Não vendido",
    "joja" : "Não vendido",
    "carrinho" : "150 - 1000 ouros",
    "mercadoNoturno" : "Não vendido",
    "oasis" : 100
};
var objVagem = {
    "colheita" : 10,
    "armazem" : 60,
    "joja" : 75,
    "carrinho" : "100 - 1000 ouros",
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
    "carrinho" : "100 - 1000 ouros",
    "mercadoNoturno" : 30,
    "oasis" : "Não vendido"
};
var objJasmimAzul = {
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
                // chama a classe css indicada dentro do método add
                elImgPlanta.classList.add('chirivia');
                // condição para adicionar ou não um 0 ao exibior a quantidade
                if(elQuantPlanta.value <= 9){
                    elNumQuant.innerHTML = `0${elQuantPlanta.value}`;
                }else{
                    elNumQuant.innerHTML = elQuantPlanta.value;
                };
                // condição para exibir o custo total
                if(elNumCusto <= 9){
                    elNumCusto.innerHTML = (`0${elQuantPlanta.value * objChirivia.armazem}`);
                }else{
                    elNumCusto.innerHTML = (elQuantPlanta.value * objChirivia.armazem);
                }
                break;
                
            case 'opt2':
                // chama a classe css indicada dentro do método add
                elImgPlanta.classList.add('alho');
                // condição para adicionar ou não um 0 ao exibior a quantidade
                if(elQuantPlanta.value <= 9){
                    elNumQuant.innerHTML = `0${elQuantPlanta.value}`;
                }else{
                    elNumQuant.innerHTML = elQuantPlanta.value;
                };
                // condição para exibir o custo total
                if(elNumCusto <= 9){
                    elNumCusto.innerHTML = (0`${elQuantPlanta.value * objAlho.armazem}`);
                }else{
                    elNumCusto.innerHTML = (elQuantPlanta.value * objAlho.armazem);
                }
                break;

            case 'opt3':
                // chama a classe css indicada dentro do método add
                elImgPlanta.classList.add('batata');
                // condição para adicionar ou não um 0 ao exibior a quantidade
                if(elQuantPlanta.value <= 9){
                    elNumQuant.innerHTML = `0${elQuantPlanta.value}`;
                }else{
                    elNumQuant.innerHTML = elQuantPlanta.value;
                };
                // condição para exibir o custo total
                if(elNumCusto <= 9){
                    elNumCusto.innerHTML = (0`${elQuantPlanta.value * objBatata.armazem}`);
                }else{
                    elNumCusto.innerHTML = (elQuantPlanta.value * objBatata.armazem);
                }
                break;

            case 'opt4':
                // chama a classe css indicada dentro do método add
                elImgPlanta.classList.add('couve');
                // condição para adicionar ou não um 0 ao exibior a quantidade
                if(elQuantPlanta.value <= 9){
                    elNumQuant.innerHTML = `0${elQuantPlanta.value}`;
                }else{
                    elNumQuant.innerHTML = elQuantPlanta.value;
                };
                // condição para exibir o custo total
                if(elNumCusto <= 9){
                    elNumCusto.innerHTML = (0`${elQuantPlanta.value * objCouve.armazem}`);
                }else{
                    elNumCusto.innerHTML = (elQuantPlanta.value * objCouve.armazem);
                }
                break;

            case 'opt5':
                // chama a classe css indicada dentro do método add
                elImgPlanta.classList.add('couve-flor');
                // condição para adicionar ou não um 0 ao exibior a quantidade
                if(elQuantPlanta.value <= 9){
                    elNumQuant.innerHTML = `0${elQuantPlanta.value}`;
                }else{
                    elNumQuant.innerHTML = elQuantPlanta.value;
                };
                // condição para exibir o custo total
                if(elNumCusto <= 9){
                    elNumCusto.innerHTML = (0`${elQuantPlanta.value * objCouveFlor.armazem}`);
                }else{
                    elNumCusto.innerHTML = (elQuantPlanta.value * objCouveFlor.armazem);
                }
                break;

            case 'opt6':
                // chama a classe css indicada dentro do método add
                elImgPlanta.classList.add('ruibardo');
                // condição para adicionar ou não um 0 ao exibior a quantidade
                if(elQuantPlanta.value <= 9){
                    elNumQuant.innerHTML = `0${elQuantPlanta.value}`;
                }else{
                    elNumQuant.innerHTML = elQuantPlanta.value;
                };
                // condição para exibir o custo total
                if(elNumCusto <= 9){
                    elNumCusto.innerHTML = (0`${elQuantPlanta.value * objRuibardo.armazem}`);
                }else{
                    elNumCusto.innerHTML = (elQuantPlanta.value * objRuibardo.armazem);
                }
                break;

            case 'opt7':
                // chama a classe css indicada dentro do método add
                elImgPlanta.classList.add('vagem');
                // condição para adicionar ou não um 0 ao exibior a quantidade
                if(elQuantPlanta.value <= 9){
                    elNumQuant.innerHTML = `0${elQuantPlanta.value}`;
                }else{
                    elNumQuant.innerHTML = elQuantPlanta.value;
                };
                // condição para exibir o custo total
                if(elNumCusto <= 9){
                    elNumCusto.innerHTML = (0`${elQuantPlanta.value * objVagem.armazem}`);
                }else{
                    elNumCusto.innerHTML = (elQuantPlanta.value * objVagem.armazem);
                }
                break;

            case 'opt8':
                // chama a classe css indicada dentro do método add
                elImgPlanta.classList.add('cafe');
                // condição para adicionar ou não um 0 ao exibior a quantidade
                if(elQuantPlanta.value <= 9){
                    elNumQuant.innerHTML = `0${elQuantPlanta.value}`;
                }else{
                    elNumQuant.innerHTML = elQuantPlanta.value;
                };
                // condição para exibir o custo total
                if(elNumCusto <= 9){
                    elNumCusto.innerHTML = (0`${elQuantPlanta.value * objCafe.armazem}`);
                }else{
                    elNumCusto.innerHTML = (elQuantPlanta.value * objCafe.armazem);
                }
                break;

            case 'opt9':
                // chama a classe css indicada dentro do método add
                elImgPlanta.classList.add('morango');
                // condição para adicionar ou não um 0 ao exibior a quantidade
                if(elQuantPlanta.value <= 9){
                    elNumQuant.innerHTML = `0${elQuantPlanta.value}`;
                }else{
                    elNumQuant.innerHTML = elQuantPlanta.value;
                };
                // condição para exibir o custo total
                if(elNumCusto <= 9){
                    elNumCusto.innerHTML = (0`${elQuantPlanta.value * objMorango.armazem}`);
                }else{
                    elNumCusto.innerHTML = (elQuantPlanta.value * objMorango.armazem);
                }
                break;

            case 'opt10':
                // chama a classe css indicada dentro do método add
                elImgPlanta.classList.add('tulipa');
                // condição para adicionar ou não um 0 ao exibior a quantidade
                if(elQuantPlanta.value <= 9){
                    elNumQuant.innerHTML = `0${elQuantPlanta.value}`;
                }else{
                    elNumQuant.innerHTML = elQuantPlanta.value;
                };
                // condição para exibir o custo total
                if(elNumCusto <= 9){
                    elNumCusto.innerHTML = (0`${elQuantPlanta.value * objTulipa.armazem}`);
                }else{
                    elNumCusto.innerHTML = (elQuantPlanta.value * objTulipa.armazem);
                }
                break;

            case 'opt11':
                // chama a classe css indicada dentro do método add
                elImgPlanta.classList.add('jasmim-azul');
                // condição para adicionar ou não um 0 ao exibior a quantidade
                if(elNumCusto <= 9){
                    elNumQuant.innerHTML = `0${elQuantPlanta.value}`;
                }else{
                    elNumQuant.innerHTML = elQuantPlanta.value;
                };
                // condição para exibir o custo total
                if(elNumCusto <= 9){
                    elNumCusto.innerHTML = (0`${elQuantPlanta.value * objJasmimAzul.armazem}`);
                }else{
                    elNumCusto.innerHTML = (elQuantPlanta.value * objJasmimAzul.armazem);
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