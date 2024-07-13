//Variables
let typingBox = document.getElementById('typing-box');

const wordBank = ["happy", "cool", "awesome", "amazing"];
let randomIndex = 0;

//Functions
async function typewriter(element, text, index = 0) {
    
    console.log("typing"); //debugging
    
    if (index === 0) {
        element.textContent = "";
    } else if (index === text.length) {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("finished typing");
            }, 1000);
        });
    }

    element.textContent = text.substring(0, index + 1);

    setTimeout(() => 
        typewriter(element, text, index+1)
    , 50)
    
}

async function typewriterClear(element, text, index = text.length - 1) {
    console.log("removing"); //debugging
    
    if (element.textContent === "") {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("finished removing");
            }, 1000);
        });
    }

    element.innerHTML = text.substring(0, index - 1);

    setTimeout(() => 
        typewriterClear(element, text, index - 1)
    , 50)
}

const pickWord = (arr) => {
    randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

//Main Code
const typingObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            setInterval(async function () {
                const randomWord = pickWord(wordBank);
                console.log(randomWord);
                const typing = await typewriter(typingBox, randomWord)
                    .then(async () => {
                        return new Promise((resolve) => {
                            setTimeout(() => {
                                console.log("cooldown");
                                resolve("cooldown finished");
                            }, 3000)
                        })
                    })
                    .then(() => typewriterClear(typingBox, randomWord));

            }, 5000);
        }
            
        
    })
}, {
    rootMargin: "0px",
    threshold: [0, 0.1, 1]
});

typingObserver.observe(typingBox);

console.log("hi");