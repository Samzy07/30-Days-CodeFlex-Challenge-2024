const ulEl = document.querySelector('.todo-items')
const inputEl = document.getElementById('input')
const addEl = document.getElementById('add')

let array = []

function updateTodo(e){

    let objTodo = {
        todoName : inputEl.value,
        todoId : array.length + 1
    }
    array.push(objTodo)

    let todosLi = document.createElement('li')
    let pEl = document.createElement('p')
    pEl = objTodo.todoName  
    inputEl.value ='' 
    let deleteEl = document.createElement('button')
    deleteEl.classList.add('delete-btn')
    deleteEl.innerHTML = "Delete"

    todosLi.append(pEl, deleteEl)
    ulEl.appendChild(todosLi)


    deleteEl.addEventListener('click', (e)=>{
       
        todosLi.remove()
        
    })
  
    
}


addEl.addEventListener('click', (e)=>{
    updateTodo()
})


