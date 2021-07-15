const email = document.getElementById("email").value;
const form = document.querySelector(".form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    emailValidation();
})

const emailValidation = (email) => {
    if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) {
        return true;
    } else {
        alert("Invalid email addresss.")
    }
};
