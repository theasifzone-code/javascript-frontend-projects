const btn = document.getElementById("btn");
const form = document.getElementById("shoppingForm");

let total_Shopping = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let productName = document.getElementById("productName").value.trim();
  let productPrice = Number(document.getElementById("productPrice").value);
  let productQty = Number(document.getElementById("productQty").value);

  if (!productName || productPrice <= 0 || productQty <= 0) {
    alert("Please enter valid product details!");
    return;
  }

  const item = {
    name: productName,
    price: productPrice,
    qty: productQty,
  };

  total_Shopping.push(item);

  let subtotal = total_Shopping.reduce((sum, item) => sum + item.price * item.qty, 0);
  let tax = subtotal * 0.15;
  let total = subtotal + tax;

  document.getElementById("subtotal").textContent = subtotal.toFixed(2);
  document.getElementById("tax").textContent = tax.toFixed(2);
  document.getElementById("total").textContent = total.toFixed(2);

  // Clear input fields
  form.reset();
});
