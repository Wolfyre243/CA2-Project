//Variables
let typingBox = document.getElementById('typing-box');

const wordBank = ["happy", "cool", "awesome", "amazing"];
let randomIndex = 0;

//Functions
function typewriter(element, text, index = 0) {
    
    console.log("typing"); //debugging
    
    if (index === text.length) {
        return;
        /*new Promise((resolve) => {
            console.log("finished typing")
            resolve("finished typing");
        });*/
    }

    element.textContent = text.substring(0, index + 1);

    setTimeout(() => 
        typewriter(element, text, index+1)
    , 50)
    
}

function typewriterClear(element, text, index = text.length - 1) {
    console.log("removing"); //debugging
    
    if (element.textContent === "") {
        return;
        /*new Promise((resolve) => {
            setTimeout(() => {
                console.log("finished removing");
                resolve("finished removing");
            }, 1000);
        });*/
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
                typewriter(typingBox, randomWord);

                //cooldown
                await new Promise(r => {
                    setTimeout(() => {
                        r(2);
                    }, 3000);
                })

                typewriterClear(typingBox, randomWord);
                /*
                setTimeout(() => {
                    typewriterClear(typingBox, randomWord);
                }, 3000);
                */
            }, 5000);
        }
    })
}, {
    rootMargin: "0px",
    threshold: [0, 0.1, 1]
});

typingObserver.observe(typingBox);

console.log("hi");