
let total = 0;
let cartProducts = [];

let savedCart = localStorage.getItem("myCart");

if (savedCart != null) {
    cartProducts = JSON.parse(savedCart);
}

function showCart() {
    let cart = document.getElementById("cart-items");
    cart.innerHTML = "";
    total = 0;

    if (cartProducts.length == 0) {
        cart.innerHTML = "<p>Your cart is empty.</p>";
    }

    for (let i = 0; i < cartProducts.length; i++) {
        let product = document.createElement("div");
        product.className = "flex justify-between items-center gap-4";

        let text = document.createElement("p");
        text.textContent = cartProducts[i].name + " - $" + cartProducts[i].price.toFixed(2);

        let removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "border border-amber-300 rounded px-3 py-1";

        removeButton.onclick = function() {
            cartProducts.splice(i, 1);
            localStorage.setItem("myCart", JSON.stringify(cartProducts));
            showCart();
        };

        product.appendChild(text);
        product.appendChild(removeButton);
        cart.appendChild(product);

        total = total + cartProducts[i].price;
    }

    document.getElementById("cart-total").textContent = total.toFixed(2);
}

function addToCart(price, name) {
    let product = {
        name: name,
        price: price
    };

    cartProducts.push(product);

    localStorage.setItem("myCart", JSON.stringify(cartProducts));

    showCart();
}

let buttons = document.querySelectorAll(".btn-add");

buttons[0].onclick = function() {
    addToCart(2.99, "Beginner Pack");
};

buttons[1].onclick = function() {
    addToCart(7.99, "Summoning of the Legends");
};

buttons[2].onclick = function() {
    addToCart(5.99, "Dark Summoning");
};

buttons[3].onclick = function() {
    addToCart(4.99, "Lucky Pack");
};

document.getElementById("clear-cart").onclick = function() {
    cartProducts = [];
    localStorage.removeItem("myCart");
    showCart();
};

document.getElementById("checkout").onclick = function() {
    if (cartProducts.length == 0) {
        alert("Your cart is empty!");
    } else {
        alert("Order confirmed! Total: $" + total.toFixed(2));

        cartProducts = [];
        localStorage.removeItem("myCart");
        showCart();
    }
};

showCart();
