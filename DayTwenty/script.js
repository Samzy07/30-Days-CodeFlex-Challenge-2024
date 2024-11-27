const details = document.querySelector(".details")

const studentDetails =[ 
    {
    name : "Sammy",
    age : 20,
    course : "Comp Science",
    grade : "A",
    status : "Enrolled"
    },

    {
    name : "Daniel",
    age : 22,
    course : "Art",
    grade : "A",
    status : "Pending"
    }
]

studentDetails.forEach((items,index)=>{
    
    pEl = document.createElement('p')
    pEl.innerText = `Name: ${items.name}  
                      Age: ${items.age}
                      Course: ${items.course}
                      Grade: ${items.grade}
                      Status: ${items.status}`
    details.append(pEl)
    
})