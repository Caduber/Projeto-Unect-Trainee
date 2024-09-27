const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");

const leg1 = document.getElementById("leg1");
const leg2 = document.getElementById("leg2");
const leg3 = document.getElementById("leg3");

const title1 = document.getElementById("title1");
const title2 = document.getElementById("title2");
const title3 = document.getElementById("title3");

const legBrigadeiro = "O brigadeiro de cappuccino é uma das guloseimas que enfeitam o balcão da doceria..."
const legPao = "O pão de mel é um dos doces mais tradicionais que temos, ele é recheado com doce de leite..."
const legBolo = "O bolo de chocolate é uma das sobremesas mais pedidas da Cafeteira, ele possui um recheio com..."
const legSorvete = "O sorvete em versão de café pode ser aproveitado sozinho ou com um pedacinho de bolo no fim..."

let controle = 0
let flagBotao = 0


function avancaProximo(){

    if(flagBotao == -1){
        controle++
    }


    
    if(controle == 4){
        controle = 1
    }
    else if (controle == 0 || controle > 4){
        controle = 2
    }
    else{
        controle++
    }



    if(controle == 2){

        item1.setAttribute("src", "src/imgs/slid4.png")
        item2.setAttribute("src", "src/imgs/slid1.png")
        item3.setAttribute("src", "src/imgs/slid2.png")

        title1.innerHTML = "Sorvete de Café"
        title2.innerHTML = "Brigadeiro de capuccino"
        title3.innerHTML = "Pão de Mel"

        leg1.innerHTML = legSorvete
        leg2.innerHTML = legBrigadeiro  
        leg3.innerHTML = legPao
    }

    else if(controle == 3){

        item1.setAttribute("src", "src/imgs/slid3.png")
        item2.setAttribute("src", "src/imgs/slid4.png")
        item3.setAttribute("src", "src/imgs/slid1.png")

        title1.innerHTML = "Bolo de chocolate"
        title2.innerHTML = "Sorvete de Café"
        title3.innerHTML = "Brigadeiro de capuccino"

        leg1.innerHTML = legBolo
        leg2.innerHTML = legSorvete
        leg3.innerHTML = legBrigadeiro
    }

    else if(controle == 4){

        item1.setAttribute("src", "src/imgs/slid2.png")
        item2.setAttribute("src", "src/imgs/slid3.png")
        item3.setAttribute("src", "src/imgs/slid4.png")

        title1.innerHTML = "Pão de Mel"
        title2.innerHTML = "Bolo de chocolate"
        title3.innerHTML = "Sorvete de Café"

        leg1.innerHTML = legPao
        leg2.innerHTML = legBolo
        leg3.innerHTML = legSorvete
    }

    else if(controle == 1){

        item1.setAttribute("src", "src/imgs/slid1.png")
        item2.setAttribute("src", "src/imgs/slid2.png")
        item3.setAttribute("src", "src/imgs/slid3.png")

        title1.innerHTML = "Brigadeiro de capuccino"
        title2.innerHTML = "Pão de Mel"
        title3.innerHTML = "Bolo de chocolate"

        leg1.innerHTML = legBrigadeiro
        leg2.innerHTML = legPao
        leg3.innerHTML = legBolo
    }
    
    console.log("Controle: " + controle + " do avanco")

    flagBotao = 1

}

function voltaAnterior(){


    if (flagBotao == 1){
        controle--  
    }



    if (controle == 1){
        controle = 4
    }
    else if (controle == 0){
        controle = 3
    }
    else{
        controle--
    }



    if(controle == 3){

        item1.setAttribute("src", "src/imgs/slid2.png")
        item2.setAttribute("src", "src/imgs/slid3.png")
        item3.setAttribute("src", "src/imgs/slid4.png")

        title1.innerHTML = "Pão de Mel"
        title2.innerHTML = "Bolo de chocolate"
        title3.innerHTML = "Sorvete de Café"

        leg1.innerHTML = legPao
        leg2.innerHTML = legBolo
        leg3.innerHTML = legSorvete
    }

    else if(controle == 2){

        item1.setAttribute("src", "src/imgs/slid3.png")
        item2.setAttribute("src", "src/imgs/slid4.png")
        item3.setAttribute("src", "src/imgs/slid1.png")

        title1.innerHTML = "Bolo de chocolate"
        title2.innerHTML = "Sorvete de Café"
        title3.innerHTML = "Brigadeiro de capuccino"

        leg1.innerHTML = legBolo
        leg2.innerHTML = legSorvete
        leg3.innerHTML = legBrigadeiro
    }

    else if(controle == 1){

        item1.setAttribute("src", "src/imgs/slid4.png")
        item2.setAttribute("src", "src/imgs/slid1.png")
        item3.setAttribute("src", "src/imgs/slid2.png")

        title1.innerHTML = "Sorvete de Café"
        title2.innerHTML = "Brigadeiro de capuccino"
        title3.innerHTML = "Pão de Mel"

        leg1.innerHTML = legSorvete
        leg2.innerHTML = legBrigadeiro
        leg3.innerHTML = legPao
    }

    else if(controle == 4){

        item1.setAttribute("src", "src/imgs/slid1.png")
        item2.setAttribute("src", "src/imgs/slid2.png")
        item3.setAttribute("src", "src/imgs/slid3.png")

        title1.innerHTML = "Brigadeiro de capuccino"
        title2.innerHTML = "Pão de Mel"
        title3.innerHTML = "Bolo de chocolate"

        leg1.innerHTML = legBrigadeiro
        leg2.innerHTML = legPao
        leg3.innerHTML = legBolo
    }

    console.log("Controle: " + controle + " da volta")

    flagBotao = -1

}

