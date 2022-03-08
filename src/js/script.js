////////////////////////////menu//////////////////////////////
const menu = document.querySelector(".header-items__menu");
const shopping = document.querySelector(".header-items__shopping");
const header = document.querySelector(".header");
const navegacion = document.querySelector(".header-navegacion");
const logos = document.querySelector(".header-items");

menu.addEventListener("click", () => {
    menu.classList.toggle("active");
    navegacion.classList.toggle("active");
    shopping.classList.toggle("active");
    logos.classList.toggle("active");
    if (navegacion.classList.contains("active")) {
        navegacion.style.background = "#000";
        header.style.background = "#000";
    } else {
        navegacion.style.background = "#1d1d1f";
        header.style.background = "#1d1d1f";
    }
});

header.addEventListener('click', (e)=>{
    if(e.target && e.target.tagName === "A"){
        navegacion.classList.remove('active');
        menu.classList.remove("active");
        shopping.classList.remove("active");
        navegacion.style.background = "#1d1d1f";
        header.style.background = "#1d1d1f";
        logos.classList.remove("active");
    }
})
const buscador = document.querySelector(".header-buscador__input");
const button = document.querySelector(".header-buscador__button");

buscador.addEventListener("click", () => {
    button.classList.toggle("active");
    navegacion.classList.toggle("encajar");
});
button.addEventListener("click", () => {
    button.classList.remove("active");
    navegacion.classList.remove("encajar");
});

/////////////////////////// filtro /////////////////////////////////
const filtracion = document.querySelector(".intro-filtracion");
const transparencia = document.querySelector(".transparencia");
const resetBtn = document.querySelectorAll(
    ".transparencia-iconos__button--fondo"
);

/// info filter
const item = document.querySelectorAll(".item-contenedor");

const li = document.querySelectorAll(".intro-filtracion__item");

let control = 0;
const titulo_texto = document.querySelector('.inner');
const titulo_dos = document.querySelector('.inner_dos');

filtracion.addEventListener("click", (e) => {
    filtracion.classList.toggle("espandir");
    if (e.target && e.target.tagName === "H3") {
        if (e.target.classList.contains("intro-filtracion__filtrar")) {
            transparencia.classList.toggle("active");
        }
    }
    if (e.target && e.target.tagName === "I") {
        if (e.target.classList.contains("intro-filtracion__filter")) {
            transparencia.classList.toggle("active");
        }
    }
    if (e.target && e.target.tagName === "I") {
        if (e.target.classList.contains("transparencia-iconos__close")) {
            transparencia.classList.remove("active");
        }
    }
    if (e.target && e.target.tagName === "LI") {
        if (e.target.classList.contains("intro-filtracion__item")) {
            e.target.classList.toggle("active");
            filtracion.classList.add("espandir")
            if (e.target.classList.contains("active")) {
                control++;
            } else {
                control--;
            }
            resetBtn.forEach((boton) => {
                if (control > 0) {
                    titulo_texto.innerHTML = "(" + control + ")";
                    titulo_dos.innerHTML = "(" + control + ")";
                    boton.classList.add("active");
                } else {
                    titulo_texto.innerHTML = "";
                    titulo_texto.innerHTML = "";
                    boton.classList.remove("active");
                }
            });
        }
    }
    if (e.target && e.target.tagName === "BUTTON") {
        if (e.target.classList.contains("transparencia-iconos__button--fondo")) {
            e.target.classList.remove("active");
            transparencia.classList.add("active");
            titulo_texto.innerHTML = "";
            control = 0;
            li.forEach((link) => {
                link.classList.remove("active");
            });
        }
    }
    if (e.target && e.target.tagName === "BUTTON") {
        if (e.target.classList.contains("transparencia-iconos__button")) {
            transparencia.classList.remove("active");
            filtracion.classList.add("espandir");
        }
    }
});
//////////////////////////item contenedor ////////////////////////

item.forEach((elemento) => {
    elemento.addEventListener("click", () => {
        elemento.classList.toggle("active");
    });
});

////////////////////////funcion de animacion /////////////////////
const animacion = document.querySelector(".intro-animacion");

let segundo = 0;

const controlDeAnimacion = () => {
    if (segundo <= 1) {
        animacion.style.background = "#f5f5f7";
        animacion.style.color = "#424245";
        animacion.classList.add('active');
    }
};

setInterval(() => {
    controlDeAnimacion();
    segundo++;
}, 3000);

//////////////////// toogle de iconos heart/////////////////////

const icono = document.querySelector(".main");



const fun = () => {
    icono.addEventListener("click", (e) => {
        if (e.target && e.target.tagName === "SPAN") {
            e.target.classList.toggle("active");
        }
    });
};
fun();

/////////////////////////// toogle footer /////////////////////////
const footer__ul = document.querySelectorAll(".footer-center__ul");

footer__ul.forEach((ul) => {
    ul.addEventListener("click", () => {
        ul.classList.toggle("active");
    });
});
///////////////////////////toogle intro title ///////////////////
const titulo = document.querySelector(".intro-encabezado__i");
const intro_title = document.querySelector(".intro-title");
const intro_a = document.querySelectorAll(".intro-parrafos__a");

titulo.addEventListener("click", () => {
    intro_title.classList.toggle("active");
});
intro_a.forEach((item) =>{
    item.addEventListener('click', ()=>{
        intro_title.classList.remove("active");
    })
})

