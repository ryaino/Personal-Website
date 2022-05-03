
window.onload = function () {
    const buttons = document.getElementsByClassName('button-scroll');

    for (const button of buttons) {
        let id = button.id.replace('button--scroll-to-', '');

        button.addEventListener('click', function () {
            document.getElementById(id).scrollIntoView({
                behavior: "smooth"
            });
        });
    }

}