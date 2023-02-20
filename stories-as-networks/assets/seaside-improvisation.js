let wrong = document.querySelector('.wrong'); //get element by id attribute
let first = document.querySelector('.first'); //get element by CSS seelector
let second = document.querySelector('.second');
wrong.addEventListener('click', function(){
    first.classList.toggle('firsteffect');
    second.classList.toggle('secondeffect');
});

let painted = document.querySelector('.painted'); //get element by id attribute
let windows = document.querySelector('.windows'); //get element by CSS seelector
painted.addEventListener('click', function(){
    windows.classList.toggle('paintedwindows');
});

let joy = document.querySelector('.joy'); //get element by id attribute
let alljoy = document.querySelector('.alljoy'); //get element by CSS seelector
joy.addEventListener('click', function(){
    alljoy.classList.toggle('joyshown');
});
