let users = [];

// Sign-up
document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("signup-name").value;
  let email = document.getElementById("signup-email").value;
  let password = document.getElementById("signup-password").value;

  let user = {
    name: name,
    email: email,
    password: password,
  };

  users.push(user);

  document.getElementById("login-message").innerText =
    "Sign up successful! You can now login.";
  document.getElementById("login-message").style.color = "blue";

  console.log(users);

  document.getElementById("signup-form").reset();
});

document.getElementById("login-form").addEventListener("submit", function (e) {
  e.preventDefault();

  let loginEmail = document.getElementById("login-email").value;
  let loginPassword = document.getElementById("login-password").value;

  let userExists = false;

  users.forEach(function (user) {
    if (user.email === loginEmail && user.password === loginPassword) {
      userExists = true;
    }
  });

  if (userExists) {
    document.getElementById("login-message").innerText =
      "Login successful! Welcome to the home page.";
    document.getElementById("login-message").style.color = "white";
  } else {
    document.getElementById("login-message").innerText =
      " Invalid email or password Try Again.";
    document.getElementById("login-message").style.color = "green";
  }

  document.getElementById("login-form").reset();
});
