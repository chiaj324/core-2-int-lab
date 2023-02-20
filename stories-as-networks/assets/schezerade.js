let trigger = document.getElementById('trigger'); //get element by id attribute
let target = document.querySelector('.target'); //get element by CSS seelector
trigger.addEventListener('click', function(){
    target.classList.toggle('effect');
});

let trigger2 = document.getElementById('trigger2'); //get element by id attribute
let target2 = document.querySelector('.target2'); //get element by CSS seelector
trigger2.addEventListener('click', function(){
    console.log('trigger2 clicked');
    target2.classList.toggle('effect');
});

let trigger3 = document.getElementById('trigger3'); //get element by id attribute
let target3 = document.querySelector('.target3'); //get element by CSS seelector
trigger3.addEventListener('click', function(){
    target3.classList.toggle('effect');
});