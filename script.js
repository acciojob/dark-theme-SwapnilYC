//your code here
let btn = document.getElementById('swap');
let mainDiv = document.getElementById('app');


btn.addEventListener('click', ()=>{
    mainDiv.classList.toggle('night');
    btn.classList.toggle('button_night')
})