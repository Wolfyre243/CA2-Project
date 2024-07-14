/* 
    This script contains most of the event handlers used to
    manipulate elements in the homepage. 
*/

//Variables
let heroHeader = document.getElementById('hero-header');
let heroFade = document.getElementById('hero-fade');
let heroStart = document.getElementById('hero-start');
let body = document.body;

//Event Listeners
document.addEventListener('scroll', () => {
    //For debugging purposes
    //console.log(`Scrolling at: ${window.scrollY}, Body height: ${body.scrollHeight}`);
    /*Increase the zoom factor based on the number of pixels the element has
    scrolled so far. The height should remain the same. */
    let currentOpacity = 1 - ((window.scrollY/body.scrollHeight)*2.5);
    heroHeader.style.fontSize = (15 + window.scrollY/10) + 'vh';
    heroFade.style.opacity = currentOpacity;
    heroStart.style.opacity = currentOpacity;
    heroHeader.style.opacity = currentOpacity;

    if (currentOpacity <= 0) {
        heroHeader.style.visibility = 'hidden';
        heroHeader.disabled = true;
        heroStart.disabled = true;
    } else if (currentOpacity > 0) {
        heroHeader.style.visibility = 'visible';
        heroStart.disabled = false;
    }
});

/* 
    This is the fly in observer.
    It observes elements with the class 'fly-in'.
    When they are in view, this observer applies the in-view-fly-in class to them,
    which plays a fly in animation in view. 
*/

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
