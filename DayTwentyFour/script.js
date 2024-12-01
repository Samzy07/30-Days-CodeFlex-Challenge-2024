const buttonEl = document.getElementById("button")
const countryEl = document.getElementById('Countries')

const url = "https://restcountries.com/v3.1/all?fields=name,flags"

async function getCountrise() {
    
   try {
    const response = await fetch(url)
    const data = await response.json()

    data.forEach(items => {
        liEl = document.createElement("li")

        liEl.innerHTML = `<img src="${items.flags.png}"> NAME : ${items.name.common}`
       
        countryEl.append(liEl)
        
       
    })

   } 
   catch (error) {
        console.log("Error" + error);
        
   }
     
}

buttonEl.addEventListener('click', ()=>{
    getCountrise()

})
