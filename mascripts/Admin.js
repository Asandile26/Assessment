let products = JSON.parse(localStorage.getItem('products')) ?
    JSON.parse(localStorage.getItem('products')) : [
        {
            id: 0,
            productName: "New Balance Junior",
            price: 1299.99,
            instock: 100,
            image: "https://i.postimg.cc/FKY12mdW/New-balance.png",
          },
          {
              id: 1,
              productName: "Adidas",
              price: 1599.99,
              instock: 100,
              image: "https://i.postimg.cc/RCghVN7s/Adidas-toddlers.png",
            },
            {
              id: 2,
              productName: "Nike junior",
              price: 3799.99,
              instock: 100,
              image: "https://i.postimg.cc/pLgbM2zr/Nike-Junior.png",
            },
            {
              id: 3,
              productName: "Nike",
              price: 2799.99,
              instock: 100,
              Image: "https://i.postimg.cc/5yBZyHGP/Air-max-90.png",
            },
            {
              id: 4,
              productName: "Adidas men's",
              price: 2599.99,
              instock: 100,
              image: "https://i.postimg.cc/Z5S66WQ8/Adidas-Men-s.png",
            },
            {
              id: 5,
              productName: "Hi-Tech",
              price: 2099.99,
              instock: 100,
              image: "https://i.postimg.cc/zXLxxHp4/Hi-tec.png",
            }
            ,
            {
              id: 6,
              productName: "Puma toddlers",
              price: 2099.99,
              instock: 100,
              image: "https://i.postimg.cc/HW0MdYnj/Puma-toddler.png",
            },
            {
              id: 7,
              productName: "Vans",
              price: 2099.99,
              instock: 100,
              image: "https://i.postimg.cc/NG7w4VJW/Vans-kids.png",
            },
            {
              id: 8,
              productName: "Reebok",
              price: 2599.99,
              instock: 100,  
              image: "https://i.postimg.cc/c4gBZqpz/Reebok-junior.png",
            }
            
      ];
console.log(products)
const tableEl = document.getElementById('table');
document.querySelector('#tbody').innerHTML =``
let x = localStorage.setItem('sneakers',JSON.stringify(products));
let y = localStorage.getItem('sneakers');

function tableProduct() {
    document.querySelector('#tbody').innerHTML = ''
    let sneakers = JSON.parse(localStorage.getItem('sneakers'))
    sneakers.forEach((item) => {
        document.querySelector('#tbody').innerHTML +=`
        <tr>
        <th scope="row">${item.id}</th>
        <td>${item.productName}</td>
        <td>${item.price}</td>
        <td>${item.instock}</td>
        <td><button onclick="edit(${item.id})" id="edit"><i class="fa-solid fa-pen-to-square"></i></button></td>
        <td><button class="deleteBtn"><i class="fa-solid fa-trash"></i></button></td>
        </tr>
        `
    })}
    ;
    tableProduct()


//sorts
function sort() {
    document.querySelector('#tbody').innerHTML =``
    let sorted = products.sort((a, b) => (a.price > b.price) ? 1 : -1);
    localStorage.setItem('sneakers', JSON.stringify(products))
    console.log(sorted);
    tableProduct();
}
 
let newSneakers = function(id, productName, price, instock, image){
    this.id = id;
    this.productName = productName;
    this.price = price;
    this.instock = instock;
    this.image = image;
}

function edit(id) {
    // Find the product with the given id
    let productToEdit = products.find(product => product.id === id);

    document.querySelector('#id').value = productToEdit.id;
    document.querySelector('#productName').value = productToEdit.productName;
    document.querySelector('#price').value = productToEdit.price;
    document.querySelector('#instock').value = productToEdit.instock;
    document.querySelector('#image').value = productToEdit.image;
    $('#modal2').modal('show');
}

let updateBtn = document.querySelector('#save')
 
function updateBtnClick(event) {
    event.preventDefault();
    let id = document.querySelector('#id').value;
    let productName = document.querySelector('#productName').value;
    let price = document.querySelector('#price').value;
    let instock = document.querySelector('#instock').value;
    let image = document.querySelector('#image').value;

    let newSneaker = new newSneakers(id, productName, price, instock, image);
    products.push(newSneaker);
   
    let index = products.findIndex(product => product.id === parseInt(id));

    products[index] = {
        id: parseInt(id),
        productName: productName,
        price: parseFloat(price),
        instock: parseInt(instock),
        image: image
    };

    tableProduct();
    
    localStorage.setItem('sneakers', JSON.stringify(products));
}

updateBtn.addEventListener('click', updateBtnClick);




function OnDeleteRow(e) {
    if(!e.target.classList.contains("deleteBtn")) {
        return;
    }
    const btn =e.target;
    btn.closest("tr").remove();
}

tableEl.addEventListener('click', OnDeleteRow);

