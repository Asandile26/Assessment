
window.onload = function() {
const sneakersEl = document.querySelector('#products');

    function displayProduct() {
        products.forEach((sneakers) => {
           sneakersEl.innerHTML +=`
    <div class="card m-auto" style="width: 18rem;">
    <img src="${sneakers.image}" class="card-img-top" alt="sneaker">
    <div class="card-body">
        <h5 class="card-title">Name: ${sneakers.productName}</h5>
        <p class="card-text">Instock: ${sneakers.instock}</p>
        <p class="card-text"><small class="text-muted">Price: R${sneakers.price}</small></p>
        <a href="#" class="btn btn-primary" id="check" onclick="addToCart(${sneakers.id})">Add</a>
    </div>
    </div>`;
        })
        
    };


    
    displayProduct();

let cart = [];
const cartItemsEl = document.getElementById('tafula');

function addToCart(id) {
    if (cart.some((item) => item.id === id)) {
        alert("Product already added");
    } else {
        const item = products.find((product) => product.id === id);
        cart.push({
            ...item,
            quantity: 1,
        });
    }
    updateCart();
}

function updateCart() {
    cartItems();
}

function cartItems() {
    cartItemsEl.innerHTML = "";
    cart.forEach((item) => {
        cartItemsEl.innerHTML += `
        <tr>
        <th scope="row">${item.id}</th>
        <td>${item.productName}</td>
        <td>${item.quantity}</td>
        <td>${item.price}</td>
      </tr>`;
    });

}

}


