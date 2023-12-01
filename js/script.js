let userInput = document.querySelector('#userInput')
let sort_btn = document.querySelector('#sort')
let add_btn = document.querySelector('#add')
let output = document.querySelector('#outputs')
let todos = []
let userDate = new Date()
let id = Math.random()
let taskName = userInput.value

add_btn.addEventListener('click', (e)=>{
    e.preventDefault()
    if (userInput.value === '') {
        alert('Enter your task')
    } else {
        output.innerHTML += `<li><input type="checkbox"> ${todos[0].name, todos[0].date}<input type='button' value='Remove'></li> <br>`
        output.style.backgroundColor = 'coral'
        output.style.boxShadow = '0 0 12px #000'
        output.style.textAlign = 'center'
        output.style.fontSize = '18px'
    }
})

function tasks() {
    return{
        id: id,
        name: userInput.value,
        date: userDate,
        isCompleted: false
    }
}

(function () {
    todos.push(tasks())
})()


function set() {
    let setItem = localStorage.setItem('', JSON.stringify(tasks()))
}


