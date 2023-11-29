let date = document.querySelector('.date');
let tasks = document.querySelector('.text');
let submit = document.querySelector('.button1');
let reset = document.querySelector('.button2');
let results = document.querySelector('.output');
let error = document.querySelector('.error');
let alerting = '<h3>Your Tasks:</h3><hr>';

let taskProcessed = {
    task: tasks.value,
    dates: date.value,
    idNo: Math.random(),
}   


//SUBMIT


let proceed = () => {
        let newMsg = `<br> Day: ${date.value} <br> Task: ${tasks.value}<hr>`;
        alerting += newMsg;
    results.innerHTML = alerting;
    
}

submit.addEventListener('click', () => {
    proceed();
})

//RESET

let clr = (value) => {
    date.value = '';
    tasks.value = '';
}

reset.addEventListener('click', () => {
    clr();
})

//OUTPUT
