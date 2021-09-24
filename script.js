const scrollElements = document.querySelectorAll(".js-scroll");
const scrollSize = 90;


/* SCROLL FADE IN/OUT */
scrollElements.forEach((el) => {
    el.getElementsByClassName.opacity = 0;
})

function elementInView(el, percentageScroll = scrollSize){
    const elementTop = el.getBoundingClientRect().top;
    
    return (elementTop <= ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100)));
}

function displayScrolled(element){
    element.classList.add("scrolled");
}

function hideScrolled(element){
    element.classList.remove("scrolled");
}

function handleScrollAnimation(){
    scrollElements.forEach((el) => {
        if (elementInView(el, scrollSize)){
            displayScrolled(el);
        } else {
            hideScrolled(el);
        }
    })
}

window.addEventListener("scroll", () => {
    handleScrollAnimation();
});

/* NAME FADE IN/OUT */

$(document).ready(() => {
    $(window).scroll((event) => {
        let scroll = $(this).scrollTop();
        let opacity = scroll/1000;

        if (opacity >= 0) {
            $('.name-logo').css('opacity', opacity);
        }
    } )
})