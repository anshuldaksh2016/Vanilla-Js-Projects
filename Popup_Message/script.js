const popups = document.querySelectorAll(".popup");
const popup = document.querySelector(".output");
const popupMessage = document.querySelector(".message");
const closeBtn = document.querySelector(".close");

closeBtn.addEventListener("click", function () {
    popup.classList.add("hide");
})


for (let x = 0; x < popups.length; x++) {
    console.log(popups[x]);
    popups[x].addEventListener("click", function () {
        let outPutText = this.getAttribute('data-message');
        message(outPutText)
    })
}

function message(output) {
    popup.classList.remove("hide");
    popupMessage.innerText = output;
}