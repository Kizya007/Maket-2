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
    const getStartedButton = document.querySelector('.header-section-center-button-left');
    function addClass() {

        const getTryFoFreeButton = document.querySelector('.header-section-center-button-right');
        console.log(getStartedButton.innerHTML)
        if (getTryFoFreeButton.classList.contains('no-showed')) {
            getTryFoFreeButton.classList.remove('no-showed')
            getStartedButton.innerHTML = 'get started'
        }
        else {
            getTryFoFreeButton.classList.add('no-showed')
            getStartedButton.innerHTML = 'add no showed'
        }


    }
    getStartedButton.addEventListener('click', addClass)
    const signUpButton = document.querySelector('.header-section-container-button');
    const modal = document.querySelector('.modal-window');
    const modalCloseButton = document.querySelector('.modal-window-button-close');
    const subscribeButton = document.querySelector('.section-subscribe-footer-button');
    signUpButton.addEventListener('click', function () {
        console.log(7)
        if (!modal.classList.contains('showed')) {
            modal.classList.add('showed')
        }
    })
    modalCloseButton.addEventListener('click', function () {
        modal.classList.remove('showed')
    })
    subscribeButton.addEventListener('click', function(event){
        console.log(event)
        subscribeButton.style.backgroundColor = 'red'
        if(subscribeButton.style.backgroundColor === 'red'){
            subscribeButton.style.backgroundColor = 'orange'
            
        }
        
  
    })

});
