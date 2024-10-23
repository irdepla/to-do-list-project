const addBtn = document.querySelector(".add__btn")
const minusBtn = document.querySelector(".minus__btn")
const resetBtn = document.querySelector(".reset__btn")
const sumBtn = document.querySelector(".sum__btn")
const counter = document.querySelector(".counter")
let every = document.querySelector(".every")
let addCounter = 0


addBtn.addEventListener("click", () => {
    counter.innerText++;
    addCounter++
});

resetBtn.addEventListener("click", () => {
    counter.innerText = "0";
});


minusBtn.addEventListener("click", () => {
    if (counter.innerText <= 0) {
        alert("Eror")
        counter.innerText = "0";
        return;
    }
    counter.innerText--
    addCounter--
});


sumBtn.addEventListener("click", () => {
    alert(`${addCounter} ta zikr aytingiz`)
});


