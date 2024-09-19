const reviews = [
    {
        id: 1,
        img: './assets/person-1.jpg',
        name: 'Jamal Smith',
        job: 'WEB DEVELOPER',
        description: "Hi! My name's Jamal Smith. I'm a Web Developer whose focus is mostly technologies such as: Javascript, Java, PHP, React, React Native, Ruby, PostGreSQL and many more!",

    },
    {
        id: 2,
        name: "Thomas Johnson",
        job: "UX DESIGNER",
        img: "./assets/person-2.jpg",
        description: "Hi! My name's Tom Johnson. I'm a Ux Designer that enjoys making fresh new designs out of the pocket! So feel free to explore my crazy ideas through my portfolium!"

    },
    {
        id: 3,
        name: "Douglas Oliver",
        job: "JAVA DEVELOPER",
        img: "./assets/person-3.jpg",
        description: "Hi! My name's Doug Oliver. I'm a Java Developer within the company and I'm currently going to my fourth year in here! Awesome right? The company is great and I recommend it a lot!"

    },
]

const personImg = document.getElementById('person-1');
const personName = document.getElementById('person-1-name');
const personJob = document.getElementById('person-1-job');
const personDescription = document.getElementById('person-1-description');

const prevBtn = document.getElementById('left-arrow');
const nextBtn = document.getElementById('right-arrow');
const randomBtn = document.getElementById('person-1-btn');

let getCurrentIndex = 2;

window.addEventListener('DOMContentLoaded', () => {
    getCurrentPerson();
});

function getCurrentPerson() {
    let currentIndex = reviews[getCurrentIndex];
    personImg.src = currentIndex.img;
    personName.textContent = currentIndex.name;
    personJob.textContent = currentIndex.job;
    personDescription.textContent = currentIndex.description;
}

nextBtn.addEventListener('click', () => {
    getCurrentIndex++;

    if(getCurrentIndex > reviews.length - 1) {
        getCurrentIndex = 0;
    }
    getCurrentPerson();
});

prevBtn.addEventListener('click', () => {
    getCurrentIndex--;

    if(getCurrentIndex < 0) {
        getCurrentIndex = reviews.length - 1;
    }
    getCurrentPerson();
});

randomBtn.addEventListener('click', () => {
    getCurrentIndex = Math.floor(Math.random() * reviews.length);
    getCurrentPerson();
});

