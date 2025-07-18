let button = document.getElementById(`button`)
let output = document.getElementById(`output`)
let count = document.getElementById(`count`)
let number = 0;

button.addEventListener('click', function(){ 
    event.preventDefault();
    number++;
    count.textContent = number; 
});