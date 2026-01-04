function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("message").innerText = data.message;

        if (data.message === "Login Successful") {
            alert("Login Success");
            window.location.href = "index.html";
        }
    })
    .catch(err => {
        document.getElementById("message").innerText = "Server Error";
    });
}
function signup() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, password })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("message").innerText = data.message;

        if (data.message === "User Registered") {
            alert("Signup Successful");
            window.location.href = "login.html";
        }
    })
    .catch(err => {
        document.getElementById("message").innerText = "Server Error";
    });
}
