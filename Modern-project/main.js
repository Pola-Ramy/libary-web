var shoppingCart = [];

function addToCart(itemName, itemPrice) {
  var item = { name: itemName, price: itemPrice };
  shoppingCart.push(item);

  // Notification
  showNotification(itemName + " added to the cart.");

  console.log("Items in the cart:", shoppingCart);
  // You can customize further actions, such as updating the UI or sending data to a server.
}

function showNotification(message) {
  // Create a notification element
  var notification = document.createElement("div");
  notification.className = "notification";
  notification.textContent = message;

  // Append the notification to the body
  document.body.appendChild(notification);

  // Remove the notification after a certain time (e.g., 3 seconds)
  setTimeout(function () {
    document.body.removeChild(notification);
  }, 3000);
}

