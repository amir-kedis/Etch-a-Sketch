const rangeInput = document.querySelector("#rangeInput");
const sizeSpan = document.querySelector("#sizeSpan");
const canvas = document.querySelector("#canvas");
const colorBtn = document.querySelector("#colorBtn");
const rainbowBtn = document.querySelector("#rainbowBtn");
const clearBtn = document.querySelector("#clearBtn");
const colorPicker = document.querySelector("#colorPicker");

const randomColors = [
    '#1abc9c',
    '#2ecc71',
    '#3498db',
    '#9b59b6',
    '#34495e',
    '#16a085',
    '#27ae60',
    '#2980b9',
    '#8e44ad',
    '#2c3e50',
    '#f1c40f',
    '#e67e22',
    '#e74c3c',
    '#e67e22',
    '#c0392b',
    '#d35400',
    '#95a5a6',
    '#55efc4',
    '#81ecec',
    '#74b9ff',
    '#a29bfe',
    '#dfe6e9',
    '#00b894',
    '#00cec9',
    '#2d3436',
    '#e84393',
    '#d63031'
];

// return a random color from the array of colors
function getRandomColor() {
    return randomColors[Math.floor(Math.random() * randomColors.length)];
}

// update span with the size of the new canvas
function updateSpan() {
    sizeSpan.textContent = `${rangeInput.value} * ${rangeInput.value}`;
    return;
}

// delete every cell in the canvas
function deleteCanvas() {
    canvas.innerHTML = "";

}

// make the grid
function makeGrid(size = 32) {
    const width = canvas.offsetWidth;

    const itemsNum = size * size;
    const itemWidth = width / size;


    for (let i = 0; i < itemsNum; i++) {
        let item = document.createElement("div");

        item.style.width = itemWidth;
        item.style.height = itemWidth;

        item.classList.add("grid_item");

        canvas.append(item);

        item.addEventListener("mouseover", (e) => {
            // if left mouse btn is clicked
            if (e.buttons == 1) {

                // switch modes
                if (colorBtn.classList.contains("active")) {
                    item.style.backgroundColor = colorPicker.value;
                } else {
                    item.style.backgroundColor = getRandomColor();
                }

            }
        });
    }
}

// clear canvas 
function clearCanvas() {
    const gridItems = document.querySelectorAll(".grid_item");
    for (item of gridItems) {
        item.style.backgroundColor = "#fff";
    }
}

// when range changes update the span size
rangeInput.addEventListener("input", () => {
    updateSpan();
    deleteCanvas();
    makeGrid(rangeInput.value);
});

// color mode btn
colorBtn.addEventListener("click", () => {
    colorBtn.classList.add("active");
    rainbowBtn.classList.remove("active");
});

// rainbow mode btn
rainbowBtn.addEventListener("click", () => {
    rainbowBtn.classList.add("active");
    colorBtn.classList.remove("active");
});

clearBtn.addEventListener("click", clearCanvas);

makeGrid();
