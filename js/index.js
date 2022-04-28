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
const ordenarProductos = []

const producto1 = new Ropa("green polo",8.999);
const producto2 = new Ropa("black chino pants",22.990);
const producto3 = new Ropa("regular ragged jeans",32.990);
const producto4 = new Ropa("printed kimono - blue shirt",18.990);
const producto5 = new Ropa("t-shirt eagle print",8.999);
const producto6 = new Ropa("Brown leather jacket men",65.910);
const producto7 = new Ropa("shiny cat print",8.999);
const producto8 = new Ropa("Cool sport jacket - orange",42.960);
const producto9 = new Ropa("Yellow top women oval design",6.999);
const producto10 = new Ropa("grey fashion pants",9.900);
const producto11 = new Ropa("color squared coat",35.999);
const producto12 = new Ropa("sweater rounded neck green",14.990);
const producto13 = new Ropa("burdeo women windbreaker",25.690);
const producto14 = new Ropa("blue fashion parka",38.990);

/*
    ----------------------------------------
    |              BUSCADOR                |
    ----------------------------------------
*/

// let buscar = numeros.find(obj => {
//     return obj.nombre == search
// });

// let filtrarPorPrecio = numeros.filter(obj => 
//     {return obj.precio <= 1000});
// console.log(filtrarPorPrecio)