// Form functionality
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = document.getElementById('comment-input')
    const inpVal = input.value
    console.log(inpVal)
    const comments = document.querySelector('#list')
    const li = document.createElement('li')
    li.innerText = inpVal
    comments.appendChild(li)

    form.reset()
})

// Counter that starts onload
const counter = document.getElementById('counter')
let count = 0
let intervals; // sets the ID of countdown intervals
document.addEventListener('DOMContentLoaded', () => {
    intervals = setInterval(function(){
        count +=1
        counter.textContent = count
    
    }, 1000)
})

// Pausing the countdown
const submit = document.getElementById('submit')
const pause = document.getElementById('pause')
pause.addEventListener('click', () => {
   clearInterval(intervals)
   pause.innerText = "resume"
    heart.disable= true

})
// Minus button functionality
const minus = document.getElementById('minus')
minus.addEventListener('click', () => {
    counter.textContent = count -1
})

// Add button functionality
const add = document.getElementById('plus')
add.addEventListener('click', () => {
    counter.textContent = count + 1
})

// Like button functionality
const heart = document.querySelector('#heart')

heart.addEventListener('click', () => {
     const ul = document.querySelector('.likes')
     const li = document.createElement('li')
     li.innerText = `${count} has been liked  time`
     ul.appendChild(li)
})




