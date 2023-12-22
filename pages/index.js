btn = document.getElementById('button_mobile');
menuNav = document.querySelector('.lista');

btnSwitchColor = document.getElementById('modoEscuro');
btnSwitchColorMobile = document.getElementById('modoEscuroMobile');
const root = document.documentElement;


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

switchTheme = function(){
    if (root.style.getPropertyValue('--cor-fundo') === '' || root.style.getPropertyValue('--cor-fundo') === '#ffffff') {
        //ativar modo escuro
        root.style.setProperty('--cor-fundo', '#0a0a0a');
        root.style.setProperty('--cor-texto', '#fefefe');
        root.style.setProperty('--cor-textoTitulo', '##f8f8f2');
        root.style.setProperty('--cor-textoTituloOpaco', '#ffffff');
        btnSwitchColor.children[0].src = "../assets/icons/sun.svg";
        btnSwitchColorMobile.children[0].src = "../assets/icons/sun.svg";
    } else {
        //ativar modo claro
        root.style.setProperty('--cor-fundo', '#ffffff');
        root.style.setProperty('--cor-texto', '#ffffff');
        root.style.setProperty('--cor-textoTitulo', 'rgb(15, 15, 15)');
        root.style.setProperty('--cor-textoTituloOpaco', 'rgb(61, 61, 61)');
        btnSwitchColor.children[0].src = "../assets/icons/moon.svg";
        btnSwitchColorMobile.children[0].src = "../assets/icons/moon.svg";
    }
}

btnSwitchColor.addEventListener("click", switchTheme);
btnSwitchColorMobile.addEventListener("click", switchTheme);

/* document.addEventListener('DOMContentLoaded', function () {
    var containerForm = document.getElementById('contact'); 
    if (containerForm) {
        containerForm.innerHTML = `
            <h1>Contato</h1>
            <div class="form-contact">
                <form name="contact" method="POST" data-netlify=true>
                    <div class="form-input">
                        <label>Seu nome</label>
                        <input type="text" id="name" name="name" placeholder="Seu nome">
                    </div>
                    <div class="form-input">
                        <label>Email</label>
                        <input type="text" id="email" name="email" placeholder="Email">
                    </div>
                    <div class="form-input">
                        <label>Assunto</label>
                        <input type="text" id="subject" name="subject" placeholder="Assunto">
                    </div>
                    <div class="form-input">
                        <label>Descrição</label>
                        <textarea rows="7" id="describe" name="describe" placeholder="Escreva a descrição aqui!"></textarea>
                    </div>
                    <div class="form-input">
                        <input type="submit" name="Enviar"  value="Enviar email!">
                    </div>
                </form>
            </div>
        `;    
    }
    
}); */