document.querySelector("#loginForm form").addEventListener("submit", (e) => {
    e.preventDefault();

    // Save login state
    localStorage.setItem("loggedIn", "true");

    // Redirect to main page
    window.location.href = "xhome.html";
});
const logoutBtn = document.getElementById("logoutBtn");

// If not logged in → go back to login page
if (localStorage.getItem("loggedIn") !== "true") {
    window.location.href = "login.html";
}

// Logout
logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    window.location.href = "login.html";
});
