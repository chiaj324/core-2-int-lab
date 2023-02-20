let trigger1 = document.getElementById('trigger1'); //get element by id attribute
let trigger2 = document.getElementById('trigger2');
let body = document.querySelector('body'); //get element by CSS seelector
trigger1.addEventListener('mouseleave', function(){
    body.classList.toggle('undo')
})
trigger1.addEventListener('mouseover', function(){
    body.classList.toggle('effect');
})
trigger2.addEventListener('mouseleave', function(){
    body.classList.toggle('undo')
})
trigger2.addEventListener('mouseover', function(){
    body.classList.toggle('effect');
})