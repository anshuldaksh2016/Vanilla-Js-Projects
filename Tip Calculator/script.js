const button = document.querySelector("button");
const output = document.querySelector(".output");
const cost = document.querySelector("input");

console.log(button)

button.addEventListener("click", function () {
    console.log("Click");
    let tip = (cost.value * 0.15).toFixed(2);
    let temp = `<h1>U should tip ${tip} for the ${cost.value}`
    output.innerHTML = temp;

})

