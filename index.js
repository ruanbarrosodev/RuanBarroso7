btn = document.getElementById('button_mobile');
menuNav = document.querySelector('.lista');

barras = document.querySelectorAll(".bar");
thanos = document.getElementsByClassName("thanos")[0];
options = document.getElementById("options");
realValues = ["65%","50%","15%","40%","50%","90%","50%","95%","90%","80%","30%","50%","15%","90%","80%","15%","58%"];

btnSwitchColor = document.getElementById('modoEscuro');
btnSwitchColorMobile = document.getElementById('modoEscuroMobile');
const root = document.documentElement;

icons = document.querySelectorAll(".iconN");


listNav = document.querySelectorAll(".lista li");
if (window.innerWidth < 800) {
    listNav.forEach((liElement) => { 
        liElement.onclick = function(){
            menuNav.style.transform = "translateX(-110%)";
        }
    });
}   

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
    
    switchTheme = function(){
        if (root.style.getPropertyValue('--cor-fundo') === '' || root.style.getPropertyValue('--cor-fundo') === '#ffffff') {
            //ativar modo escuro
            root.style.setProperty('--cor-fundo', '#0a0a0a');
            root.style.setProperty('--cor-texto', '#fefefe');
            root.style.setProperty('--cor-textoTitulo', '##f8f8f2');
            root.style.setProperty('--cor-textoTituloOpaco', '#ffffff');
            btnSwitchColor.children[0].src = "assets/icons/sun.svg";
            btnSwitchColorMobile.children[0].src = "assets/icons/sun.svg";
            icons.forEach(element => {
                element.style.filter = "invert(100%) sepia(0%) saturate(7491%) hue-rotate(118deg) brightness(105%) contrast(99%)";
            });
        } else {
            //ativar modo claro
            root.style.setProperty('--cor-fundo', '#ffffff');
            root.style.setProperty('--cor-texto', '#ffffff');
            root.style.setProperty('--cor-textoTitulo', 'rgb(15, 15, 15)');
            root.style.setProperty('--cor-textoTituloOpaco', 'rgb(61, 61, 61)');
            btnSwitchColor.children[0].src = "assets/icons/moon.svg";
            btnSwitchColorMobile.children[0].src = "assets/icons/moon.svg";
            icons.forEach(element => {
                element.style.filter = "";
            });
        }
    } 

    btnSwitchColor.addEventListener("click", switchTheme);
    btnSwitchColorMobile.addEventListener("click", switchTheme);
    

    /* document.addEventListener('DOMContentLoaded', function () {
    var containerForm = document.getElementById('contact'); 
    if (containerForm) {
        fetch('./components/contact.html')
            .then(response => response.text())
            .then(htmlContent => {
                containerForm.innerHTML = htmlContent;
            })
            .catch(error => {
                console.error('Erro ao carregar o arquivo HTML:', error);
            });
        }
    }); */
    