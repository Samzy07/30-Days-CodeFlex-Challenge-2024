let bodyEl = document.getElementById("body")
let btnEl = document.getElementById("button")


btnEl.addEventListener("click", ()=>{
       
            bodyEl.style.backgroundColor = "#" + Math.round(Math.random() * 0xFFFFFF).toString(16)   
                 
})

