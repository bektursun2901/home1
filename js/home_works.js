const email_input = document.querySelector("#gmail_input")
const regex = /.{4,}@(gmail.com|email.com)/
email_input.addEventListener("change", (e)=>{
    if (regex.test(e.target.value)){
        console.log("совпадает")
    }else
    console.log("не совпадает")
})
const child_block = document.querySelector(".child_block")

function number() {

    coin += 1
    console.log(coin)
    if (coin > 450){
        return true
    }
    child_block.style.left = coin + "px"
    setTimeout(number, 40)
}
let coin = 0;
number()
