let balance = 0;
let total = 0;

document.getElementById("balance").innerText = balance;
document.getElementById("total").innerText = total;

let products = [
  { name: "Tomato", price: 20, id: 1 },
  { name: "Pack VGT", price: 50, id: 2 },
  { name: "Broccoli", price: 5, id: 3 },
  { name: "Carrot", price: 25, id: 4 },
  { name: "Apple", price: 60, id: 5 },
  { name: "Banana", price: 39, id: 6 },
  { name: "Lemon", price: 78, id: 7 },
  { name: "Orange", price: 99, id: 8 }
];
for (let x = 1; x < 9; x++) {
  let button = document.getElementById(x);
  button.addEventListener("click", check);
}
function check(event) {
  console.log("check function was activate");
  let idOfProduct = Number(event.currentTarget.id);
  for (let i = 1; i < 9; i++) {
    let product = products.find((item) => item.id === i);
    let id = product.id;
    if (id === idOfProduct) {
      console.log(product);
      const name = product.name;
      const price = product.price;
      const id = product.id;
      addToCart(name, price, id);
    }
  }
}
function addToCart(name, price, id) {
  total = total + price;
  document.getElementById("total").innerText = total;
  const productContainer = document.createElement("div");
  productContainer.id = id;
  productContainer.className = "product";
  const productName = document.createElement("div");
  productName.id = "name-of-product";
  productName.innerText = name;
  const productPrice = document.createElement("div");
  productPrice.id = "price-of-product";
  productPrice.innerText = price;
  const removeButton = document.createElement("button");
  removeButton.id = "remove-product";
  removeButton.className = "button-rmv";
  removeButton.innerText = "X";
  const list = document.getElementById("prd");
  list.append(productContainer);
  productContainer.append(productName, productPrice, removeButton);

  removeButton.addEventListener("click", removeProduct);
  /*<div id="product" class="product">
          <div id="name-of-product">Tomato</div>
          <div id="price-of-product">25$</div>
          <button id="remove-product" class="button">X</button>
        </div> */
}

function removeProduct(event) {
  const productId = Number(event.currentTarget.parentNode.id);
  let product = products.find((item) => item.id === productId);
  let RemoveProductPrice = product.price;
  total = total - RemoveProductPrice;
  document.getElementById("total").innerText = total;
  event.currentTarget.parentNode.remove();
}
