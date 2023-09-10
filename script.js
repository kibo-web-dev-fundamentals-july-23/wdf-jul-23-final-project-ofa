
// The hover and click color effect for the nav-bar
const nav = document.querySelectorAll('.nav-link')

nav.forEach(element=>{
    element.addEventListener('mouseenter', ()=>{
        element.style.color = '#FF74C6'
    })
    element.addEventListener('mouseout', ()=>{
        element.style.color = '#fff'
    })
    element.addEventListener('click', ()=>{
        element.style.color = '#CE047E'
    })
})

// The hover  and click color effect for the 'Get Started' button
const getStarted = document.querySelector('#border')

getStarted.addEventListener('mouseenter', ()=>{
    getStarted.style.color = '#fff'
    getStarted.style.background = '#FF74C6'
})
getStarted.addEventListener('mouseout', ()=>{
    getStarted.style.color = '#fff'
    getStarted.style.background = 'none'
})

getStarted.addEventListener('click', ()=>{
    getStarted.style.background = '#CE047E'
})

// The slideshow effect on the homepage
let cont = document.querySelector(`.conte`)
let slides = document.querySelectorAll(`.counter`)

slides.forEach(slide=>{
    let slideDisplay = slide.style
    slideDisplay. display = "none"
})

let count = 0
slides[count].style.display = 'none'

function handler(){
    slides[count].style.display = 'none'
    if(count<slides.length - 1){
        count+=1
    }
    else{
        count=0
    }
    slides[count].style.display = 'block'
}

setInterval(handler, 2000)
cont.addEventListener('DOMContentLoaded', handler)


// The click action that scrolls to the respective page that was clicked.
// For contact page
const contactPage = document.querySelector('.contact-page')
const contact = document.querySelector('#contact')

contact.addEventListener('click', ()=>{
    contactPage.scrollIntoView({
        behavior: 'smooth'
    })
})
// For Service page
const servicePage = document.querySelector('.service-page')
const service = document.querySelector('#service')

service.addEventListener('click', ()=>{
    servicePage.scrollIntoView({
        behavior: 'smooth'
    })
})

// For Team Page
const teamPage = document.querySelector('.team-page')
const team = document.querySelector('#team-button')

team.addEventListener('click', ()=>{
    teamPage.scrollIntoView({
        behavior: 'smooth'
    })
})

// For About page
const aboutPage = document.querySelector('.about-page')
const about = document.querySelector('#about-button')

about.addEventListener('click', ()=>{
    aboutPage.scrollIntoView({
        behavior: 'smooth'
    })
})


const inputDiv = document.getElementById('inputId');
const myInput = document.getElementById('input');
let isInputVisible = false; // check visibility

// Add an event listener to show/hide the input when clicking the div
inputDiv.addEventListener('click', (e) => {
    if (!isInputVisible) {
        myInput.style.display = 'block';
        myInput.focus(); // Set focus on the input
    } else {
        myInput.style.display = 'none';
    }

    isInputVisible = !isInputVisible;
});

// Add an event listener to prevent clicks on the input from propagating to the div
myInput.addEventListener('click', (e) => {
    e.stopPropagation();
});

// Add an event listener to hide the input when clicking anywhere else on the document
document.addEventListener('click', (e) => {
    if (isInputVisible && e.target !== inputDiv) {
        myInput.style.display = 'none';
        isInputVisible = false;
    }
});


// The last button on the website that scrolls to the home page when clicked
const up = document.querySelector(".last-icon")
const homepage = document.querySelector('.home')

up.addEventListener('click', ()=>{
    homepage.scrollIntoView({
        behavior: 'smooth'
    })
})

up.addEventListener('click', ()=>{
    element.style.background = '#ffffff'
})