const productsEl = document.querySelector(".products");
const cartItemsEl = document.querySelector(".items");

function displayProducts(){
    products.forEach((product) => {
        productsEl.innerHTML +=`
        <div class="card m-auto" style="width: 18rem;">
        <img src="${product.image}" class="card-img-top" alt="sneaker">
        <div class="card-body">
            <h5 class="card-title">Name: ${product.productName}</h5>
            <p class="card-text">Instock: ${product.instock}</p>
            <p class="card-text"><small class="text-muted">Price: R${product.price}</small></p>
            <a href="#" class="btn btn-primary" id="addToCart" onclick="addToCart(${product.id})">Add</a>

        </div>
    </div>`;

    });
}

let cart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();

function addToCart(id){
    if(cart.some((item) => item.id === id)){
        alert("Product already added")
    }else{
        const item = products.find((product) => product.id === id);
        {
            alert("Product added")
        }
         cart.push({
            ...item,
            quantity:1,
           
         });
         console.log(cart);
         localStorage.setItem("CART", JSON.stringify(cart));
    }

    updateCart();
}

function updateCart(){
    cartItems();
}

function cartItems(){
    cartItemsEl.innerHTML = '';
    cart.forEach((item) =>{
        cartItemsEl.innerHTML +=`
        <div class="cart-item">
        <div class="item-info">
            <img src="${item.image}" alt="${item.productName}">
            <h4>${item.productName}</h4>
        </div>
        <div class="unit-price">
            <small>R</small>${item.price}
        </div>
        <div class="units">
            <div class="btn-minus" onclick="changeInQuantity('minus', ${item.id})">-</div>
            <div class="number">${item.quantity}</div>
            <div class="btn-plus" onclick="changeInQuantity('plus', ${item.id})">+</div>
        </div>
    </div>
        `;
    });
}

function changeInQuantity(action,id) {
   cart = cart.map((item)=>{
       let quantity = item.quantity

    if(item.id === id) {
        if(action === "minus" && quantity > 1){
            quantity--;
        }else{
            if(action === 'plus' && quantity < item.instock){
                quantity++;
            }
        }

    }
        return {
            ... item,
            quantity: quantity
        };
    });

    updateCart();
}

displayProducts();