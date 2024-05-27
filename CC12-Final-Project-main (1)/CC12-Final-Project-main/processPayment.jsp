<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Payment Processing</title>
</head>
<body>
  <div class="container">
    <h1>Payment Processing</h1>
    <%
      // Get the parameters from the form
      String name = request.getParameter("name");
      String paymentType = request.getParameter("payment-type");
      
      // Process payment logic here
      // For demonstration purposes, just print out the received parameters
    %>
    <p>Name: <%= name %></p>
    <p>Payment Type: <%= paymentType %></p>
    <!-- You can add your payment processing logic here, e.g., connecting to a database, calling a payment gateway API, etc. -->
  </div>
</body>
</html>
