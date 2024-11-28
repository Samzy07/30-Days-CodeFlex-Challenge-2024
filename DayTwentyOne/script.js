const firstScreen = document.querySelector('.first-screen')
const secondScreen = document.querySelector('.second-screen')
const buttons = document.querySelectorAll('.btn')
const equalBtn = document.querySelector('.btn-equal')
const clearBtn = document.querySelector('.btn-clear')


buttons.forEach((buttons)=>{
    buttons.addEventListener('click', (e)=>{
        let value = e.target.dataset.num;
        firstScreen.value += value;
    })
})


equalBtn.addEventListener('click', function(e){
    if(firstScreen.value === ''){
        firstScreen.value = '';
    }
    else {
        secondScreen.value = eval(firstScreen.value)
    }
})

clearBtn.addEventListener("click", ()=>{
    firstScreen.value = ""
    secondScreen.value = ""
})