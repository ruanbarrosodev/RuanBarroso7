menu = document.getElementsByClassName("wrapper")[0];
btn = document.querySelector(".btn");
btn.onclick = () => {
            if(menu.style.transform == "translateX(0px)"){
                menu.style.transform = "translateX(-500px)";
            }else{
                menu.style.transform = "translateX(0px)";
    }
}