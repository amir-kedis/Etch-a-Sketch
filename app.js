const rangeInput = document.querySelector("#rangeInput");
const sizeSpan = document.querySelector("#sizeSpan");

// update span with the size of the new canvas
function updateSpan() {
    sizeSpan.textContent = `${rangeInput.value} * ${rangeInput.value}`;
    return ;
}

// when range changes update the span size
rangeInput.addEventListener("input", () => {
    updateSpan();
});