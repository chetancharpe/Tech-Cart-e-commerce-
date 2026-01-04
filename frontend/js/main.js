fetch("http://localhost:5000/api/products")
.then(res => res.json())
.then(data => {
  let html = "";
  data.forEach(p => {
    html += `
      <div class="card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
      </div>
    `;
  });
  document.getElementById("products").innerHTML = html;
});
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Product added to cart");
}