let container = document.getElementById("container");

fetch('display-data.json')
  .then(response => response.json())
  .then(data => {
    console.log(data);
    displayData(data);
  })
  .catch(error => console.log(error));

function displayData( data ){
    data.forEach( function(item, index){
      console.log(item, index);
      let newItem = document.createElement("div");
      newItem.classList.add("icon");
      newItem.innerHTML = `
        <div class="title">${item.title}</div>
        <div class="score">${item.score}</div>
        <div class="length">${item.length}</div>`;
      container.appendChild(newItem);    
    });
}