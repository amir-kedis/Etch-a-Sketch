const rangeInput = document.querySelector("#rangeInput");
const sizeSpan = document.querySelector("#sizeSpan");
const canvas = document.querySelector("#canvas");

// update span with the size of the new canvas
function updateSpan() {
    sizeSpan.textContent = `${rangeInput.value} * ${rangeInput.value}`;
    return ;
}

// delete every cell in the canvas
function deleteCanvas() {
    canvas.innerHTML = "";

}

function makeGrid(size=32) {
    const width = canvas.offsetWidth; 

    const itemsNum = size * size;
    const itemWidth = width / size;


    for (let i = 0; i < itemsNum; i++) {
        let item = document.createElement("div");

        item.style.width = itemWidth;
        item.style.height = itemWidth;

        item.classList.add("grid_item");

        canvas.append(item);
    }
}

// when range changes update the span size
rangeInput.addEventListener("input", () => {
    updateSpan();
    deleteCanvas();
    makeGrid(rangeInput.value);
});

makeGrid();