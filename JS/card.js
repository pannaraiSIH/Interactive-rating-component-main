const submitBtn = document.querySelector("button")
const frontCard = document.querySelector(".front-card")
const backCard = document.querySelector(".back-card")
const form = document.querySelector("form")
const radioBtns = document.querySelectorAll(".options input[name='rating']")
const rating = document.querySelector(".rating")

//iterate through inputs and listen for click event
//if input is clicked fires function to get value of that input and enabled submit button
radioBtns.forEach((radioBtn) => {
    radioBtn.addEventListener("click", () => {
        let selectedRadio
        if (radioBtn.checked) {
            selectedRadio = radioBtn.value
            submitBtn.disabled = false
            submitBtn.classList.add("checked")
            radioBtn.classList.add("checked")
            rating.innerHTML = `You selected ${selectedRadio} out of 5`
        }
    })
})

//flip card when submit form
form.addEventListener("submit", (e) => {
    e.preventDefault()
    frontCard.style.display = "none"
    backCard.style.display = "block"
})