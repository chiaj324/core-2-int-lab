const url = "https://data.cityofnewyork.us/resource/tm6d-hbzd.json";

let container = document.getElementById("data");
let incidents = {};

let plusbutton = document.querySelector(".plus");
let timer = document.querySelector(".mins");
let counter = 1;
plusbutton.addEventListener("click", function () {
  //make timer go up
  // time = time+1;
  counter++;
  timer.innerHTML = counter;
  console.log(counter);

  //remove showed items
  let shown = document.querySelectorAll(".show");
  shown.forEach((hide) => {
    hide.classList.remove("show");
  });

  let rows = document.querySelectorAll(".time" + counter);
  rows.forEach((row) => {
    row.classList.add("show");
  });
});

let minusbutton = document.querySelector(".minus");
minusbutton.addEventListener("click", function () {
  counter--;
  timer.innerHTML = counter;
  console.log(counter);
  let shown = document.querySelectorAll(".show");
  shown.forEach((hide) => {
    hide.classList.remove("show");
  });

  let rows = document.querySelectorAll(".time" + counter);
  rows.forEach((row) => {
    row.classList.add("show");
  });
});

function parseData(data) {
  // Go through each item in the object
  // Setup unique list of incidents
  console.log(data);
  incidents = {}; // reset incidents object
  //first, sort the records by minute
  data.forEach((record) => {
    let minute_key = getMinute(record) + " min";
    if (incidents[minute_key]) {
      //then you update an existing record
      incidents[minute_key].push(record);
    } else {
      incidents[minute_key] = [record];
    }
  });

  for (const minCount in incidents) {
    let records = incidents[minCount];
    let sorted = {};
    records.forEach((record) => {
      if (record.incident_type_desc) {
        //take a log of unique incidents
        if (record.incident_type_desc in sorted) {
          //code is already registered
          sorted[record.incident_type_desc]++;
        } else {
          //a new incident type
          if (record.incident_type_desc) {
            sorted[record.incident_type_desc] = 1;
          }
        }
      } else {
        //no incident type
      }
    });
    incidents[minCount] = sorted;
  }

  return incidents;
}

function displayData(sortedData) {
  for (const minutes in sortedData) {
    let time = parseInt(minutes); // get number from "nn min", e.g. 15 min = 15

    let newItem = document.createElement("div");
    newItem.classList.add("row");
    newItem.classList.add(`time${time}`);
    let incidents_descs = sortedData[minutes]; // get incident
    let count = 0;

    console.log("== LIST for " + minutes + " ===");

    for (let incidents_desc in incidents_descs) {
      count = incidents_descs[incidents_desc];
      console.log(`incidents_desc= ${incidents_desc}`);
    
     let fontsize = 5 + (count/128)*200;
      newItem.innerHTML += `<div class = "piece" style="font-size: ${fontsize}px;
      width:${count * 50}px; height:${count * 40}px">${incidents_desc} (${count})
        </div>`;
      container.appendChild(newItem);
    }
  }
}

// function displayData(sortedData) {
//   console.log(sortedData);

//   const container = document.getElementById("categories");
//   let html = "";

//   for (const incidents in sortedData) {
//     let incidents_descs = sortedData[incidents]; // get incident
//     let count = 0;
//     for (const incidents_desc in incidents_descs) {
//       count += incidents_descs[incidents_desc];
//     }

//     let incidents_desc = JSON.stringify(sortedData[incidents]);
//     html += `<div class="incident">${incidents} (${count})</div>`;
//     html += `<div class="incidents_desc">${incidents_desc}</></div>`;
//     html += `<br/>`;
//   }

//   container.innerHTML = html;
// }

function getMinute(item) {
  let duration = item.total_incident_duration;
  let time = 15;
  if (duration > 0 && duration < 60) time = 1;
  else if (duration > 60 && duration < 120) time = 2;
  else if (duration > 120 && duration < 180) time = 3;
  else if (duration > 180 && duration < 240) time = 4;
  else if (duration > 240 && duration < 300) time = 5;
  else if (duration > 300 && duration < 360) time = 6;
  else if (duration > 360 && duration < 420) time = 7;
  else if (duration > 420 && duration < 480) time = 8;
  else if (duration > 480 && duration < 540) time = 9;
  else if (duration > 540 && duration < 600) time = 10;
  else if (duration > 600 && duration < 660) time = 11;
  else if (duration > 660 && duration < 720) time = 12;
  else if (duration > 720 && duration < 780) time = 13;
  else if (duration > 780 && duration < 840) time = 14;
  else if (duration > 840 && duration < 900) time = 15;
  else if (duration > 900 && duration < 960) time = 16;
  else if (duration > 960 && duration < 1020) time = 17;
  else if (duration > 1020 && duration < 1080) time = 18;
  else if (duration > 1080 && duration < 1140) time = 19;
  else if (duration > 1140 && duration < 1200) time = 20;
  else {
    // console.log(item, 'this one is longer than 10 minutes')
  }
  return time;
}

function setupFilters() {
  let options = time;
  options.forEach((option) => {
    option.addEventListener("click", function () {
      let time = option.innerText;
      // console.log(borough);
      if (time == 0) {
        displayData(parseData(localData));
      } else {
        filterData(time);
      }
    });
  });
}

fetch(url + "?$limit=500&$$app_token=FtOOF1hdCIX9oqu7LDLZtwCcK")
  .then((response) => response.json())
  .then((data) => {
    localData = data; // Save the data to our local variable, so we don’t have to re-request
    let sortedData = parseData(localData);
    console.log(sortedData);
    displayData(sortedData);
    // setupFilters()
  });