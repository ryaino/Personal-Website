
window.onload = function () {
    const scrollTop = document.querySelector('#button__scroll-to-top');
    const scrollToTechnologies = document.querySelector('#button--scroll-to-technologies');
    const scrollToWorkHistory = document.querySelector('#button--scroll-to-work-history');
    const scrollToAbout = document.querySelector('#button--scroll-to-about');

    scrollTop.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    });

    scrollToTechnologies.addEventListener('click', function(){
        document.querySelector('#technologies').scrollIntoView({
            behavior: "smooth"
        });
    })
    scrollToWorkHistory.addEventListener('click', function(){
        document.querySelector('#work-history').scrollIntoView({
            behavior: "smooth"
        });
    })
    scrollToAbout.addEventListener('click', function(){
        document.querySelector('#about').scrollIntoView({
            behavior: "smooth"
        });
    })
}