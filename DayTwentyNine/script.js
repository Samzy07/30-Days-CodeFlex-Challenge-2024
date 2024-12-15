
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


   navBars = document.getElementById('ul')

   function openMenu() {
        navBars.classList.add('removeBar')
   }

   function closeMenu() {
    navBars.classList.remove('removeBar')
   }





   const scriptURL = 'https://script.google.com/macros/s/AKfycbw2MaG0ZnAuYMilBWH4bCd477ew0MOr_1bGCEqXk6YC13LSmJ5TRy3a_I212vOxEQDt/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML = "Message sent successfully"
        setTimeout(() => {
            msg.innerHTML = ''
        }, 5000);
        form.reset()
        })
      .catch(error => console.error('Error!', error.message))
    })


    


    const links = document.querySelectorAll('ul li a')
    const sections = document.querySelectorAll('section')

    window.onscroll = ()=>{
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if(top >= offset && top < offset + height){
                links.forEach(link => {
                    link.classList.remove('active')
                    document.querySelector('ul li a[href*=' + id + ']').classList.add('active')
                } )
            }
        })
        closeMenu()
      
    }