
const orderButtons = document.querySelectorAll(".order-btn");

for (let i = 0; i < orderButtons.length; i++) {
    orderButtons[i].addEventListener("click", function() {
        alert("Thank you! Your order has been selected.");
    });
}

const sendBtn = document.getElementById("sendBtn");

sendBtn.addEventListener("click", function() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const result = document.getElementById("result");

    if (name == "" || email == "" || message == "") {
        result.textContent = "Please fill in all fields!";
    }
    else {
        result.textContent = "Thank you " + name + "! Your message has been sent.";
    }
});

const bookBtn = document.getElementById("bookBtn");

bookBtn.addEventListener("click", function() {
    const customerName = document.getElementById("customerName").value;
    const customerEmail = document.getElementById("customerEmail").value;
    const guests = document.getElementById("guests").value;
    const date = document.getElementById("date").value;
    const bookingResult = document.getElementById("bookingResult");

    if (customerName == "" || customerEmail == "" || guests == "" || date == "") {
        bookingResult.textContent = "Please fill in all fields!";
    }
    else if (guests <= 0) {
        bookingResult.textContent = "Please enter a valid number of guests!";
    }
    else {
        bookingResult.textContent = "Thank you " + customerName + "! Your table request has been received.";
    }
});

let number = 1;

while (number <= 1) {
    console.log("Welcome to LUXE Restaurant!");
    number++;
}