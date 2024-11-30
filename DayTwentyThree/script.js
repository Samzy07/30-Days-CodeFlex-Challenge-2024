bodyEl = document.getElementById('body')
btnElDark = document.getElementById('button-dark')
btnElLight = document.getElementById('button-light')


btnElDark.addEventListener('click', (e)=>{
    bodyEl.classList.toggle('dark-mode')
    bodyEl.classList.remove('light-mode')
    btnElDark.style.display = "none"
    btnElLight.style.display = "block"
    
})

btnElLight.addEventListener('click', (e)=>{
    bodyEl.classList.toggle('light-mode')
    bodyEl.classList.remove('dark-mode')
     btnElDark.style.display = "block"
    btnElLight.style.display = "none"
    
})