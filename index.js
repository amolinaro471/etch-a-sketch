const containerDiv = document.querySelector("#container")
let grid = 0;

function rowMaker(rows, cols) {

    while (document.querySelector("button") !== null) {
        document.querySelector("button").remove();
    }

    containerDiv.style.setProperty("--grid-rows", rows);
    containerDiv.style.setProperty("--grid-columns", cols);
    containerDiv.style.width = "960px";
    containerDiv.style.overflow = "hidden";
    for (i = 0; i < (rows * cols); i++ ){
        let sq = document.createElement("div");
        sq.style.minHeight = "0"; 
        sq.style.minWidth = "0"; 
        sq.style.overflow = "0"; 
        containerDiv.appendChild(sq).className = "grid-item";
        sq.addEventListener("mouseover", () => {
            sq.style.backgroundColor = "black";
        })
    }
    makeButton();

}

function makeButton () {
    const buttonDiv = document.querySelector("#buttonDiv");
    const reset = document.createElement("button");
    reset.textContent = "Reset Grid";
    reset.style.margin = "20px";
    buttonDiv.appendChild(reset);
    reset.addEventListener('click', () => {
        document.querySelectorAll(".grid-item").forEach(e => e.remove());
        let choice = prompt("Please select grid size");
        if (choice > 100) {
            alert("You chose a grid size thats too large");
            return;
        }
        rows = choice;
        cols = choice;
        rowMaker(rows, cols);
    })
}

rowMaker(16, 16); 
