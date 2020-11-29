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

document.addEventListener("keydown", function (e) {
    e.preventDefault();
    let keyC = e.keyCode;
    if (keyC === 37)
        goLeft();
    else if (keyC === 39)
        goRight();
    else if (keyC === 38)
        goTop();
    else if (keyC === 40)
        goDown();

})

function randomColor() {
    return Math.random().toString(16).substr(-6);
}

function goLeft() {
    let temp = myBlock.offsetLeft;
    temp = temp - 50;
    myBlock.style.left = temp + "px";
    const color = "#" + randomColor();
    myBlock.style.backgroundColor = color;

}

function goRight() {
    let temp = myBlock.offsetLeft;
    temp = temp + 50;
    myBlock.style.left = temp + "px";
    const color = "#" + randomColor();
    myBlock.style.backgroundColor = color;
}

function goTop() {
    let temp = myBlock.offsetTop;
    temp = temp - 50;
    myBlock.style.top = temp + "px";
    const color = "#" + randomColor();
    myBlock.style.backgroundColor = color;
}
function goDown() {
    let temp = myBlock.offsetTop;
    temp = temp + 50;
    myBlock.style.top = temp + "px";
    const color = "#" + randomColor();
    myBlock.style.backgroundColor = color;
}


