const firstInputEl = document.querySelector('.input-1')
const secondInputEl = document.querySelector('.input-2')
const totalResult = document.getElementById("result")

let result;

function calculate(){
    result = Number(firstInputEl.value) + Number(secondInputEl.value)
    totalResult.innerHTML = `Result : ${result}`
    
}
