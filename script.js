    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let Price = JSON.parse(localStorage.getItem("Price")) || [];
    let countiti = JSON.parse(localStorage.getItem("countiti")) || [];
    let get = [];
    let totalPrice = 0;


    const buttons = document.querySelectorAll(".btn-add")
    const text = document.getElementById("cart-items")
    const total = document.getElementById("cart-total")
    const countits = document.getElementById("countits")
    const clear = document.getElementById("clear-cart")
    const checkout = document.getElementById("checkout")
    const imgPack = document.getElementById("img-pack")

    affichage();
    function addToCart(name, price) {
        let check = cart.includes(name)
        if (check == false) {
            cart.push(name)
            countiti.push(1)
        }
        else{
            let i = cart.indexOf(name)
            countiti[i]++
        }
        Price.push(price)
        savedata ();
    }

    function Total() {
        totalPrice = 0;
        for (let i = 0; i < Price.length; i++) {
            totalPrice += Price[i];
        }
        return totalPrice
    }

    function affichage() {
        text.innerHTML = "+" + cart.join('<br> +')
        countits.innerHTML = countiti.join(' <br>')
        total.textContent = Total()
    }

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            addToCart(button.dataset.name, Number(button.dataset.price))
            affichage()
        })
    })
    function clearCart(){
        clear.addEventListener("click", ()=> {
                cart.length = 0;
                countiti.length = 0;
                Price.length = 0;
                savedata();
                text.innerHTML = "your cart is empty"
                countits.innerHTML = ""  
                total.textContent = 0;
                
    }
    )}
    clearCart();
    
    function savedata(){
        localStorage.setItem("cart", JSON.stringify(cart))
        localStorage.setItem("Price", JSON.stringify(Price))
        localStorage.setItem("countiti", JSON.stringify(countiti))
        localStorage.setItem("get", JSON.stringify(get));

    }
    function affichdat(){
        let data  = JSON.parse(localStorage.getItem("cart"))
        console.log(data)
    }
    function ft_checkout() {
        checkout.addEventListener("click", ()=> {
            get = cart.concat(Price,countiti)
             cart.length = 0;
                countiti.length = 0;
                Price.length = 0;
                savedata();
                text.innerHTML = "your cart is empty"
                countits.innerHTML = ""  
                total.textContent = 0;  
                if(get.length == 0)
                {
                    alert(" your cart is emptey ? ")
                }
                else{
                    alert(" your checkout is done ")
                }
        })
    }
    ft_checkout();
    pack = JSON.parse(localStorage.getItem("get"))
    console.log(btn-pack)