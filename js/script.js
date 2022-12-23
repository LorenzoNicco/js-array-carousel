/*
    STEPS
    MILESTONE 1
        1. Inizio
        2. Creare la struttura base in html
        3. Inserire un'immagine grande al suo interno
        4. Stabilire la stilizzazione tramite css
    MILESTONE 2
        1. Rimuovere il markup statico
        2. Ricreare la struttura usando js
        3. Creare un array di immagini
        4. Inserire l'array in un ciclo per concatenare le immagini
        5. Assegnare una classe con display block solo alla prima immagine, le altre saranno display none
    MILESTONE 3
        1. Creare i bottoni per lo scorrimento delle immagini
        2. Creare un costrutto per ciascuno dei bottoni in modo che ad ogni click l'immagine mostrata cambi
*/

// MILESTONE 2
// ricreazione struttura
const body = document.querySelector('body');
const main = document.createElement('main');
body.append(main);
let carouselDiv = document.createElement('div');
carouselDiv.className = ' carousel';
main.append(carouselDiv);
console.log('Debug ok');

let subCarousel = document.createElement('div');
carouselDiv.append(subCarousel);
console.log('Debug ok');

const pics = ["consegna/img/01.webp",
              "consegna/img/02.webp",
              "consegna/img/03.webp",
              "consegna/img/04.webp",
              "consegna/img/05.webp"]
;
console.log(pics);

let appearSlide = 0;

for (let i = 0; i < pics.length; i++) {
    console.log(pics[i]);
    subCarousel.innerHTML += `<div class="slides">
                                <img src="${pics[i]}">
                            </div>`;
    console.log('Debug ok');
}

let slidesGroup = document.querySelectorAll('.slides');
slidesGroup[appearSlide].classList.add('appear');
console.log('slidesGroup', slidesGroup[appearSlide], appearSlide);

let buttonsDiv = document.createElement('div');
buttonsDiv.className = 'buttons';
subCarousel.append(buttonsDiv);
console.log('Debug ok');

buttonsDiv.innerHTML = `<button class="back"><</button>
    
                        <button class="forward">></button>`
;

// MILESTONE 3
const forwardButton = document.querySelector('.forward');
console.log('forwardButton');

forwardButton.addEventListener('click', 
    function () {
        console.log('Cliccato avanti');
        slidesGroup[appearSlide].classList.remove('appear');
        appearSlide = appearSlide + 1;
        slidesGroup[appearSlide].classList.add('appear');
    }
);

const backButton = document.querySelector('.back');
console.log('backButton');

backButton.addEventListener('click', 
    function () {
        console.log('Cliccato avanti');
        slidesGroup[appearSlide].classList.remove('appear');
        appearSlide = appearSlide - 1;
        slidesGroup[appearSlide].classList.add('appear');
    }
);