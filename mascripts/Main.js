
const productsEl = document.querySelector(".products");
console.log("After selecting productsEl:", productsEl);

const cartItemsEl = document.querySelector(".cart-items");

function displayProducts(){
    products.forEach ((product) => {
        productsEl.innerHTML += `
        <div class="card m-auto" style="width: 18rem;">
                <img src="${product.image}" class="card-img-top" alt="sneaker">
                <div class="card-body">
                    <h5 class="card-title">Name: ${product.productName}</h5>
                    <p class="card-text">Instock: ${product.instock}</p>
                    <p class="card-text"><small class="text-muted">Price: R${product.price}</small></p>
                    <a href="#" class="btn btn-primary" id="check" onclick="addToCart(${product.id})">Add</a>
                </div>
            </div>`
        
});
}

displayProducts();

let cart = [];

function addToCart(id){
    console.log("Adding to cart:", id);
    if(cart.some((item) => item.id === id)){
        alert("product already added")
    } else{
        const item =  products.find(product => product.id === id);

        cart.push({
            ...item,
            quantity: 1,
        });
    }

 updateCart();
}

function cartItems(){
    console.log("cartItemsEl:", cartItemsEl);
    cartItemsEl.innerHTML = "Cart is empty";
    cart.forEach((item) =>{
        cartItemsEl.innerHTML += `
        <div class="cart-item">
        <div class="item-info">
            <img src="${item.image}" alt="${item.productName}">
            <h4>${item.productName}</h4>
        </div>
        <div class="unit-price">
            <small>R</small>${item.price}
        </div>
        <div class="units">
            <div class="btn-minus">-</div>
            <div class="number">${item.quantity}</div>
            <div class="btn-plus">+</div>
        </div>
    </div>`
        
    });
}

function updateCart(){
    cartItems();
}