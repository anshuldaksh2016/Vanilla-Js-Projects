let myBlock;

let myfunctionList;

let funList = []; // global array we can add commands 

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
    myfunctionList = document.createElement("div");
    document.body.appendChild(myfunctionList);
})

document.addEventListener("keydown", function (e) {
    e.preventDefault();
    let keyC = e.keyCode;
    if (keyC === 37)
        addFun("left");
    else if (keyC === 39)
        addFun("right");
    else if (keyC === 38)
        addFun("up")

    else if (keyC === 40)
        addFun("down")
    else if (keyC === 67) {
        myBlock.style.backgroundColor = randomColor();
    }

    else if (keyC == 13 || keyC == 32) {
        //enter and space
        mover();
    }
})

function mover() {
    if (funList.length > 0) {
        let cur = myBlock.getBoundingClientRect();
        let el = funList.shift();
        let item = el.textContent.replace("+", "");
        myfunctionList.removeChild(el)
        myBlock.innerHTML = "Move:" + item;

        //console.log(item);
        if (item == "left") {
            myBlock.style.left = cur.left - cur.width + "px";
        }
        if (item == "right") {
            myBlock.style.right = cur.left + cur.width + "px";
        }
        if (item == "up") {
            myBlock.style.right = cur.top - cur.height + "px";
        }
        if (item == "down") {
            myBlock.style.right = cur.top + cur.height + "px";
        }

        setTimeout(mover, 300);
    }
}

function addFun(val) {
    //funList.push(val);
    let span = document.createElement("span");
    span.textContent = "+" + val;
    span.style.padding = "10px";
    span.style.border = "1px solid #ddd";

    span.addEventListener("mouseover", function () {
        this.style.backgroundColor = "purple";
        this.style.color = "white";

    })

    span.addEventListener("mouseout", function () {
        this.style.backgroundColor = "white";
        this.style.color = "black";

    })
    myfunctionList.appendChild(span);
    funList.push(span);
    console.log(funList);
}




function randomColor() {
    return "#" + Math.random().toString(16).substr(-6);
}

function goLeft() {
    let temp = myBlock.offsetLeft;
    temp = temp - 50;
    myBlock.style.left = temp + "px";
    myBlock.style.backgroundColor = randomColor();

}

function goRight() {
    let temp = myBlock.offsetLeft;
    temp = temp + 50;
    myBlock.style.left = temp + "px";
    myBlock.style.backgroundColor = randomColor();
}

function goTop() {
    let temp = myBlock.offsetTop;
    temp = temp - 50;
    myBlock.style.top = temp + "px";
    myBlock.style.backgroundColor = randomColor();
}
function goDown() {
    let temp = myBlock.offsetTop;
    temp = temp + 50;
    myBlock.style.top = temp + "px";
    myBlock.style.backgroundColor = randomColor();
}


