const tableEl = document.getElementById('table');
document.querySelector('#tbody').innerHTML =``

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

