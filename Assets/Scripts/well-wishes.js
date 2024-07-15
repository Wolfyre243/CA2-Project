//------------------------------Variables-------------------------------------
let typingBox = document.getElementById('typing-box');

const wordBank = ["happy", "cool", "awesome", "amazing"];
let randomIndex = 0;

//------------------------------Functions---------------------------------------
function typewriter(element, text, i = 0) {
    
    console.log("typing"); //debugging

    if (i === 0) {
        element.textContent = "";
    } else if (i === text.length) {
        return;
    }

    element.textContent += text[i];
    setTimeout(() => typewriter(element, text, i+1), 50)
}

const pickWord = (arr) => {
    randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

//-----------------------------Observers----------------------------------
//Fly in animation observer

const flyInObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in-view-fly-in");
            entry.target.classList.remove("not-in-view-fly-out");
        } else {
            entry.target.classList.remove("in-view-fly-in");
            entry.target.classList.add("not-in-view-fly-out");
        }
    })
}, {
    rootMargin: "0px",
    threshold: [0, 0.1, 1]
});

const flyInTags = document.querySelectorAll('.fly-in');
flyInTags.forEach((tag) => {
    flyInObserver.observe(tag);
})

//Fly in from right animation observer
const flyInRightObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in-view-fly-right");
            entry.target.classList.remove("not-in-view-fly-out");
        } else {
            entry.target.classList.remove("in-view-fly-right");
            entry.target.classList.add("not-in-view-fly-out");
        }
    })
}, {
    rootMargin: "0px",
    threshold: [0, 0.1, 1]
});

const flyInRightTags = document.querySelectorAll('.fly-in-right');
flyInRightTags.forEach((tag) => {
    flyInRightObserver.observe(tag);
})

//Fly in from left animation observer
const flyInLeftObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in-view-fly-left");
            entry.target.classList.remove("not-in-view-fly-out");
        } else {
            entry.target.classList.remove("in-view-fly-left");
            entry.target.classList.add("not-in-view-fly-out");
        }
    })
}, {
    rootMargin: "0px",
    threshold: [0, 0.1, 1]
});

const flyInLeftTags = document.querySelectorAll('.fly-in-left');
flyInLeftTags.forEach((tag) => {
    flyInLeftObserver.observe(tag);
})

//Typewriter animation
setInterval(() => {
    const randomWord = pickWord(wordBank);
    console.log(randomWord);
    typewriter(typingBox, randomWord);
}, 5000)
