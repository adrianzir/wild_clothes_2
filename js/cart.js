/*
    ---------------------------------------
    |         MAKING THE CART             |
    ---------------------------------------
*/
//
//
//
//
// variables
const productsContainer = document.querySelector(".clothes_division");
let totalCost = document.querySelector('.total-cost');
let productsDiv = document.querySelector('.products-container');
let counterProduct = document.querySelector(".fa-cart-plus");
let totalCount = 0;
let productCount = 0;
let buyStuff = [];

loadEventListener();
function loadEventListener(){
    productsContainer.addEventListener("click", addProduct)
    productsDiv.addEventListener("click",deleteProduct);
}
function addToCounter() {
    let prodQty = buyStuff.length;
    return prodQty
}
function restToCounter(){
     let prodQty = buyStuff.length - 1;
     return prodQty;
}
function addProduct(e){
    if(e.target.classList.contains('add-to-cart')){
        let selectProduct = e.target.parentElement.parentElement;
        getTheContent(selectProduct);
    }
    counterProduct.setAttribute("data-content", addToCounter());
};
function deleteProduct(e){
    
    if (e.target.classList.contains("delete-item")) {
      let deleteId = e.target.getAttribute('data-id');
      
       buyStuff.forEach(value => {
         if (value.id === deleteId ) {
           let reducePrice = 0 ;
           reducePrice =  parseInt(value.price) * parseInt(value.amount);
           totalCount = totalCount - reducePrice;
        //    console.log(reducePrice);
         }
       }); 
        counterProduct.setAttribute("data-content", restToCounter());
        buyStuff = buyStuff.filter(product => product.id !== deleteId);
    }
    
    loadHtml();
}
function getTheContent(product){
    let infoProduct = {
        image : product.querySelector('img').src,
        title : product.querySelector('div p a').textContent,
        price : product.querySelector('div span').textContent,
        id: product.getAttribute('id'),
        amount : 1
    }
        // suma de los precios de productos en el carrito
        totalCount = parseInt(totalCount) + parseInt(infoProduct.price);
        // console.log( totalCount);

        const exist = buyStuff.some(product => product.id === infoProduct.id);
        if(exist){
            let prod = buyStuff.map(product =>{
                if(product.id === infoProduct.id){
                    product.amount++;
                    return product;
                }else{
                    return product;
                }
            });
            buyStuff = [...prod]
        }else{
            buyStuff = [...buyStuff, infoProduct];
        }

   
    loadHtml();
    // console.log(infoProduct)
};

function loadHtml(){
    clearHtml();
    buyStuff.forEach(product =>{
        const {image,title,price,id,amount} = product;
        const row = document.createElement('div');
        row.classList.add('product-row');
        row.innerHTML = `
            <img src="${image}" alt="pic">
            <div class="item-description">
                <h5>${title}</h5>
                <h5 class="item-price">$${price}</h5>
                <h4 class="item-amount">Qty: ${amount}</h4>
            </div>
            <span class="delete-item" data-id="${id}">X</span>
        `;
        productsDiv.appendChild(row);
    })
    totalCost.innerHTML = totalCount;
}
function clearHtml(){
    productsDiv.innerHTML = '';
}










// //asignarle a cada boton su funcion
// for (i = 0; i < addToCart.length; i++) {
//   const button = addToCart[i];
//   button.addEventListener("click", agregarAlCarrito());
// }

// function agregarAlCarrito(e) {
//   e.target;
//   let cartItem = button.parentElement;
//   let productId = cartItem.getAttribute("id");
//   let productNam = cartItem.querySelector("p >a").innerText;
//   let productPric = cartItem.querySelector("span").innerText;
//   let productImgSrc = cartItem.querySelector(".pic-1").src;

//   addElements(productId, productNam, productPric, productImgSrc);
// }
// function addElements(productId, productNam, productPric, productImgSrc) {
//   let productRow = document.createElement("tr");
//   let productRows = document.querySelector(".cart__sidebar__table");
//   let productArray = document.querySelectorAll("product-on-cart");

//   for (let i = 0; i < productArray.length; i++) {
//     if (productArray[i].getAttribute("id") == productId) {
//       alert("this product is already in the cart");
//     }
//   }
//   // creo la row de los productos
//   let productItemRow = `
//     <tr class="product-on-cart">
//     <img class="cart-img" src="${productImgSrc}"></img>
//     <td>${productNam}</td>
//     <td>${productPric}</td>
//     <input class="product-qty" type="number" value="1">
//     <button class="remove-btn">Remove</button>
//     </tr>
//     `;
//   productRow.innerHTML = productItemRow;
//   productRows.append(productRow);
// }
