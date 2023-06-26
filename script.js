let body = document.querySelector('body');
let main = document.createElement('main');
let aside = document.createElement('aside');
body.style.cssText = "display: flex; flex-direction: row;";
// main.style.cssText = "width: 70%";
main.style.cssText = "display: flex; flex-wrap: wrap; border: black 10px solid; width: 457.7px; height: 458.7px;";
aside.style.cssText = "width: 30%; display: flex; flex-direction: column";

let randomColourBtn = document.createElement('button');
aside.appendChild(randomColourBtn);
let defaultColourBtn = document.createElement('button');
aside.appendChild(defaultColourBtn);
let clearButton = document.createElement('button');
aside.appendChild(clearButton);
let eraserBtn = document.createElement('button');
aside.appendChild(eraserBtn);
body.appendChild(aside)
let textSizeControl = document.createElement('p');
textSizeControl.textContent = `16 x 16`;
aside.appendChild(textSizeControl);
let buttonsldercontainer = document.createElement('section');
let buttonslider = document.createElement('input');
buttonslider.setAttribute('type', 'range');
buttonslider.setAttribute('min', '1');
buttonslider.setAttribute('max', '100');
buttonslider.addEventListener('input', getValue);
function getValue(e){
    textSizeControl.textContent = `${buttonslider.value} x ${buttonslider.value}`;
}
buttonslider.style.cssText = "width: 100px; height: 25px; background: grey; outline: none; opacity: 0.7;";
buttonsldercontainer.appendChild(buttonslider);
aside.appendChild(buttonslider);

for (let index = 0; index < 256; index++) {
    let innerSection = document.createElement('section');
    innerSection.style.cssText = "background-color: white; width: 27px; height: 27px; border: black 0.5px solid; ";
    main.appendChild(innerSection);
    innerSection.addEventListener('mouseover', e =>{
        innerSection.style.backgroundColor = 'blue';
    });
    // innerSection.addEventListener('mouseout', e =>{
    //     innerSection.style.backgroundColor = 'white';
    // })
}

// for (let index = 0; index < 4096; index++) {
//     let innerSection = document.createElement('div');
//     innerSection.style.cssText = "background-color: white; width: 7px; height: 7px; border: black 0.5px solid; ";
//     main.appendChild(innerSection);
//     innerSection.addEventListener('mouseover', e =>{
//         innerSection.style.backgroundColor = 'blue';
//     })
// }
body.appendChild(main);