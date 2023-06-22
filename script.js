let body = document.querySelector('body');
let outer_div = document.createElement('div');

outer_div.style.cssText = "display: flex; justify-content: space-between; flex-wrap: wrap; margin: 40px 350px; background-color: black";
for (let index = 0; index < 256; index++) {
    let innerdiv = document.createElement('div');
    // innerdiv.textContent = "I am a div";
    // innerdiv.style.backgroundColor = "blue";
    innerdiv.style.cssText = "background-color: white; margin: 10px; width: 30px; height: 30px";
    outer_div.appendChild(innerdiv);
}
body.appendChild(outer_div);