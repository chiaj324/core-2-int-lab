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
  let newItem = document.createElement("li");
  newItem.style.background = item.hexvalue
  newItem.classList.add("icon");
  // newItem.classList.add(item.box);
  
  // newItem.style.cssText = `font-size: ${usage}px`;
  newItem.innerHTML = `
    <span class="nameofcolor">${item.nameofcolor} ${item.hexvalue}</span>
  `;
  container.appendChild(newItem);   
});
}