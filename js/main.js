/*
       MENU HAMBURGUESA
*/
// VARIABLES
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
  burgerState.classList.toggle("collapse__ul-shutted");
  burger.classList.toggle("shut-burger");
  // nav.appendChild(buttonToCloseMenu);
}
burger.addEventListener("click", openMenu);

function closeMenu() {
  burgerState.classList.toggle("collapse__ul-shutted");
  burger.classList.toggle("shut-burger");
}
buttonToCloseMenu.addEventListener("click", closeMenu()); // <-------------------EVENTO

// carrito detalle

//variables
const cartIcon = document.querySelector(".cart__open");
const cartSideBar = document.querySelector(".cart__sidebar");
const closeSideBar = document.querySelector(".close__sidebar");


// abrir carrito
cartIcon.addEventListener("click", (e) => {
  e.preventDefault();
  cartSideBar.classList.add("cart__openned");
});
//cerrar carrito
closeSideBar.addEventListener("click", () => {
  cartSideBar.classList.remove("cart__openned");
});
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


