
const tablinks = document.querySelectorAll('.tab-links')
const tabContents = document.getElementsByClassName('tab-contents')

function tab(tabName){
    for (tablink of tablinks){
        tablink.classList.remove('active')
        
    }
    for (tabContent of tabContents){
        tabContent.classList.remove('active-tab')
        
    }

    document.getElementById(tabName).classList.add('active-tab')
    event.currentTarget.classList.add('active')
}


const careerEl = document.querySelector(".career")

const careers = ["Web Developer", "Graphics Designer"]

let careerIndex = 0

let characterIndex = 0

updateText()

   function updateText () {
   characterIndex++
   careerEl.innerHTML = `
       <h1> I'm ${careers[careerIndex].slice(0, 1) === "I" ? "an" : "a"} ${careers[careerIndex].slice(0,characterIndex)} </h1>

           `
  
   if(characterIndex === careers[careerIndex].length){
       careerIndex++
       characterIndex = 0
   }
   if(careerIndex === careers.length){
       careerIndex = 0
   }
   setTimeout(updateText, 400)
   }