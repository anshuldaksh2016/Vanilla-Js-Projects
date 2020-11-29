let myBlock;

document.addEventListener("DOMContentLoaded", function () {
    myBlock = document.createElement("div");
    myBlock.innerHTML = "Hello world ";
    document.body.appendChild(myBlock);
})