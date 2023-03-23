let container = document.getElementById("container");

fetch('elastic-collections.json')
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
        <div class="image height-${item.class}"><img src="assets/imgs/${item.image}"></div>
        <div class="year">${item.year}</div>
        <div class="title">${item.title}</div>
        <div class="director">${item.director}</div>
        <div class="budget">${item.budget}</div>
        <div class="boxoffice">${item.boxoffice}</div>
        <div class="rottentomatoes">${item.rottentomatoes}</div>`;
      container.appendChild(newItem);    
    });
    container.appendChild(newItem); 
    newItem.addEventListener('click', function(){
      newItem.classList.toggle("active");
    });   
}
