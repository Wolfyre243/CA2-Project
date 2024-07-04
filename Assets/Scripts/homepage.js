/* 
    This script contains most of the event handlers used to
    manipulate elements in the homepage. 
*/
window.onload = () => {
    //Variables
    let zoomScrollImage = document.getElementById('zoom-scroll');

    //Functions

    //Event Listeners
    document.addEventListener('scroll', () => {
        console.log(window.scrollY);
        /*Increase the zoom factor based on the number of pixels the element has
        scrolled so far. The height should remain the same. */
        //zoomScrollImage.style.backgroundPositionX = (51 + window.scrollY/990) + '%'
        //zoomFrontImage.style.backgroundPositionX = (51 + window.scrollY/990) + '%'
        zoomScrollImage.style.backgroundSize = (100 + window.scrollY/20) + '% auto';

        if (window.scrollY > 1500) {
            zoomScrollImage.style.opacity -= 0.01;
            zoomFrontImage.style.opacity = 1;
        } else {
            zoomScrollImage.style.opacity = 1;
        }
        
        console.log('poom');
    });
}
    
