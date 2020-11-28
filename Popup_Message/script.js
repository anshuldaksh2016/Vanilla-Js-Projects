const popup = document.querySelectorAll(".popup");

for (let x = 0; x < popup.length; x++) {
    console.log(popup[x]);
    popup[x].addEventListener("click", () => {

        let outPutText = popup.getAttribute('data-message');
        console.log(outPutText)
    })
}