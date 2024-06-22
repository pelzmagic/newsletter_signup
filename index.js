const form = document.getElementById("form");
const card = document.querySelector(".card");
const successCard = document.querySelector(".success");
const successButton = document.querySelector(".success_button");
const input = document.querySelector(".input_text");
const emailError = document.querySelector(".email_error");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const textInput = input.value;
    if (!textInput.match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/) || textInput == "") {
        input.classList.add("error");
        emailError.classList.remove("conceal");
    } else {
        card.classList.add("hide");
        successCard.classList.remove("hide");
    }
})

successButton.addEventListener("click", () => {
    successCard.classList.add("hide");
    card.classList.remove("hide");
    location.reload();
})