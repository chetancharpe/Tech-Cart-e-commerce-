fetch("http://localhost:5000/api/products")
.then(res=>res.json())
.then(data=>{
  const products = document.getElementById("products");
  data.forEach(p=>{
    products.innerHTML += `
      <div class="card">
        <img src="${p.image}">
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart('${p.name}',${p.price})">
          Add to Cart
        </button>
      </div>
    `;
  });
});

function addToCart(name, price){
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({name, price});
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Added to cart");
}
