btn = document.getElementById('button_mobile');
menuNav = document.querySelector('.lista');

barras = document.querySelectorAll(".bar");
thanos = document.getElementsByClassName("thanos")[0];
options = document.getElementById("options");
realValues = ["65%","50%","15%","40%","50%","90%","50%","95%","90%","80%","30%","50%","15%","90%","80%","15%","58%"];

btn.onclick = function(){
    if(menuNav.style.transform=="translateX(0%)"){
        menuNav.style.transform = "translateX(-110%)";
    }else{
        menuNav.style.transform = "translateX(0%)";
    }
}   
options.children[1].onclick = function(){
    thanos.style.display = "flex";
    options.children[1].style.backgroundColor = "rgb(130, 240, 130)";
    options.children[0].style.backgroundColor = "rgb(241, 47, 47)";
    valoresReais();
}
options.children[0].onclick = function(){
    thanos.style.display = "none";
    options.children[0].style.backgroundColor = "rgb(130, 240, 130)";
    options.children[1].style.backgroundColor = "rgb(241, 47, 47)";
    valoresFalsos();
}
valoresReais = () => {
    barras.forEach((element,index) => {
        element.children[0].style.width = realValues[index];
        element.children[0].innerHTML = realValues[index];
    });
}
valoresFalsos = () => {
    barras.forEach((element,index) => {
        element.children[0].style.width = "100%";
        element.children[0].innerHTML = "100%";
    });
}
