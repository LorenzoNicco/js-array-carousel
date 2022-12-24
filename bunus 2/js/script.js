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

let subCarousel = document.createElement('div');
carouselDiv.append(subCarousel);

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

const sideDiv = document.createElement('div');
subCarousel.append(sideDiv);
sideDiv.className = ' side';

sideDiv.innerHTML = `<div class="side-slide">
                        <div class="dark-div"></div>
                        <img src="consegna/img/01.webp" class="side-pic">
                     </div>
                     <div class="side-slide">
                        <div class="dark-div"></div>
                        <img src="consegna/img/02.webp" class="side-pic">
                     </div>
                     <div class="side-slide">
                        <div class="dark-div"></div>
                        <img src="consegna/img/03.webp" class="side-pic">
                     </div>
                     <div class="side-slide">
                        <div class="dark-div"></div>
                        <img src="consegna/img/04.webp" class="side-pic">
                     </div>
                     <div class="side-slide">
                        <div class="dark-div"></div>
                        <img src="consegna/img/05.webp" class="side-pic">
                     </div>

                     <div class="buttons">
                        <button class="back">^</button>
    
                        <button class="forward">v</button>
                     </div>
                            `
;

let darkDiv = document.querySelectorAll('.dark-div');
darkDiv[appearSlide].classList.add('disappear');

let borderPic = document.querySelectorAll('.side-pic');
borderPic[appearSlide].classList.add('.border-select');

// MILESTONE 3
const forwardButton = document.querySelector('.forward');

forwardButton.addEventListener('click', 
    function () {
        if (appearSlide < slidesGroup.length - 1) {
            slidesGroup[appearSlide].classList.remove('appear');
            darkDiv[appearSlide].classList.remove('disappear');
            borderPic[appearSlide].classList.remove('border-select');

            appearSlide = appearSlide + 1;

            slidesGroup[appearSlide].classList.add('appear');
            darkDiv[appearSlide].classList.add('disappear');
            borderPic[appearSlide].classList.add('border-select');
            console.log('Cliccato avanti', appearSlide);
        }
        else {
            slidesGroup[appearSlide].classList.remove('appear');
            darkDiv[appearSlide].classList.remove('disappear');
            borderPic[appearSlide].classList.remove('border-select');

            appearSlide = 0;

            slidesGroup[appearSlide].classList.add('appear');
            darkDiv[appearSlide].classList.add('disappear');
            borderPic[appearSlide].classList.add('border-select');
            console.log('Cliccato avanti', appearSlide);
        }
    }
);

const backButton = document.querySelector('.back');

backButton.addEventListener('click', 
    function () {
        if (appearSlide > 0) {
            slidesGroup[appearSlide].classList.remove('appear');
            darkDiv[appearSlide].classList.remove('disappear');
            borderPic[appearSlide].classList.remove('border-select');

            appearSlide = appearSlide - 1;

            slidesGroup[appearSlide].classList.add('appear');
            darkDiv[appearSlide].classList.add('disappear');
            borderPic[appearSlide].classList.add('border-select');
            console.log('Cliccato avanti', appearSlide);
        }
        else if (appearSlide == 0) {
            slidesGroup[appearSlide].classList.remove('appear');
            darkDiv[appearSlide].classList.remove('disappear');
            borderPic[appearSlide].classList.remove('border-select');

            appearSlide = slidesGroup.length - 1;

            slidesGroup[appearSlide].classList.add('appear');
            darkDiv[appearSlide].classList.add('disappear');
            borderPic[appearSlide].classList.add('border-select');
            console.log('Cliccato avanti', appearSlide);
        }
    }
);