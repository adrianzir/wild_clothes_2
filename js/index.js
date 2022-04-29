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
buttonToCloseMenu.addEventListener("click", closeMenu()); // <-------------------EVENTO

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

submit.addEventListener("click", (e)=>{  // <-------------------EVENTO
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
const ordenarProductos = [
    new Ropa("green polo",8.999),
    new Ropa("black chino pants",22.990),
    new Ropa("regular ragged jeans",32.990),
    new Ropa("printed kimono - blue shirt",18.990),
    new Ropa("t-shirt eagle print",8.999),
    new Ropa("Brown leather jacket men",65.910),
    new Ropa("shiny cat print",8.999),
    new Ropa("Cool sport jacket - orange",42.960),
    new Ropa("Yellow top women oval design",6.999),
    new Ropa("grey fashion pants",9.900),
    new Ropa("color squared coat",35.999),
    new Ropa("sweater rounded neck green",14.990),
    new Ropa("burdeo women windbreaker",25.690),
    new Ropa("blue fashion parka",38.990)
]

/*
    ----------------------------------------
    |              BUSCADOR                |
    ----------------------------------------
*/
const searchingBarContent = document.querySelector("#search__input").value;
let lense = document.getElementById("lupa");

// function buscar(e){
//     ordenarProductos.find(obj)
// };

// lense.addEventListener("click", buscar(searchingBarContent));
// indexOf !
// 

// let filtrarPorPrecio = numeros.filter(obj => 
//     {return obj.precio <= 1000});
// console.log(filtrarPorPrecio)