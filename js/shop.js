// If you have time, you can move this variable "products" to a json file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery'
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery'
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var subtotal = {
    grocery: {
        value: 0, 
        discount: 0
    },
    beauty: {
        value: 0, 
        discount: 0
    },
    clothes: {
        value: 0, 
        discount: 0
    },
};
var total = 0;

// Exercise 1
//     // 1. Loop for to the array products to get the item to add to cart
//     // 2. Add found product to the cartList array
// function buy(id) {
//     for (let i = 0; i < products.length; i++) {
//         if (id == products[i].id) {
//             cartList.push(products[i]);
//             console.log("Se añadió al carrito" + JSON.stringify(products[i]));
//             console.log(cartList);
//         }
//     }
//     calculateSubtotals();
//     calculateTotal();
//     generateCart();
//     applyPromotionsCart();
//     addToCart();
// }

// Exercise 2
function cleanCart() {
    cartList = [];
    cart = [];
    // console.log(cleanCart);
}

// Exercise 3
// 1. Create a for loop on the "cartList" array 
// 2. Implement inside the loop an if...else or switch...case to add the quantities of each type of product, obtaining the subtotals: subtotalGrocery, subtotalBeauty and subtotalClothes
function calculateSubtotals() {
    subtotal.grocery.value = 0;
    subtotal.beauty.value = 0;
    subtotal.clothes.value = 0;
    for (let i = 0; i < cartList.length; i++) {
        if (cartList[i].type == "grocery") {
            subtotal.grocery.value = subtotal.grocery.value + cartList[i].price;
        } else if (cartList[i].type == "beauty") {
            subtotal.beauty.value = subtotal.beauty.value + cartList[i].price;
        } else if (cartList[i].type == "clothes") {
            subtotal.clothes.value = subtotal.clothes.value + cartList[i].price;
        } else {
            console.log("No se encontró");
        }
    }
    console.log("Subtotal grocery:" + subtotal.grocery.value);
    console.log("Subtotal beaty:" + subtotal.beauty.value);
    console.log("Subotal clothes:" + subtotal.clothes.value);
}

// Exercise 4
// Calculate total price of the cart either using the "cartList" array
function calculateTotal() {
    let totalCarrito = 0;
    for (let i in subtotal){
        totalCarrito = totalCarrito + subtotal[i].value;
    }
    console.log("Total:" + JSON.stringify(totalCarrito));
}



// Exercise 5
// Using the "cartlist" array that contains all the items in the shopping cart, 
// generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

//  function generateCart() {
//      cart = [];
//      for(let product in cartList){
//          if(cart.includes(cartList[product])){
//              cartList[product].quantity ++;
//              cartList[product].subtotal = cartList[product].price * cartList[product].quantity;
//              applyPromotionsCart();
//          }else{
//              cart.push(cartList[product]);
//              cart[cart.length-1].quantity = 1;
//              cart[cart.length-1].subtotal = cart[cart.length-1].price;
//              cart[cart.length-1].subtotalWithDiscount = 0;
//          } 
//      }
//      console.log(cart);
//  };




// Exercise 6
// Apply promotions to each item in the array "cart"
function applyPromotionsCart() {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id == 1) {
            if (cart[i].quantity > 1) {
                cart[i].price = 10;
                cart[i].subtotalWithDiscount = cart[i].quantity * cart[i].price;
            } else {
                cart[i].price = 10.5;
            }
        }

        if (cart[i].id == 3) {
            if (cart[i].quantity > 8) {
                cart[i].price = (cart[i].price * 2)/3;
                cart[i].subtotalWithDiscount = cart[i].quantity * cart[i].price;
            } else {
                cart[i].price = 5;
            }
        }
    }
}



// Exercise 7
// Refactor previous code in order to simplify it 
// 1. Loop for to the array products to get the item to add to cart
// 2. Add found product to the cart array or update its quantity in case it has been added previously.
function addToCart(id) {
    subtotalProduct = 0;
        for (let i = 0; i < products.length; i++) {
            if (id == products[i].id) {
                if (cart.includes(products[i])) {
                    let quantity = products[i].quantity;
                    products[i]["quantity"] = quantity + 1;
                    products[i]["subtotalProduct"] += products[i].price;
                } else {
                    products[i]["quantity"] = 1;
                    products[i]["subtotalProduct"] = products[i].price;
                    products[i]["subtotalWithDiscount"] = 0;
                    cart.push(products[i]);
                }
                console.log("Añadido al carrito:" + JSON.stringify(products[i]));
                console.log(cart);
                cartList.push(products[i]);
                console.log(cartList);
            }
        }
        calculateSubtotals();
        calculateTotal();
        applyPromotionsCart();
    }




// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

// Exercise 10
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
}
