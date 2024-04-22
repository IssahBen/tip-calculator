const tips = document.getElementById("tips")
const custom_tip = document.getElementById("custom")
const form = document.getElementById("form")
const submit_btn = document.getElementById("submit-btn")
const bill = document.getElementById('bill')
const no_people = document.getElementById("number")
const tip_display = document.getElementById("tip_amount")
const amount_display = document.getElementById("totalperperson")

buttons = tips.querySelectorAll("button")
buttons.forEach((button) => button.addEventListener("click", toggleColor))




let selected_value = ""
let selected = false

let tip_amount = ""
let totalperperson = ""

form.addEventListener("submit", prevent)



setInterval(clickbtn, 1000)

function callback(button) {
    if (button.value == selected_value) { button.classList.toggle("bg-black") }

}
function prevent(e) {
    e.preventDefault()
    if (custom_tip.value.trim() != "" && selected == false) {
        selected_value = custom_tip.value
    } else if (custom_tip.value.trim() != "" && selected == true) {
        buttons.forEach(function (button) {
            if (button.value == selected_value) {
                button.classList.toggle("bg-very_dark_cyan")
                selected = false
            }
        })
    }

    if (bill.value.trim() != "" && no_people.value.trim() != "" && selected_value.trim() != "") {
        tip_amount = (parseInt(bill.value.trim()) * (parseInt(selected_value.trim()) / 100)) / parseInt(no_people.value.trim())
        totalperperson = parseInt(bill.value.trim()) / parseInt(no_people.value.trim())
        tip_display.innerHTML = tip_amount.toFixed(2)
        amount_display.innerHTML = totalperperson.toFixed(2)

    }
}
function clickbtn() {
    submit_btn.click()
}

function toggleColor(e) {
    if (selected == true) {
        if (e.target.value == selected_value) {
            e.target.classList.toggle("bg-very_dark_cyan")
            selected_value = ""
            selected == false
        }
    } else {
        e.target.classList.toggle("bg-black")
        e.target.classList.toggle("bg-very_dark_cyan")
        selected = true
        selected_value = e.target.value

        console.log(e.target)
    }

}