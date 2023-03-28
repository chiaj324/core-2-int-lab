let container = document.getElementById("container")

fetch("color.json")
.then(response => response.json())
.then(data => {
  console.log(data);
  processcolors(data);
})
.catch(error => console.log(error));


function sayHello(){
console.log('Hello');
}

function processcolors( data ){
data.forEach( function(item, index){
  console.log(item, index);
  let usage = item['general-usage'] * 10;
  console.log('usage', usage);
  let newItem = document.createElement("div");
  newItem.classList.add("icon");
  newItem.classList.add(item.categorykey);
  
  // newItem.style.cssText = `font-size: ${usage}px`;
  newItem.innerHTML = `
    <div class="nameofcolor">${item.nameofcolor}</div>
    <div class="hexvalue">${item.hexvalue}</div>`;
  container.appendChild(newItem);   
});
}