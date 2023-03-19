const containerDiv = document.querySelector("#container")
let grid = 0;

function rowMaker(rows, cols) {
    containerDiv.style.setProperty("--grid-rows", rows);
    containerDiv.style.setProperty("--grid-columns", cols);
    for (i = 0; i < (rows * cols); i++ ){
        let sq = document.createElement("div"); 
        containerDiv.appendChild(sq).className = "grid-item";
        sq.addEventListener("mouseover", () => {
            sq.style.backgroundColor = "black";
        })
    }

}

rowMaker (16, 16)
