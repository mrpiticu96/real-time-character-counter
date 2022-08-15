const textAreaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCharacterEl = document.getElementById("remaining-counter");

textAreaEl.addEventListener("keyup", ()=> {
    updateCounter()
})

function updateCounter(){
    totalCounterEl.innerText = textAreaEl.value.length;
    remainingCharacterEl.innerText = textAreaEl.getAttribute("maxLenght") - textAreaEl.value.length;
}