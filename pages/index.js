btn = document.getElementById('button_mobile');
menuNav = document.querySelector('.lista');


btn.onclick = function(){
    if(menuNav.style.transform=="translateX(0%)"){
        menuNav.style.transform = "translateX(-110%)";
    }else{
        menuNav.style.transform = "translateX(0%)";
    }
} 