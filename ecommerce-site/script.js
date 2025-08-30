let cart = [];
let total = 0;

function addToCart(name, price) {
  // Add product to cart
  cart.push({ name, price });
  total += price;

  updateCart();
}

function removeFromCart(index) {
  // Decrease total by removed item price
  total -= cart[index].price;

  // Remove item from cart array
  cart.splice(index, 1);

  updateCart();
}

function updateCart() {
  // Update cart count
  document.getElementById("cart-count").innerText = cart.length;

  // Update cart items
  let cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  cart.forEach((item, index) => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price} `;

    // Create remove button
    let btn = document.createElement("button");
    btn.textContent = "❌ Remove";
    btn.style.marginLeft = "10px";
    btn.onclick = () => removeFromCart(index);

    li.appendChild(btn);
    cartItems.appendChild(li);
  });

  // Update total
  document.getElementById("total").innerText = total;
}
