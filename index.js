let email = document.getElementById ("email")
let message = document.getElementById ("message")
let testEmail =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function submitBtn () {
    if (testEmail.test (email)) {
        message.textContent = "Valid email address"
        message.style.color = "green"
    }
    else {
        message.textContent = "Invalid email address"
        message.style.color = "red"
        email.style.border = "1px solid red"
    }
}