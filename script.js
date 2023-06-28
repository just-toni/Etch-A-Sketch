let body = document.querySelector('body');
let main = document.createElement('main');
let aside = document.createElement('aside');
body.style.cssText = "display: flex; flex-direction: row;";
main.style.cssText = "display: flex; flex-wrap: wrap; border: black 10px solid; width: 457.7px; height: 458.7px;";
aside.style.cssText = "width: 30%; display: flex; flex-direction: column";

let randomColourBtn = document.createElement('button');
aside.appendChild(randomColourBtn);
randomColourBtn.textContent = "Random Color Individual Grid";
let randomColourBtn2 = document.createElement('button');
aside.appendChild(randomColourBtn2);
randomColourBtn2.textContent = "Random Color Entire Grid";
let defaultColourBtn = document.createElement('button');
aside.appendChild(defaultColourBtn);
defaultColourBtn.textContent = "Default Color";
let clearButton = document.createElement('button');
aside.appendChild(clearButton);
clearButton.textContent = "Clear Grid";
let eraserBtn = document.createElement('button');
aside.appendChild(eraserBtn);
eraserBtn.textContent = "Erase";
let darkenBtn = document.createElement('button');
aside.appendChild(darkenBtn);
darkenBtn.textContent = "Darken";
let lightenBtn = document.createElement('button');
aside.appendChild(lightenBtn);
lightenBtn.textContent = "Lighten";
body.appendChild(aside);
let textSizeControl = document.createElement('p');
textSizeControl.textContent = `16 x 16`;
aside.appendChild(textSizeControl);
let buttonsldercontainer = document.createElement('section');
let buttonslider = document.createElement('input');
buttonslider.setAttribute('type', 'range');
buttonslider.setAttribute('min', '1');
buttonslider.setAttribute('max', '100');
buttonslider.setAttribute('value', '16');
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
    innerSection.setAttribute('class', 'grid-sqaure')
    main.appendChild(innerSection);
}

randomColourBtn.addEventListener('click', randomColorGenerator2);
function randomColorGenerator2(e){
    document.querySelectorAll('section').forEach(element => {
        element.addEventListener('mouseover', e => {
            let first = Math.floor(Math.random()*255);
            let second = Math.floor(Math.random()*255);
            let third = Math.floor(Math.random()*255);
            let rgb = `rgb(${first}, ${second}, ${third})`;
            element.style.backgroundColor = rgb;
        });
    });
}

randomColourBtn2.addEventListener('click', randomColorGenerator);
function randomColorGenerator(e){
    let first = Math.floor(Math.random()*255);
    let second = Math.floor(Math.random()*255);
    let third = Math.floor(Math.random()*255);
    let rgb = `rgb(${first}, ${second}, ${third})`;
    document.querySelectorAll('section').forEach(element => {
        element.addEventListener('mouseover', e => {
            element.style.backgroundColor = rgb;
        });
    });
}

defaultColourBtn.addEventListener('click', e => {
    document.querySelectorAll('section').forEach(element => {
        element.addEventListener('mouseover', e => {
            element.style.backgroundColor = 'blue';
        });
    });
});

eraserBtn.addEventListener('click', e => {
    document.querySelectorAll('section').forEach(element => {
        element.addEventListener('click', e => {
            element.style.backgroundColor = 'white';
        });
    });
});

clearButton.addEventListener('click', e => {
    document.querySelectorAll('section').forEach(element => {
        element.style.backgroundColor = 'white';
    });
});

darkenBtn.addEventListener('click', e => {
    document.querySelectorAll('section').forEach(element => {
        element.addEventListener('click', e => {
            // element.style.filter = "brightness(0.1)";
            let valueColour = element.style.getPropertyValue('background-color');
            let brightness = 0.1;
            console.log(brightness);
            element.style.backgroundColor = valueColour;
            let counter = 0;
            while(counter < 10){
                element.style.filter = `brightness(${brightness})`;
                brightness += 0.1;
                console.log(brightness)
                counter++;
                console.log(counter);
            }
            // if(counter > 10){
            //     let errortext = document.createElement('p');
            //     document.querySelectorAll('button')[5].appendChild(errortext);
            //     errortext.textContent = "Color can't be darkened any further!";
            //     errortext.style.cssText = "color: red; font-size 16px";
            // }
        });
    });
});

// for (let index = 0; index < 4096; index++) {
//     let innerSection = document.createElement('div');
//     innerSection.style.cssText = "background-color: white; width: 7px; height: 7px; border: black 0.5px solid; ";
//     main.appendChild(innerSection);
//     innerSection.addEventListener('mouseover', e =>{
//         innerSection.style.backgroundColor = 'blue';
//     })
    // innerSection.addEventListener('mouseover', e => {

    // })
    // innerSection.addEventListener('mouseout', e =>{
    //     innerSection.style.backgroundColor = 'white';
    // })
// }
body.appendChild(main);