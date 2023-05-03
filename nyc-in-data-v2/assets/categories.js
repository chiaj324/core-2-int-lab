const url = 'https://data.cityofnewyork.us/resource/tm6d-hbzd.json'

let localData = []
let incidents= {}

function parseData(data){
	// Go through each item in the object
	// Setup unique list of incidents
	console.log(data);
	incidents = {} // reset incidents object
    //first, sort the records by minute 
	data.forEach(record => {
        let minute_key = getMinute(record)+" min";
        if( incidents[ minute_key ]){
            //then you update an existing record
            incidents[ minute_key ].push(record);
        }else{
            incidents[ minute_key] = [ record ]
        }		
	});
   
    for(const minCount in incidents){
        let records = incidents[minCount];
        let sorted = {};
        records.forEach( record =>{
            if ( record.incident_type_desc ){
			//take a log of unique incidents
                if( record.incident_type_desc in sorted){
                    //code is already registered
                    sorted[  record.incident_type_desc ]++;
                }else{
                    //a new incident type
                    if (  record.incident_type_desc ){
                        sorted[  record.incident_type_desc ] = 1
                    }				
                }
            }else{
                //no incident type 
            }
        });
		incidents[minCount] = sorted;
    }

	return incidents;
}

function displayData( sortedData){
	console.log( sortedData )

	const container = document.getElementById('records');
	let html = '';
	
	// //get max count of all violations
	// let arr = Object.keys(incident).map( code =>{
	// 	return incident[code].count;
	// });
	// let max = Math.max(...arr);
	// console.log(max);

	for(const incident_type in sortedData ){
		let count = sortedData[incident_type]; // get incident
		//get ratio for comparison
		// let ratio = item.count/max //divide by the largest number to get a percentage
		html+=`<div class="record"">${incident_type}(${count})</div>`
	};

    container.innerHTML = html;
}

fetch(url+'?$limit=500&$$app_token=FtOOF1hdCIX9oqu7LDLZtwCcK')
	.then(response => response.json())
	.then(data => {
		localData = data // Save the data to our local variable, so we don’t have to re-request
		let sortedData =  parseData(localData);
        console.log(sortedData);
        displayData( sortedData )
		// setupFilters()
	});



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