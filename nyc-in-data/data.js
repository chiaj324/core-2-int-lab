let container = document.getElementById("data")

let plusbutton = document.querySelector('.plus');
let timer =  document.querySelector('.time');
let time = 1;
plusbutton.addEventListener ('click', function(){
    //make timer go up
    // time = time+1;
    time++;
    timer.innerHTML = time;
    let rows = document.querySelectorAll('.time1');
    rows.forEach( row=>{
        row.classList.add('show');
    });
});



let minusbutton = document.querySelector('.minus');
minusbutton.addEventListener ('click', function(){
    time--;
    timer.innerHTML = time;
    let rows = document.querySelectorAll('.time1');
    rows.forEach( row=>{
        row.classList.add('show');
    });
})


// fetch ('https://data.cityofnewyork.us/resource/tm6d-hbzd.json')
//     .then(response => response.json())
//     .then(data => {
//         displayData(data);
//     })
//     .catch(error => console.log(error));



function displayData( data ){
    data.forEach( function(item, index){
        let time = getMinute(item);
        // console.log(item, index, time);
        let newItem = document.createElement("div");
        newItem.classList.add('item');
        newItem.innerHTML = `
        <div class = "rows time${time}">
          <div class = "piece">  ${item.incident_type_desc} </div>
          <div class = "piece">   ${item.incident_date_time} </div>
          <div class = "piece">   ${item.arrival_date_time} </div>
          <div class = "piece">   ${item.action_taken1_desc} </div>
          <div class = "piece">   ${item.zip_code} </div>
          <div class = "piece">   ${item.borough_desc} </div>
          </div>  
        `;

        container.appendChild(newItem);
    });
}

let categories = document.getElementById("categories")

function getMinute(item){
    let duration = item.total_incident_duration;
    if (duration > 0 && duration < 60) time = 1
    else if (duration > 60 && duration < 120) time = 2
    else if (duration > 120 && duration < 180) time = 3
    else if (duration > 180 && duration < 240) time = 4
    else if (duration > 240 && duration < 300) time = 5
    else if (duration > 300 && duration < 360) time = 6
    else if (duration > 360 && duration < 420) time = 7
    else if (duration > 420 && duration < 480) time = 8
    else if (duration > 480 && duration < 540) time = 9
    else if (duration > 540 && duration < 600) time = 10
    else{
        console.log(item, 'this one is longer than 10 minutes')
    }
    return time;
}

// const parseData = (data) => {
//     // Go through each item in the object
// 	data.forEach(item => {
//         let duration = item.total_incident_duration;
// 		if (item.total_incident_duration > 0 && total_incident_duration < 60) time = 1
// 		else if (total_incident_duration > 60 && total_incident_duration < 120) time = 2
//         else if (total_incident_duration > 120 && total_incident_duration < 180) time = 3
//         else if (total_incident_duration > 180 && total_incident_duration < 240) time = 4
//         else if (total_incident_duration > 240 && total_incident_duration < 300) time = 5
//         else if (total_incident_duration > 300 && total_incident_duration < 360) time = 6
//         else if (total_incident_duration > 360 && total_incident_duration < 420) time = 7
//         else if (total_incident_duration > 420 && total_incident_duration < 480) time = 8
//         else if (total_incident_duration > 480 && total_incident_duration < 540) time = 9
//         else if (total_incident_duration > 540 && total_incident_duration < 600) time = 10
//         else{
//             console.log(item, 'this one is longer than 10 minutes')
//         }
// 	})
// }

function setupFilters(){
	let options = time;
	options.forEach( option=>{
		option.addEventListener('click', function(){
			let time = option.innerText;
			// console.log(borough);
			if( time == 0){
				displayData( parseData(localData) );
			}else{
				filterData( time );
			}
			
		});
	})
}



const url = 'https://data.cityofnewyork.us/resource/tm6d-hbzd.json';
fetch(url+'?$limit=500&$$app_token=FtOOF1hdCIX9oqu7LDLZtwCcK')
	.then(response => response.json())
	.then(data => {
        console.log(data);
		localData = data // Save the data to our local variable, so we don’t have to re-request
		displayData( localData ) //display data
		// setupFilters()
	});




// let minutes = document.querySelector('.mins');
// let time = 1;
// plusbutton.addEventListener ('click', function(){
//     time = time+1
//     minutes.innerHTML = time
// })



