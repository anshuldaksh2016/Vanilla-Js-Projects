const myCal = document.querySelector('.myCal');
const myKeys = [["1", "2", "3", "+"], ["4", "5", "6", "-"], ["7", "8", "9", "*"],
["C", "0", "=", "/"]];
const myOper = ["+", "-", "*", "/"];
let myOutput;
document.addEventListener("DOMContentLoaded", function () {
    myOutput = document.createElement("div");
    myOutput.innerHTML = "0";
    myOutput.classList.add("output");
    myCal.appendChild(myOutput);

    for (let y = 0; y < myKeys.length; y++) {
        let div = document.createElement("div");
        div.classList.add("row");

        for (let x = 0; x < myKeys[y].length; x++) {
            console.log(myKeys[y][x]);
            let btn = document.createElement("div");
            btn.innerHTML = myKeys[y][x];
            btn.classList.add("btn");
            btn.addEventListener("click", btnHit);
            div.appendChild(btn);
        }
        myCal.appendChild(div);

    }


})

function btnHit(e) {
    console.log(this.innerText);
    let myValue = this.innerText;
    let myCalc = myOutput.innerText;
    if (myCalc == "0") {
        myCalc = "";
    }
    if (myValue == "C") {
        myCalc = 0;
    }
    if (myValue == "=") {
        myCalc = eval(myCalc);
    }

    let lastChar = myCalc.substring(myCalc.length - 1);
    console.log(lastChar);


    if (myOper.includes(myValue)) {
        if (myOper.includes(lastChar)) {
            myCalc = myCalc.toString.substring(0, myCalc.length - 1);
        }
        else {
            myCalc = eval(myCalc);

        }
    }

    myCalc = myCalc + myValue;
    myOutput.innerText = myCalc;
}





