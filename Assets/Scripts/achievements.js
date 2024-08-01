/*
    This script controls the fly-in animations for the achievements.html page.
*/

//Make the words fly in on view.
const typingObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("in-view-bento-bg");
            entry.target.classList.remove("not-in-view-bento-bg");
        } else {
            entry.target.classList.remove("in-view-bento-bg");
            entry.target.classList.add("not-in-view-bento-bg");
        }
    })
}, {
    rootMargin: "0px",
    threshold: 0.3
})

const typingTags = document.querySelectorAll('.bento-bg');
typingTags.forEach((tag) => {
    typingObserver.observe(tag);
});

//Fly in observer
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
    threshold: [0, 0.2, 1]
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
    threshold: [0, 0.2, 1]
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
    threshold: [0, 0.2, 1]
});

const flyInLeftTags = document.querySelectorAll('.fly-in-left');
flyInLeftTags.forEach((tag) => {
    flyInLeftObserver.observe(tag);
})