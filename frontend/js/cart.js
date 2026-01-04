let cart = JSON.parse(localStorage.getItem("cart")) || [];
let cartDiv = document.getElementById("cartItems");
let total = 0;

if (cart.length === 0) {
    cartDiv.innerHTML = "<p>Cart is empty</p>";
}

cart.forEach((item, index) => {
    total += item.price;

    cartDiv.innerHTML += `
        <div class="card">
            <h4>${item.name}</h4>
            <p>₹${item.price}</p>
            <button onclick="removeItem(${index})">Remove</button>
        </div>
    `;
});

document.getElementById("total").innerText = "Total: ₹" + total;

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

function checkout() {
    alert("Order Placed Successfully!");
    localStorage.removeItem("cart");
    location.reload();
}
