let myBlock;

document.addEventListener("DOMContentLoaded", function () {
    myBlock = document.createElement("div");
    myBlock.innerHTML = "Hello world ";

    myBlock.style.width = "100px"
    myBlock.style.height = "100px"
    myBlock.style.backgroundColor = "purple";
    myBlock.style.color = "white";
    myBlock.style.lineHeight = "100px";
    myBlock.style.textAlign = "center";
    myBlock.style.position = "absolute";
    myBlock.style.top = "100px";
    myBlock.style.left = "150px";



    document.body.appendChild(myBlock);
})