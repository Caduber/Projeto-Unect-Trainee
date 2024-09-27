function exibeMenuMobile(){
    document.getElementById("mobile-menu-extended").style.display = "flex"
    document.getElementById("i-menu").style.display = "none"
    document.getElementById("i-fecha").style.display = "inline-block"
    document.getElementById("navbar").style.position = "fixed"
}

function fechaMenuMobile(){
    document.getElementById("mobile-menu-extended").style.display = "none"
    document.getElementById("i-menu").style.display = "inline-block"
    document.getElementById("i-fecha").style.display = "none"
    document.getElementById("navbar").style.position = "absolute"
}


//=========================CAFETERIA==========================

controlemobile = 1

function avancaProxMobile(){
    controlemobile++

    if(controlemobile == 5){
        controlemobile = 1
    }
    

    if(controlemobile == 1){
        item1.setAttribute("src", "./src/imgs/slid1.png")
        title1.innerHTML = "Brigadeiro de Capuccino"
        leg1.innerHTML = legBrigadeiro
    }
    else if (controlemobile == 2){
        item1.setAttribute("src", "./src/imgs/slid2.png")
        title1.innerHTML = "Pão de mel"
        leg1.innerHTML = legPao
    }
    else if (controlemobile == 3){
        item1.setAttribute("src", "./src/imgs/slid3.png")
        title1.innerHTML = "Bolo de chocolate"
        leg1.innerHTML = legBolo
    }
    else if (controlemobile == 4){
        item1.setAttribute("src", "src/imgs/slid4.png")
        title1.innerHTML = "Sorvete de Café"
        leg1.innerHTML = legSorvete
    }

}

function voltaAntMobile(){
    controlemobile--

    if(controlemobile == 0){
        controlemobile = 4
    }

    if(controlemobile == 1){
        item1.setAttribute("src", "src/imgs/slid1.png")
        title1.innerHTML = "Brigadeiro de Capuccino"
        leg1.innerHTML = legBrigadeiro
    }
    else if (controlemobile == 2){
        item1.setAttribute("src", "src/imgs/slid2.png")
        title1.innerHTML = "Pão de mel"
        leg1.innerHTML = legPao
    }
    else if (controlemobile == 3){
        item1.setAttribute("src", "src/imgs/slid3.png")
        title1.innerHTML = "Bolo de chocolate"
        leg1.innerHTML = legBolo
    }
    else if (controlemobile == 4){
        item1.setAttribute("src", "src/imgs/slid4.png")
        title1.innerHTML = "Sorvete de Café"
        leg1.innerHTML = legSorvete
    }

}
