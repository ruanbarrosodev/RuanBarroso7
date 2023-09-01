    btn = document.getElementById('button_mobile');
    menuNav = document.querySelector('.lista');
    header = document.querySelector('.header');
    isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    blocoCarta = document.querySelectorAll(".bloco-carta");
    boxPergunta = document.querySelectorAll(".pergunta-box");
    boxResposta = document.querySelectorAll(".resposta-box");

    blocoCarta.forEach( 
        function(bloco, index, listObj) { 
            bloco.onclick = function(){     
                bloco.childNodes[1].classList.toggle("rotate");
            }
        }
    );

    boxPergunta.forEach(
        function(elemento, index, listObj){
            elemento.onclick = function(){
                if(boxResposta[index].style.display=="none"){
                    boxResposta[index].style.display = "block";
                }else{
                    boxResposta[index].style.display = "none";
                }
            }
        }
    );

    setInterval(function(){
        if(header.style.backgroundImage=='url("img/header1.png")'){
            header.style.backgroundImage = 'url("img/header.png")';
        }else if(header.style.backgroundImage=='url("img/header.png")'){
            header.style.backgroundImage = 'url("img/header2.png")';
        }else if(header.style.backgroundImage==''){
            header.style.backgroundImage = 'url("img/header.png")';
        }else{
            header.style.backgroundImage = 'url("img/header1.png")';
        }
    },10000);

    btn.onclick = function(){
        if(menuNav.style.transform=="translateX(0%)"){
            menuNav.style.transform = "translateX(-110%)";
        }else{
            menuNav.style.transform = "translateX(0%)";
        }
    }

    if (isMobile) {
        menuNav.onclick = function(){
            menuNav.style.transform = "translateX(-110%)";
        }
    }