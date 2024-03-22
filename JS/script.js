// Consegna:
// Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello come nella foto allegata.

// Milestone 0:
// Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.

// Milestone 1:
// Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
// Al click dell'utente sulle frecce verso alto o basso, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

// Milestone 2:
// Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.


const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let activeImg = 0

//appena apro la la pagina mi trovo davanti i contenuti appesi al carosello
const imageContainer = document.querySelector(`#img-container`);
const thumbnailContainer = document.querySelector(`#thumbnail-container`);



images.forEach((theme) => {
    //inserisco gli oggetti dell'array images nell'immagine grande del carosello con le chiavi corrette
    let largeImg = `
    <div class="image">
        <img src="./${theme.image}" alt="">
        <div class="description" >
            <h1>${theme.title}</h1>
            <h3>${theme.text}</h3>
        </div>
    </div>
    `;
    console.log(theme.image)
    imageContainer.innerHTML += largeImg; 
    
    //inserisco gli oggetti dell'array images nelle thumbnails del carosello 
    let thumbnailImg = `
    <div class="col-5"><img src="./${theme.image}" alt=""></div>
    `;

    thumbnailContainer.innerHTML += thumbnailImg;
    console.log(theme)
});

//aggiungo la classe active alla prima immagine
const allImages = document.querySelectorAll(`.image`);
allImages[0].classList.add('image-active');

//aggiungo la classe active alla prima thumbnail
const allThumbnails = document.querySelectorAll(`.col-5`);
allThumbnails[0].classList.add(`thumbnail-active`)

//aggiungo un click event sulle frecce

const arrowDown = document.querySelector(`#arrow-down`);
arrowDown.addEventListener('click', function() {
    //quando clicco tolgo la classe image-active a allImages[0] e tolgo la classe thumbnail-active a a allThumbnails[0]
    document.querySelector(`.image.image-active`).classList.remove('image-active');
    document.querySelector(`.col-5.thumbnail-active`).classList.remove('thumbnail-active');

    if(activeImg < images.length - 1){
        activeImg++
    }else{
        activeImg = 0
    }
    
    allImages[activeImg].classList.add('image-active');
    allThumbnails[activeImg].classList.add(`thumbnail-active`)

})

const arrowUp = document.querySelector(`#arrow-up`);
arrowUp.addEventListener('click', function() {
    document.querySelector(`.image.image-active`).classList.remove('image-active');
    document.querySelector(`.col-5.thumbnail-active`).classList.remove('thumbnail-active');

    if(activeImg > 0) {
        activeImg--;
    } else {
        activeImg = images.length - 1;
    }

    allImages[activeImg].classList.add('image-active');
    allThumbnails[activeImg].classList.add('thumbnail-active');

})