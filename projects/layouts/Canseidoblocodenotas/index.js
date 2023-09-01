btnMenu = document.querySelector(".menu");
navegacaoMenu = document.getElementsByClassName("navegacao")[0];
btnMenu.onclick = () => {
    if(navegacaoMenu.style.transform=="translateX(0px)"){
        navegacaoMenu.style.transform = "translateX(-100%)";
    }else{
        navegacaoMenu.style.transform = "translateX(0px)";
    }
}
/* 
botoes = document.querySelectorAll(".navegacao a");
botoes[0].onclick = () => {
    navegacaoMenu.style.transform = "translateX(-100%)";
}
botoes[1].onclick = () => {
    navegacaoMenu.style.transform = "translateX(-100%)";
}
botoes[2].onclick = () => {
    navegacaoMenu.style.transform = "translateX(-100%)";
}
botoes[3].onclick = () => {
    navegacaoMenu.style.transform = "translateX(-100%)";
} 
for(var i=0;i<botoes.length;i++){
    botoes[i].onclick = function(){
        navegacaoMenu.style.transform = "translateX(-100%)";
         console.log(botoes[i]);
        console.log(botoes); 
    }
}*/