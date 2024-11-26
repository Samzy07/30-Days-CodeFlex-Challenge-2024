
const ulEl = document.getElementById('list-items')


const listItems = ["Apple", "Orange", "Banana", "Mangoes", "Coconut"]


for (let i = 0; i < listItems.length; i++) {
    
        
    var liEl = document.createElement("li")
    liEl.append(listItems[i])
    ulEl.append(liEl)
    
}
