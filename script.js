let cart = [];
let total = 0;

function addToCart(item, price){

cart.push({item,price});
total += price;

updateCart();

showPopup(item);

}

function showPopup(item){

let popup = document.getElementById("cart-popup");

popup.innerText = item + " added to cart";

popup.classList.add("show");

setTimeout(function(){
popup.classList.remove("show");
},2000);

}

function updateCart(){

let cartList = document.getElementById("cart-items");
let totalElement = document.getElementById("cart-total");
let grandTotalElement = document.getElementById("grand-total");
let cartCount = document.getElementById("cart-count");

cartList.innerHTML = "";

cart.forEach((food,index) => {

let li = document.createElement("li");

li.innerHTML = `
<span>${food.item}</span>
<span>₹${food.price}</span>
<button class="remove-btn" onclick="removeCartItem(${index})">🗑</button>
`;

cartList.appendChild(li);

});

let deliveryCharge = 20;
let grandTotal = total + deliveryCharge;

totalElement.innerText = total;
grandTotalElement.innerText = grandTotal;
cartCount.innerText = cart.length;

}

function removeCartItem(index){

total -= cart[index].price;

cart.splice(index,1);

updateCart();

}

function toggleCart(){

let cartPanel = document.getElementById("cart-panel");
let cartBtn = document.getElementById("cart-btn");

cartPanel.classList.toggle("open");

if(cartPanel.classList.contains("open")){
cartBtn.style.display = "none";
}else{
cartBtn.style.display = "block";
}

}

function sendWhatsAppOrder(){

if(cart.length === 0){
alert("Your cart is empty!");
return;
}

let deliveryCharge = 20;
let grandTotal = total + deliveryCharge;

let message = "Hello KC Restaurant! I want to order:%0A%0A";

cart.forEach(item => {
message += item.item + " - ₹" + item.price + "%0A";
});

message += "%0AItems Total: ₹" + total;
message += "%0ADelivery Charge: ₹20";
message += "%0AGrand Total: ₹" + grandTotal;

let phone = "919015886677";

let url = "https://wa.me/" + phone + "?text=" + message;

window.open(url,"_blank");

}

function toggleMenu(){

const menu = document.getElementById("menuSection");

if(menu.style.display === "block"){
menu.style.display = "none";
}else{
menu.style.display = "block";
menu.scrollIntoView({ behavior: "smooth" });
}

}

function toggleNav(){

let navLinks = document.getElementById("nav-links");

navLinks.classList.toggle("show");

}