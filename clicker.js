let button = document.getElementById(`button`)
let output = document.getElementById(`output`)
let count = document.getElementById(`count`)
let number = 0;

button.addEventListener('click', function(){ 
    event.preventDefault();
    number++;
    count.textContent = number; 

    if (number===10) {
        output.textContent = `You're just getting started!`
        document.body.style.backgroundColor = `pink`
        
    } 

    if (number===25) {
        output.textContent = `Woah! That's a lot of cookies!`
        document.body.style.backgroundColor = `#d13b38ff`
    } 
    if (number===50) {
        output.textContent = `Are you still clicking?`
        document.body.style.backgroundColor = `red`        
    } 

    if (number===100) {
        output.textContent = `You win! Maybe take a break?`
        document.body.style.backgroundColor = `gray`        
    } 
});