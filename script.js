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
let errortext = document.createElement('p');
errortext.style.display = "none";
aside.appendChild(errortext);
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
    innerSection.style.cssText = "background: white; width: 27px; height: 27px; border: black 0.5px solid; ";
    innerSection.setAttribute('class', 'grid-sqaure')
    main.appendChild(innerSection);
}

randomColourBtn.addEventListener('click', randomColorGenerator2);
function randomColorGenerator2(e){
    document.querySelectorAll('section').forEach(element => {
        element.addEventListener('click', e => {
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
        element.addEventListener('click', e => {
            element.style.backgroundColor = rgb;
        });
    });
}

defaultColourBtn.addEventListener('click', e => {
    document.querySelectorAll('section').forEach(element => {
        element.addEventListener('mouseenter', e => {
            element.style.background = 'rgb(173,216,230)';
        });
    });
});

eraserBtn.addEventListener('click', e => {
    document.querySelectorAll('section').forEach(element => {
        element.addEventListener('click', e => {
            element.style.background = 'white';
            element.style.filter = "brightness(1)";
        });
    });
});

clearButton.addEventListener('click', e => {
    document.querySelectorAll('section').forEach(element => {
        element.style.background = 'white';
        element.style.filter = "brightness(1)";
    });
});


darkenBtn.addEventListener('click', e => {
    document.querySelectorAll('section').forEach(element => {
        let counter = 9;
        // let brightness = 100;
        element.addEventListener('click', e => {
            
            let elementColour = element.style.getPropertyValue('background');
            console.log(elementColour);
            if(counter < 1){
                document.querySelectorAll('p')[0].textContent = errortext;
                errortext.textContent = "Color can't be darkened any further!";
                errortext.style.cssText = "color: red; font-size 16px; display:inline;";
                setTimeout(() => {
                    errortext.style.display = "none";
                }, 4000);
                element.style.background = elementColour;
            }
            else{
                element.style.background = `color-mix(in srgb, ${elementColour} ${counter * 10}%, black)`;
            }
            counter--;
        });
    });
});

lightenBtn.addEventListener('click', e => {
    document.querySelectorAll('section').forEach(element => {
        let counter = 9;
        element.addEventListener('click', e => {
            let elementColour = element.style.getPropertyValue('background');
            console.log(elementColour);
            if(counter < 1){
                document.querySelectorAll('p')[0].textContent = errortext;
                errortext.textContent = "Color can't be lightened any further!";
                errortext.style.cssText = "color: red; font-size 16px; display:inline;";
                setTimeout(() => {
                    errortext.style.display = "none";
                }, 4000);
            }
            else{
                element.style.background = `color-mix(in srgb, ${elementColour} ${counter * 10}%, white)`;
            }
            counter--;        
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