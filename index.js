(() => {
    let mainSladerImage = document.querySelectorAll(".main-slider-image");
    let nav = document.querySelector("#main-navbar");
    let mainNavButton = document.querySelector('#main-nav-button');
    let mainNavButtonSpan = mainNavButton.querySelector('span');
    let mainNavButtonImg = mainNavButton.querySelector('img');
    let mainNavModalWindow = document.querySelector('#main-nav-modal-window');
    let screenHeight = screen.height+30;
    let wasScrolled = false;

    window.addEventListener('scroll', (event) => {
    // window.onscroll = () => { // when page is scrolled make navbar fixed and stop animation
        if (window.pageYOffset >= screenHeight) {
            if (!wasScrolled) {
                nav.classList.add("navbar-fixed-top");
                for (let i=0;i<mainSladerImage.length;i++)
                    mainSladerImage[i].style.animationPlayState = "paused";
                wasScrolled = true;
            }
        } else {
            if (wasScrolled) {
                if (mainNavModalWindow.style.display === 'none')
                    nav.classList.remove("navbar-fixed-top");
                for (let i=0;i<mainSladerImage.length;i++)
                    mainSladerImage[i].style.animationPlayState="running";
                wasScrolled = false;
            }
        }
    });

    let scrollSlider = (element, scrollRatio, timeInt) => {
         element.animate({
             scrollLeft: `+=${scrollRatio*element.innerWidth()}`
         }, timeInt);
    };
    let sliderCont = $("#slider-thumbnail");
    $("#scroll-left").click((event) => {
        event.preventDefault();
        scrollSlider(sliderCont, -0.8, 500);
    });
    $("#scroll-right").click((event) => {
        event.preventDefault();
        scrollSlider(sliderCont, 0.8, 500);
    });


    mainNavModalWindow.style.display = 'none';
    let mainNavButtonStatus = true; // true - 'burger', false - 'close'
    mainNavButton.onclick = (event) => {
        event.preventDefault();
        mainNavModalWindow.style.display = mainNavModalWindow.style.display === 'none' ? 'flex' : 'none';
        // mainNavButtonSpan.classList.toggle('glyphicon-menu-hamburger');
        // mainNavButtonSpan.classList.toggle('glyphicon-remove');
        mainNavButtonImg.src = (mainNavButtonStatus) ?
            'img/icons/icon_close4px1.svg' : 'img/icons/icon_burger4px1.svg';
        mainNavButtonStatus = !mainNavButtonStatus;
        if (!wasScrolled && mainNavModalWindow.style.display === 'flex') nav.classList.add("navbar-fixed-top");
        if (!wasScrolled && mainNavModalWindow.style.display === 'none') nav.classList.remove("navbar-fixed-top");
    }

})();

