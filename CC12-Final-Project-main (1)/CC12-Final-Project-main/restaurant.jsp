<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurant POS System</title>
    <link rel="stylesheet" href="Restaurantdesign.css">
</head>
<body>
    <h1>Restaurant POS System</h1>
    <div class="container">
        <div class="product-list">
            <h2>MENU</h2>
            <ul id="product-list">
                <!-- Use JSP to dynamically generate menu items -->
                <%
                    // Assume you have a JavaBean or a List of menu items
                    List<MenuItems> menuItems = getMenuItemsFromDatabase();
                    for (MenuItems item : menuItems) {
                %>
                <li><%= item.getName() %>: <%= item.getPrice() %></li>
                <%
                    }
                %>
            </ul>
        </div>
        <div class="cart">
            <h2>CART</h2>
            <ul id="cart-list">
                <!-- Use JSP to dynamically generate cart items -->
                <%
                    // Assume you have a JavaBean or a List of cart items
                    List<CartItems> cartItems = getCartItemsFromSession();
                    for (CartItems item : cartItems) {
                %>
                <li><%= item.getName() %>: <%= item.getPrice() %></li>
                <%
                    }
                %>
            </ul>
            <li id="cancel-order">
                <button>Cancel Order</button>
            </li>
            <p id="total">Total: <%= getTotalFromSession() %></p>
            <button id="checkout">Checkout</button>
        </div>
    </div>

    <script src="restaurant.js"></script>
</body>
</html>