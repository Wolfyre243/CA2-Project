//This script file adds validtion and animations to the well-wishes.html page.

//------------------------------Variables-------------------------------------
let typingBox = document.getElementById('typing-box');

let form1 = document.getElementById("form-step-1");
let form2 = document.getElementById("form-step-2");
let form3 = document.getElementById("form-step-3");

let formIndicator1 = document.getElementById("form-indicator1");
let formIndicator2 = document.getElementById("form-indicator2");
let formIndicator3 = document.getElementById("form-indicator3");

let mainForm = document.getElementById("well-wishes-form");

let formProgressBar = document.getElementById("form-progress-bar");

//Form Elements
let firstName = document.getElementById("userFName");
let lastName = document.getElementById("userLName");
let userAge = document.getElementById("userAge");

let username = document.getElementById("userName");

let wellwishes = document.getElementById("wellwishes");

let errorBox1 = document.getElementById("errorBox1");
let errorBox2 = document.getElementById("errorBox2");
let errorBox3 = document.getElementById("errorBox3");

let form1next = document.getElementById("form1-next");
let form2next = document.getElementById("form2-next");
let form3next = document.getElementById("form3-next");
let form2prev = document.getElementById("form2-prev");
let form3prev = document.getElementById("form3-prev");
let form3submit = document.getElementById("form3-submit");

//An array of words to type
const wordBank = ["happy", "awesome", "amazing", "beautiful", "majestic", "my home", "nice", "interesting", "breathtaking"];
let prevIndex = -1;

//------------------------------Functions---------------------------------------
//Type a word with the typewriter effect
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

//Pick a word from the word array
const pickWord = (arr) => {
    if (prevIndex == arr.length - 1) {
        prevIndex = 0;
    } else {
        prevIndex++;
    }
    return arr[prevIndex];
}

//Swap to form1
const swapto1 = () => {

    form1.classList.add('active-step');
    form2.classList.remove('active-step');
    form3.classList.remove('active-step');

    formIndicator1.classList.add('active-button');
    formIndicator2.classList.remove('active-button');
    formIndicator3.classList.remove('active-button');

    formProgressBar.style.width = "0%";
}

//Swap to form2
const swapto2 = () => {

    form1.classList.remove('active-step');
    form2.classList.add('active-step');
    form3.classList.remove('active-step');

    formIndicator1.classList.remove('active-button');
    formIndicator2.classList.add('active-button');
    formIndicator3.classList.remove('active-button');

    formProgressBar.style.width = "50%";
}

//Swap to form3
const swapto3 = () => {
    
    form1.classList.remove('active-step');
    form2.classList.remove('active-step');
    form3.classList.add('active-step');

    formIndicator1.classList.remove('active-button');
    formIndicator2.classList.remove('active-button');
    formIndicator3.classList.add('active-button');

    formProgressBar.style.width = "100%";
}

//Shows the error box
const showError = (element, message) => {
    element.textContent = message;
    element.style.opacity = '1';
}

//Hides the error box
const hideError = (element) => {
    element.textContent = "";
    element.style.opacity = '0';
}

//Validates form1 data
const validate1 = () => {
    if (firstName.value === '' || firstName.value === null) {
        showError(errorBox1, "Please enter a first name!")
    } else if (lastName.value === '' || lastName.value === null) {
        showError(errorBox1, "Please enter a last name!");
    } else if (userAge.value === '' || userAge.value === null) {
        showError(errorBox1, "Please enter your age!");
    } else {
        hideError(errorBox1);
        swapto2();
    }
}

//Validates form2 data
const validate2 = () => {
    if (username.value === '' || username.value === null) {
        showError(errorBox2, "Please enter your username!");
    } else {
        hideError(errorBox2);
        swapto3();
    }
}

//Hides the navbar when scrolling down and shows it when going up.
let prevScrollPos = window.scrollY;
window.addEventListener('scroll', function() {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {
    // user has scrolled up
    document.querySelector('.navbar').classList.add('navbar-show');
    document.querySelector('.navbar').classList.add('sticky-lg-top');
    document.querySelector('.navbar').classList.remove('navbar-hide');
  } else {
    // user has scrolled down
    document.querySelector('.navbar').classList.add('navbar-hide');
    document.querySelector('.navbar').classList.remove('navbar-show');
    setTimeout(() => {
        document.querySelector('.navbar').classList.remove('sticky-lg-top');
    }, 100)
  }
  
  prevScrollPos = currentScrollPos;

});

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

// Button Event Listeners
form1next.addEventListener('click', () => {
    validate1();
})

form2prev.addEventListener('click', () => {
    swapto1();
})

form2next.addEventListener('click', () => {
    validate2();
})

form3prev.addEventListener('click', () => {
    swapto2();
})

mainForm.addEventListener("submit", (event) => {
    if (wellwishes.value === '' || wellwishes.value === null) {
        event.preventDefault();
        showError(errorBox3, "Please enter your well wishes!");
    } else {
        hideError(errorBox3);
        swapto3();
    }
})


