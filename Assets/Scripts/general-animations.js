/*
    The purpose of this script is to create modular and reusable JS animations
    for the HTML webpages.
    Animations here can be used as long as elements in HTML bear the corresponding
    classes.
*/

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