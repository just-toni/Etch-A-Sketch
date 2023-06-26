let body = document.querySelector('body');
let outer_div = document.createElement('div');
let buttonsldercontainer = document.createElement('section');
let buttonslider = document.createElement('input');
let textSizeControl = document.createElement('p');
body.appendChild(textSizeControl);
let aside = document.createElement('aside');
let randomColourBtn = document.createElement('button');
let defaultColourBtn = document.createElement('button');
let clearButton = document.createElement('button');
let eraserBtn = document.createElement('button');
buttonslider.setAttribute('type', 'range');
buttonslider.setAttribute('min', '1');
buttonslider.setAttribute('max', '100');
buttonslider.addEventListener('input', getValue);
function getValue(e){
    textSizeControl.textContent = `${buttonslider.value} x ${buttonslider.value}`;
}
buttonslider.style.cssText = "width: 100px; height: 25px; background: grey; outline: none; opacity: 0.7;";
buttonsldercontainer.appendChild(buttonslider);
body.appendChild(buttonslider);

outer_div.style.cssText = "display: flex; flex-wrap: wrap; border: black 10px solid; width: 457.7px; height: 458.7px; margin: 12% 35%";
for (let index = 0; index < 256; index++) {
    let innerdiv = document.createElement('div');
    innerdiv.style.cssText = "background-color: white; width: 27px; height: 27px; border: black 0.5px solid; ";
    outer_div.appendChild(innerdiv);
    innerdiv.addEventListener('mouseover', e =>{
        innerdiv.style.backgroundColor = 'blue';
    });
    // innerdiv.addEventListener('mouseout', e =>{
    //     innerdiv.style.backgroundColor = 'white';
    // })
}

// for (let index = 0; index < 4096; index++) {
//     let innerdiv = document.createElement('div');
//     innerdiv.style.cssText = "background-color: white; width: 7px; height: 7px; border: black 0.5px solid; ";
//     outer_div.appendChild(innerdiv);
//     innerdiv.addEventListener('mouseover', e =>{
//         innerdiv.style.backgroundColor = 'blue';
//     })
// }
body.appendChild(outer_div);