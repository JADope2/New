document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { id: 1, name: 'Burger', price: 10.99, image: 'burger.jpg' },
        { id: 2, name: 'Pizza', price: 15.99, image: 'pizza.jpg' },
        { id: 3, name: 'Spaghetti', price: 10.99, image: 'spaghetti.jpg' },
        { id: 4, name: 'Fries', price: 7.99, image: 'fries.jpg' },
        { id: 5, name: 'Coke', price: 5.99, image: 'coke.jpg' },
        { id: 6, name: 'Chicken', price: 12.99, image: 'chicken.jpg' }
        // add more products here
    ];

    let cart = [];

    const productList = document.getElementById('product-list');
    const cartList = document.getElementById('cart-list');
    const totalElement = document.getElementById('total');
    const checkoutButton = document.getElementById('checkout');
    const cancelOrderButton = document.getElementById('cancel-order');

    // Render products list
    function renderProducts() {
        productList.innerHTML = '';
        products.forEach((product) => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <h2>${product.name}</h2>
                <img src="${product.image}" alt="${product.name}">
                <!-- other product details -->
            `;
            listItem.dataset.productId = product.id;
            productList.appendChild(listItem);
        });
    }

    // Add event listener to products list
    productList.addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            const productId = e.target.dataset.productId;
            const product = products.find((p) => p.id === parseInt(productId));
            addProductToCart(product);
        }
    });

    // Add product to cart
    function addProductToCart(product) {
        const cartItem = cart.find((item) => item.id === product.id);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ id: product.id, name: product.name, price: product.price, quantity: 1 });
        }
        updateCart();
    }

    // Update cart
    function updateCart() {
        cartList.innerHTML = '';
        let total = 0;
        cart.forEach((item) => {
            total += item.price * item.quantity;
            const cartItemText = document.createElement('span');
            cartItemText.textContent = `${item.name} x ${item.quantity} - ₱${(item.price * item.quantity).toFixed(2)}`;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'X';
            deleteButton.addEventListener('click', () => {
                removeProductFromCart(item);
            });

            const listItem = document.createElement('li');
            listItem.appendChild(cartItemText);
            listItem.appendChild(deleteButton);
            cartList.appendChild(listItem);
        });
        totalElement.textContent = `Total: ₱${total.toFixed(2)}`;
    }

    // Remove product from cart
    function removeProductFromCart(item) {
        cart = cart.filter((i) => i.id !== item.id);
        updateCart();
    }

    // Checkout button event listener
    checkoutButton.addEventListener('click', () => {
        const total = totalElement.textContent.split('₱')[1];
        window.location.href = `checkout.html?total=${total}`;
    });

    // Cancel order button event listener
    cancelOrderButton.addEventListener('click', () => {
        cart = [];
        updateCart();
    });

    // Initialize
    renderProducts();
});
