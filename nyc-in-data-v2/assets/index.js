let container = document.getElementById("data")
let incident = {}

let plusbutton = document.querySelector('.plus');
let timer =  document.querySelector('.mins');
let counter = 1;
plusbutton.addEventListener ('click', function(){
    //make timer go up
    // time = time+1;
    counter++;
    timer.innerHTML = counter;
    console.log(counter);

    //remove showed items
    let shown = document.querySelectorAll('.show');
    shown.forEach( hide=>{
        hide.classList.remove('show');
    });


    let rows = document.querySelectorAll('.time'+counter);
    rows.forEach( row=>{
        row.classList.add('show');
    });
});



let minusbutton = document.querySelector('.minus');
minusbutton.addEventListener ('click', function(){
    counter--;
    timer.innerHTML = counter;
    console.log(counter);
    let shown = document.querySelectorAll('.show');
    shown.forEach( hide=>{
        hide.classList.remove('show');
    });


    let rows = document.querySelectorAll('.time'+counter);
    rows.forEach( row=>{
        row.classList.add('show');
    });
})

// Do something with the data!
function parseData(data){
	// Go through each item in the object
	// Setup unique list of violations
	console.log(data);
	incident = {} // reset violations object
	data.forEach(record => {
		if ( record.incident_type_desc ){
			//take a log of unique violations
			if( record.code in incident){
				//code is already registered
				incident[ record.code ].count ++;
			}else{
				//a new violation
				if ( record.code ){
					incident[ record.code ] = {
						description: record.incident_type_desc,
						count: 1,
					}
				}				
			}
		}else{
			//no violations
		}
		
	});

	return incident;
}

function displayData( incident, data ){
    console.log(incident);

    const categories = document.getElementById('categories');
    let html = '';

    let arr = Object.keys(incident).map( code =>{
        return incident[code].count;
    });
    let max = Math.max(...arr);
    console.log(max);

    let newItem = document.createElement("div");
    newItem.classList.add('row');
    for(const code in incident){
        let item = incident[code];
        let ratio = item.count/max
		html+=`<div class="incident">${item.description}(${item.count})</div>`
	};

	categories.innerHTML = html;}

    {data.forEach( function(item, index){
        let time = getMinute(item);
        // console.log(item, index, time);
        let newItem = document.createElement("div");
        newItem.classList.add('row');
        newItem.classList.add(`time${time}`);
        newItem.innerHTML = `
          <div class = "piece">  ${item.incident_type_desc} </div>
          <div class = "piece">   ${item.incident_date_time} </div>
          <div class = "piece">   ${item.arrival_date_time} </div>
          <div class = "piece">   ${item.action_taken1_desc} </div>
          <div class = "piece">   ${item.zip_code} </div>
          <div class = "piece">   ${item.borough_desc} </div> 
        `;

        container.appendChild(newItem);
    });
}

// function displayData( data ){
//     data.forEach( function(item, index){
//         let time = getMinute(item);
//         // console.log(item, index, time);
//         let newItem = document.createElement("div");
//         newItem.classList.add('row');
//         newItem.classList.add(`time${time}`);
//         newItem.innerHTML = `
//           <div class = "piece">  ${item.incident_type_desc} </div>
//           <div class = "piece">   ${item.incident_date_time} </div>
//           <div class = "piece">   ${item.arrival_date_time} </div>
//           <div class = "piece">   ${item.action_taken1_desc} </div>
//           <div class = "piece">   ${item.zip_code} </div>
//           <div class = "piece">   ${item.borough_desc} </div> 
//         `;

//         container.appendChild(newItem);
//     });
// }






// let categories = document.getElementById("categories")

// categories = {};
// for (var i = 0; i < data.length; i++) {
//     var item = data[i];
//     var incident = item.incident_type_desc;
//     if (!(incident in categories)) categories[incident] = [];
//     categories[incident].push(item);
// }

// console.log(categories)


function getMinute(item){
    let duration = item.total_incident_duration;
    let time = 15;
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
    else if (duration > 600 && duration < 660) time = 11
    else if (duration > 660 && duration < 720) time = 12
    else if (duration > 720 && duration < 780) time = 13
    else if (duration > 780 && duration < 840) time = 14
    else if (duration > 840 && duration < 900) time = 15
    else{
        // console.log(item, 'this one is longer than 10 minutes')
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
