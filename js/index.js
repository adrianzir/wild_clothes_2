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
    if(email.value === "" || null){
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

class usersStorage{
    constructor(userNamE, userEmaiL){
        this.userNamE = userNamE;
        this.userEmaiL = userEmaiL;
    }
}

submit.addEventListener("click", (e)=>{ 
    e.preventDefault();
    nameValidation();
    emailValidation();
    let userToStorage = new usersStorage(nombre.value,email.value)
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
const searchingBar = document.querySelector("#search__input");
const searchingBarDad = document.querySelector(".search__input__dad")
function mostrarLista(e){
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
// lense.addEventListener("click",);
// // indexOf 
// // 
/*
    ----------------------------------------
    |              FILTROS                 |
    ----------------------------------------
*/
// let filtrarPorPrecio = numeros.filter(obj => 
//     {return obj.precio <= 1000});
// console.log(filtrarPorPrecio)

/*
    ---------------------------------------
    |     DROP DOWN OPTIONS IN CLOTHES    |
    ---------------------------------------
*/
let nodoClothes = document.querySelector(".clothes__module");

let nodoClothesOptions = document.createElement("ul");

let nodoClothesOption1 = document.createElement("li");
let nodoClothesOption2 = document.createElement("li");

let nodoLinkOption1 = document.createElement("a");
let nodoLinkOption2 = document.createElement("a");

nodoLinkOption1.setAttribute("href","../html pages/gentlemanclo.html");
nodoLinkOption2.setAttribute("href","../html pages/ladysclo.html");

nodoClothesOption1.appendChild(nodoLinkOption1);
nodoClothesOption2.appendChild(nodoLinkOption2);

let textNodeMen = document.createTextNode("Men");
let textNodeWomen = document.createTextNode("Women");

nodoLinkOption1.appendChild(textNodeMen);
nodoLinkOption2.appendChild(textNodeWomen);

nodoClothesOptions.appendChild(nodoClothesOption1);
nodoClothesOptions.appendChild(nodoClothesOption2);
nodoClothesOptions.classList.add("clothes__module-open");

// event listenner to make work the drop down list 
nodoClothes.addEventListener("mouseenter",() =>{
    nodoClothes.appendChild(nodoClothesOptions);
});
nodoClothes.addEventListener("mouseleave", ()=>{
    nodoClothes.removeChild(nodoClothesOptions);
});

/*
    ---------------------------------------
    |         MAKING THE CART             |
    ---------------------------------------
*/
//variables
const cartIcon = document.querySelector(".cart__open");
const cartSideBar = document.querySelector(".cart__sidebar");
const closeSideBar = document.querySelector(".close__sidebar");
const addToCart = document.querySelectorAll(".add-to-cart");
const productsContainer = document.querySelector(".clothes_division");
// abrir carrito
cartIcon.addEventListener("click",(e)=>{    
    e.preventDefault();
    cartSideBar.classList.add("cart__openned");
})
//cerrar carrito
closeSideBar.addEventListener("click", ()=>{
    cartSideBar.classList.remove("cart__openned");
})
//asignarle a cada boton su funcion 
for (i = 0; i < addToCart.length; i++) {
    let button = addToCart[i];
    button.addEventListener("click",agregarAlCarrito());   
}
function agregarAlCarrito(e){
    let button = e.target;
    let cartItem = button.parentElement;
    let productId = cartItem.getAttribute("id");
    let productNam = cartItem.querySelector("p>a").innerText;
    let productPric = cartItem.querySelector("span").innerText;
    let productImgSrc = cartItem.querySelector(".pic-1").src;

    addElements(productId,productNam,productPric,productImgSrc);
}
function addElements(productId,productNam,productPric,productImgSrc){
    let productRow = document.createElement("tr");
    let productRows = document.querySelector(".cart__sidebar__table");
    let productArray = document.querySelectorAll("product-on-cart");
    
    for(let i =0; i < productArray.length; i++){
        if(productArray[i].getAttribute("id") == productId){
            alert("this product is already in the cart");
        }
    }
    // creo la row de los productos
    let productItemRow = `
    <tr class="product-on-cart">
    <img class="cart-img" src="${productImgSrc}"></img>
    <td>${productNam}</td>
    <td>${productPric}</td>
    <input class="product-qty" type="number" value="1">
    <button class="remove-btn">Remove</button>
    </tr>
    `
    productRow.innerHTML = productItemRow;
    productRows.append(productRow);
    
}
    
/*
    ---------------------------------------
    |             adding fetch            |
    ---------------------------------------
*/
// const nodoButtonToFilter = document.querySelector(".btn__filter-type");
// const nodoUlOfFilters = document.querySelector(".product__type");

//  function triggerFetch() {
//      fetch("data.json")
//      .then(result => result.json())
//      .then(result => {
//          let datos = JSON.parse(result);
//          datos.forEach(user => {
//              nodoUlOfFilters.innerHTML += 
//              `<li></li>`
//          })
//      })
//  
