
// HIDE UL AN SHOW SEARCH



function SearchHeader(){
    let UlHide = document.getElementById("hide-header");
    let search = document.getElementById("search");
    UlHide.classList.toggle("hidden");
    search.classList.toggle("active");
}
function navigationbtn(){
    location.href = "/PackgeProducts/products.html"
}
function SwitchAccount(){
    location.href = "/logsign/index.html"
}
function LONGSLEEVED(){
    location.href = "/PackgeProducts/products.html#LONGSLEEVED"
}
function STRAPLESS(){
    location.href = "/PackgeProducts/products.html#STRAPLESS"
}
function ONESHOULDER(){
    location.href = "/PackgeProducts/products.html#ONESHOULDER"
}
function OFFSHOULDER(){
    location.href = "/PackgeProducts/products.html#OFFSHOULDER"
}
function JUMPSUITS(){
    location.href = "/PackgeProducts/products.html#JUMPSUITS"
}
function navigationNew(){
    location.href = "/PackgeNew/new.html"
}
function navigationBuy(){
    location.href = "/PackgBuy/buy.html"
}
let img2 = document.getElementById("changeimg")
function longsleeved1(img){
    localStorage.setItem("pushimg", img.src)
    location.href = "/showproducts/showproduct.html"
}
let img = document.getElementById("changeimg");
if(img){
    img.src = localStorage.getItem("pushimg")
}
let cartproduct = document.getElementById("cart-product")

let imgproduct = document.getElementById("changeimg")
let nameproduct = document.getElementById("productname")
let priceproduct = document.getElementById("productprice")
function done() {
    let imgproduct = document.getElementById("changeimg");
    let nameproduct = document.getElementById("productname");
    let priceproduct = document.getElementById("productprice");

    let objproduct = {
        img: imgproduct.src,
        name: nameproduct.innerHTML,
        price: priceproduct.innerHTML
    };

    let arrproduct = JSON.parse(localStorage.getItem("Newproduct")) || [];

    arrproduct.push(objproduct);

    localStorage.setItem("Newproduct", JSON.stringify(arrproduct));

    location.href = "/PackgBuy/buy.html";
}


// SHOW PRODUCTS IN BUY PAGE

let cart = document.getElementById("cart-product");

if (cart) {
    let arrproduct = JSON.parse(localStorage.getItem("Newproduct")) || [];

    for (let i = 0; i < arrproduct.length; i++) {
        let item = document.createElement("div");

        item.innerHTML = `
            <img src="${arrproduct[i].img}" width="200">
            <h3>${arrproduct[i].name}</h3>
            <p>${arrproduct[i].price}</p>
            <button onclick="remove(${i})">REMOVE</button>
        `
        function remove(i){
    arrproduct.splice(i,1)
    localStorage.Newproduct = JSON.stringify(arrproduct)
    location.reload()
}
        ;
        cart.appendChild(item);
    }
}
