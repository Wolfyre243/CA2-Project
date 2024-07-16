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
    threshold: 0.25
})

const typingTags = document.querySelectorAll('.bento-bg');
typingTags.forEach((tag) => {
    typingObserver.observe(tag);
});

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
    threshold: 0
});

const flyInTags = document.querySelectorAll('.fly-in');
flyInTags.forEach((tag) => {
    flyInObserver.observe(tag);
})