/* 
    This script contains most of the event handlers used to
    manipulate elements in the homepage. 
*/
window.onload = () => {
    //Variables
    let heroHeader = document.getElementById('hero-header');
    let heroFade = document.getElementById('hero-fade');
    let heroStart = document.getElementById('hero-start');
    let body = document.body;

    //Functions

    //Event Listeners
    document.addEventListener('scroll', () => {
        //For debugging purposes
        console.log(`Scrolling at: ${window.scrollY}, Body height: ${body.scrollHeight}`);
        /*Increase the zoom factor based on the number of pixels the element has
        scrolled so far. The height should remain the same. */
        let currentOpacity = 1 - ((window.scrollY/body.scrollHeight)*2);
        heroHeader.style.fontSize = (10 + window.scrollY/10) + 'vw';
        heroFade.style.opacity = currentOpacity;
        heroStart.style.opacity = currentOpacity;
        heroHeader.style.opacity = currentOpacity;
        
        console.log('poom');
    });
}
    
