let trigger = document.getElementById('trigger'); //get element by id attribute
let target = document.querySelector('.target'); //get element by CSS seelector
trigger.addEventListener('click', function(){
    target.classList.toggle('effect');
});

// if using jQuery, the above code will look like
// make sure you are loading jQuery in your <head> with a script tag
// uncomment the CDN link

// $(document).ready(function(){
//     $('#trigger').click(function(){
//         $('.target').toggleClass('effect');
//     })
// });