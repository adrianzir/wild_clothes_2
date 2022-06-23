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
    ========================================
    |      FUNCIONES PARA EL FORMULARIO    |
    ========================================
*/

function nameValidation(){
    nombre.addEventListener("input", ()=>{
        if(nombre.value === ""){
            nombre.classList.toggle("emptyInput");
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Este campo debe ser llenado'
                })
        }else{
            nombre.classList.toggle("inputAccepted");
        }
    })
}
function emailValidation(){
    email.addEventListener("input", ()=>{
    if(email.value === ""){
        email.classList.toggle("emptyInput");
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El campo email debe ser llenado'
            })
    }else {
        email.classList.toggle("inputAccepted");
    }
})
}
// array y constructor para almacenar usuarios suscritos al newsletter
let usersList = []

class UsersStorage{
    constructor(userNamE, userEmaiL){
        this.userNamE = userNamE;
        this.userEmaiL = userEmaiL;
    }
}

submit.addEventListener("click", (e)=>{ 
    e.preventDefault();
    nameValidation();
    emailValidation();
    let userToStorage = new UsersStorage(nombre.value,email.value)
    usersList.push(userToStorage);
    localStorage.setItem("newuser", JSON.stringify(usersList));

    if(nombre.value && email.value != ""){
        Swal.fire(`Bienvenido! ${nombre.value}, ahora recibiras notificaciones de nuestras actualizaciones, ofertas, productos y demas, al correo: ${email.value}`)
    }else{
        Swal.fire(`Los campos están vacios!`)
    }
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
// traigo los productos del DOM
const producto1 = document.querySelector("#product-1");
const producto2 = document.querySelector("#product-2");
const producto3 = document.querySelector("#product-3");
const producto4 = document.querySelector("#product-4");
const producto5 = document.querySelector("#product-5");
const producto6 = document.querySelector("#product-6");
const producto7 = document.querySelector("#product-7");
const producto8 = document.querySelector("#orange-j");
const producto9 = document.querySelector("#product-9");
const producto10 = document.querySelector("#product-10");
const producto11 = document.querySelector("#product-11");
const producto12 = document.querySelector("#green_sweater");
const producto13 = document.querySelector("#product-13");
const producto14 = document.querySelector("#product-14");

const products = [
    producto1 , 
    producto2 , 
    producto3 , 
    producto4 , 
    producto5 , 
    producto6 , 
    producto7 , 
    producto8, 
    producto9 , 
    producto10, 
    producto11 , 
    producto12, 
    producto13 , 
    producto14 
 ]
const productos2 = []
//creo la lista de productos a buscar
const searchingBar = document.querySelector(".search__input");
const searchingBarDad = document.querySelector(".search__input__dad");
const iconSearch = document.querySelector('.icon-search');
function mostrarLista(){
    const nodoUL = document.createElement("ul");
    searchingBarDad.appendChild(nodoUL);
    const nodoLi = document.createElement("li");
    nodoUL.classList.add("searching__list");

    for(const product of ordenarProductos){
        const nodoLi = document.createElement("li");
        nodoUL.appendChild(nodoLi);
        const nodoTexto = document.createTextNode(product.productName);
        nodoLi.appendChild(nodoTexto);
    }
    nodoUL.appendChild(nodoLi);
    iconSearch.addEventListener("click", () => {
      searchingBarDad.removeChild(nodoUL);
    });
}
searchingBar.addEventListener("click",mostrarLista);


/*             
    ----------------------------------------
    |      BARRA DE BUSCAR Y FUNCTION      |
    ----------------------------------------
*/
// let lense = document.getElementById("lupa");
const nodoNav2 = document.querySelector(".nav__2");
const nodoBtnSearch = document.querySelector(".nav__button-search");

nodoBtnSearch.addEventListener("click", () => {
    nodoNav2.classList.toggle("open__bar");
} );


