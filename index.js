document.addEventListener('DOMContentLoaded', function () {
    const mobilemenu = document.querySelector('.header-menu-mobile-list ');
    const mobilebutton = document.querySelector('.header-menu-mobile-button');
    mobilebutton.addEventListener('click', function () {
        console.log(1)
        if (mobilemenu.classList.contains('active')) {
            mobilemenu.classList.remove('active');
        }
        else {
            mobilemenu.classList.add('active');
        }
    })

});