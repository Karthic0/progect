document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // static login credentials
  if (username === "admin" && password === "1234") {
    document.getElementById("message").style.color = "green";
    document.getElementById("message").textContent = "Login successful!";
    // Redirect
  } else {
    document.getElementById("message").style.color = "red";
    document.getElementById("message").textContent = "Invalid username or password";
  }
})
