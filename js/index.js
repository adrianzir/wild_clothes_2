/*
       VARIABLES
*/
const burgerState = document.querySelector(".div__collapse");
const burger = document.querySelector(".burger");
const nav = document.querySelector(".nav");
//  CREO LA X PARA CERRAR EL MENU     
const buttonToCloseMenu = document.createElement("span");
buttonToCloseMenu.classList.add("spanStyles");
buttonToCloseMenu.innerHTML = "X";

/*
       FUNCIONES PARA EL BOTON DE LA HAMBURGUESA DEL NAV
*/
function openMenu() {
    burgerState.classList.toggle( "collapse__ul-shutted");
    burger.classList.toggle("shut-burger");
    // nav.appendChild(buttonToCloseMenu);
}
burger.addEventListener("click", openMenu);

function closeMenu(){
    burgerState.classList.toggle("collapse__ul-shutted");
    burger.classList.toggle("shut-burger");
}
buttonToCloseMenu.addEventListener("click", closeMenu());

/*
    ----------------------------------------
    |      VARIABLES PARA EL FORMULARIO    |
    ----------------------------------------
*/
const nombre =  document.querySelector(".name");
const email = document.querySelector(".email");
const age = document.querySelector(".age");
const submit = document.querySelector("#send");
/*
    ----------------------------------------
    |      FUNCIONES PARA EL FORMULARIO    |
    ----------------------------------------
*/
function nameValidation(){
    nombre.addEventListener("input", ()=>{
    if(nombre.value == ""){
        nombre.classList("emptyInput");
    }else {
        nombre.classList ="inputaccepted";
    }
})
}

submit.addEventListener("click", (e)=>{
    e.preventDefault();
    nameValidation();
    alert(`bienvenido ${nombre.value}, ahora recibiras notificaciones de nuestras actualizaciones, ofertas, productos y demas, al correo: ${email.value}`)
})
/*
    ----------------------------------------
    |  VARIABLES PARA LOS OBJETOS/CLOTHES  |
    ----------------------------------------
*/
class Ropa{
    constructor(productName, productPrice, qty){
        this.productName = productName;
        this.productPrice = productPrice;
        this.qty = qty;
    }
}

// const producto1 = new Ropa();
// const producto2 = new Ropa();
// const producto3 = new Ropa();
// const producto4 = new Ropa();
// const producto5 = new Ropa();
// const producto6 = new Ropa();
// const producto7 = new Ropa();
// const producto8 = new Ropa();
// const producto9 = new Ropa();
// const producto10 = new Ropa();
// const producto11 = new Ropa();
// const producto12 = new Ropa();
// const producto13 = new Ropa();
// const producto14 = new Ropa();