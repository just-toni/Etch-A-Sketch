let body = document.querySelector('body');
let outer_div = document.createElement('div');

outer_div.style.cssText = "display: flex; flex-wrap: wrap; border: black 10px solid; width: 457.7px; height: 458.7px; margin: 12% 35%";
for (let index = 0; index < 256; index++) {
    let innerdiv = document.createElement('div');
    innerdiv.style.cssText = "background-color: white; width: 27px; height: 27px; border: black 0.5px solid; ";
    outer_div.appendChild(innerdiv);
    innerdiv.addEventListener('mouseover', e =>{
        innerdiv.style.backgroundColor = 'blue';
    })
}
body.appendChild(outer_div);