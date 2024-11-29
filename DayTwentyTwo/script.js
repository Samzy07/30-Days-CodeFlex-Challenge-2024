const formEl = document.getElementById('form')
const nameEl = document.getElementById('name')
const passEl = document.getElementById('password')
const emailEl = document.getElementById('email')
const dateEl = document.getElementById('date')
const genEl = document.getElementById('gender')

const passOn = document.querySelector(".fa-eye")
const passOff = document.querySelector(".fa-eye-slash")

const nameErr = document.getElementById('name-error')
const emailErr = document.getElementById('email-error')
const passErr = document.getElementById('password-error')
const dateErr = document.getElementById('date-error')
const genErr = document.getElementById('gender-error')


formEl.addEventListener('submit', (e)=>{
    errorValidation(e)

})


function errorValidation (e){
    
    if (nameEl.value == '' || nameEl.value == null) {
        e.preventDefault()
        nameErr.innerHTML = "Name is Required"
        nameEl.style.border = `1px solid red`
    } else {
        nameErr.innerHTML = ""
        nameEl.style.border = ``
    }

    if (emailEl.value == '' || emailEl.value == null) {
        e.preventDefault()
        emailErr.innerHTML = "Email is Required"
        emailEl.style.border = `1px solid red`
    } else {
        emailErr.innerHTML = ""
        emailEl.style.border = ``
    }

    if (passEl.value.length <= 7) {
        e.preventDefault()
        passErr.innerHTML = "Password should not be less than 7 characters"
        passEl.style.border = `1px solid red`
    }  else {
        passErr.innerHTML = ""
        passEl.style.border = ``
    }

    if (dateEl.value == '' || dateEl.value == null) {
        e.preventDefault()
        dateErr.innerHTML = "Date of Birth is Required"
        dateEl.style.border = `1px solid red`
    } else {
        dateErr.innerHTML = ""
        dateEl.style.border = ``
    }

    if (dateEl.value == '' || dateEl.value == null) {
        e.preventDefault()
        dateErr.innerHTML = "Date of Birth is Required"
        dateEl.style.border = `1px solid red`
    } else {
        dateErr.innerHTML = ""
        dateEl.style.border = ``
    }

    if (genEl.value == '' || genEl.value == null) {
        e.preventDefault()
        genErr.innerHTML = "Gender is Required"
        genEl.style.border = `1px solid red`
    } else {
        dateErr.innerHTML = ""
        dateEl.style.border = ``
    }
}


passOff.addEventListener('click', ()=>{
    passOff.style.display = "none"
    passOn.style.display = 'block'
    passEl.type = "text"
})

passOn.addEventListener('click', ()=>{
    passOff.style.display = "block"
    passOn.style.display = 'none'
    passEl.type = "password"
})