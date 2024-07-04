/* 
    This script contains most of the event handlers used to
    manipulate elements in the homepage. 
*/
window.onload = () => {
    //Variables
    let heroHeader = document.getElementById('hero-header');
    let heroFade = document.getElementById('hero-fade');

    //Functions

    //Event Listeners
    document.addEventListener('scroll', () => {
        console.log(window.scrollY);
        /*Increase the zoom factor based on the number of pixels the element has
        scrolled so far. The height should remain the same. */
        //zoomScrollImage.style.backgroundPositionX = (51 + window.scrollY/990) + '%'
        //zoomFrontImage.style.backgroundPositionX = (51 + window.scrollY/990) + '%'
        heroHeader.style.fontSize = (10 + window.scrollY/15) + 'vw';
        
        if (window.scrollY > 950) {
            heroHeader.style.opacity -= 0.01;
            heroFade.style.opacity -= 0.01;
        } else {
            heroHeader.style.opacity = 1;
            heroFade.style.opacity = 1;
        }
        
        console.log('poom');
    });
}
    
