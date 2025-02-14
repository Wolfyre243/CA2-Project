/* 
    This script contains most of the event handlers used to
    manipulate elements in the homepage. 
*/

//Variables
let heroHeader = document.getElementById('hero-header');
let heroFade = document.getElementById('hero-fade');
let heroStart = document.getElementById('hero-start');
let body = document.body;

const timelineNodes = document.querySelectorAll('.timeline-node');


//Event Listeners
document.addEventListener('scroll', () => {
    //For debugging purposes
    //console.log(`Scrolling at: ${window.scrollY}, Body height: ${body.scrollHeight}`);
    /*Increase the zoom factor based on the number of pixels the element has
    scrolled so far. The height should remain the same. */
    let currentOpacity = 1 - ((window.scrollY/body.scrollHeight)*4);
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

//Timeline Observer
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in-view-timeline");
            entry.target.classList.remove("not-in-view-fly-out");
        } else {
            entry.target.classList.remove("in-view-timeline");
            entry.target.classList.add("not-in-view-fly-out");
        }
    })
}, {
    rootMargin: "0px",
    threshold: 0.1
})

const timelineTags = document.querySelectorAll('.timeline-flow');
timelineTags.forEach((tag) => {
    timelineObserver.observe(tag);
})

/*
    A simple event listener to check whether the user is hovering over a timeline node.
    If so, show the previous and upcoming years beside the timeline node.
*/
timelineNodes.forEach((node) => {
    const yearlinks = node.querySelectorAll('.year-link');
    node.addEventListener('mouseover', () => {
        yearlinks.forEach((link) => {
            link.classList.add('reveal-link');
            link.classList.remove('hide-link');
        });
    });
    node.addEventListener('mouseout', () => {
        yearlinks.forEach((link) => {
            link.classList.remove('reveal-link');
            link.classList.add('hide-link');
        });
    });
})
