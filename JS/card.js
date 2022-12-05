//Flip card

const submit = document.querySelector("button")
const frontCard = document.querySelector(".front-card")
const backCard = document.querySelector(".back-card")

submit.addEventListener("click", () => {
    frontCard.style.display = "none"
    backCard.style.display = "block"
})


//Rating

const options = document.querySelectorAll(".front-card a")
const rating = document.querySelector(".rating")

options.forEach((input) => {
    input.addEventListener("click", () => {
        rating.innerHTML = input.innerHTML
    })
})