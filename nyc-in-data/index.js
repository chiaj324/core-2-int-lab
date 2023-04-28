const url = 'https://data.cityofnewyork.us/resource/tm6d-hbzd.json'

let container = document.getElementById("data")

let plusbutton = document.querySelector('.plus');
let timer =  document.querySelector('.time');
let time = 1;
plusbutton.addEventListener ('click', function(){
    //make timer go up
    // time = time+1;
    time++;
    timer.innerHTML = time;
});

let minusbutton = document.querySelector('.minus');
minusbutton.addEventListener ('click', function(){
    time--;
    timer.innerHTML = time;
})



fetch(url+'?$limit=50000&$$app_token=FtOOF1hdCIX9oqu7LDLZtwCcK')
	.then(response => response.json())
	.then(data => {
		localData = data // Save the data to our local variable, so we don’t have to re-request
		displayData( parseData(localData) ) //parse, thhen display data
		setupFilters()
	});