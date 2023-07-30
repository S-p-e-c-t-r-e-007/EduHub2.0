const signupbtn = document.getElementById("signup-ref-btn");
const loginbtn = document.querySelector("#login-btn");
const signupform = document.querySelector("#Sign-up-form");

signupbtn.addEventListener("click", e => {
    e.preventDefault();

    const loginModal = document.querySelector(".login-container");
    const signUpModal = document.querySelector(".signup-container");
    console.log("works");
    signUpModal.style.display = "flex";
    loginModal.style.display = "none";

    
});

loginbtn.addEventListener("click", e => {
    e.preventDefault();
    window.location.href = "homepage.html";
});

signupform.addEventListener("submit", e => {
    e.preventDefault();
    window.location.href = "homepage.html";
})