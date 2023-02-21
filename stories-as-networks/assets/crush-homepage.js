let schezerade = document.getElementById('schezerade'); //get element by id attribute
let seasideimprovisation = document.getElementById('seasideimprovisation');
let thetornuproad = document.getElementById('thetornuproad');
let sayingyournames = document.getElementById('sayingyournames');
let planetoflove = document.getElementById('planetoflove');
let body = document.querySelector('body'); //get element by CSS seelector

schezerade.addEventListener('mouseleave', function(){
    body.classList.toggle('undo')
})
schezerade.addEventListener('mouseover', function(){
    body.classList.toggle('effect');
})
seasideimprovisation.addEventListener('mouseleave', function(){
    body.classList.toggle('undo')
})
seasideimprovisation.addEventListener('mouseover', function(){
    body.classList.toggle('effect');
})
thetornuproad.addEventListener('mouseleave', function(){
    body.classList.toggle('undo')
})
thetornuproad.addEventListener('mouseover', function(){
    body.classList.toggle('effect');
})
sayingyournames.addEventListener('mouseleave', function(){
    body.classList.toggle('undo')
})
sayingyournames.addEventListener('mouseover', function(){
    body.classList.toggle('effect');
})
planetoflove.addEventListener('mouseleave', function(){
    body.classList.toggle('undo')
})
planetoflove.addEventListener('mouseover', function(){
    body.classList.toggle('effect');
})