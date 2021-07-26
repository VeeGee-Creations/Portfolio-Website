
(function menuControl() {
    const header = document.querySelector('.header');
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('ul');
    const menuLink = document.querySelectorAll('ul a');
    const screenWidth = window.matchMedia('(max-width: 1199px)');
    
    function classToggle() {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
    }

    hamburger.addEventListener('click', classToggle);
    
    function handleTabletChange(event) {
        console.log(screenWidth);
        if (event.matches) {
            menuLink.forEach(function(link) {
                link.addEventListener('click', classToggle);
            });
        }else{
            menuLink.forEach(function(link) {
                link.removeEventListener('click', classToggle);
            });
        }
    }

    screenWidth.onchange = handleTabletChange;

    handleTabletChange(screenWidth);


    document.addEventListener('scroll', function() {
        const position = window.pageYOffset;

        if(position > 45) return header.style.backgroundColor = '#29323C';
        
        return header.style.backgroundColor = 'transparent';
    });

})();

(function parallaxControl() {
    window.addEventListener('scroll', function(e) {
        const parallax = document.querySelectorAll('.parallax');
        const position = window.pageYOffset; 
        parallax.forEach(function(image){
            image.style.transform = `translateY(${position * .8}px)`;
        });
    });
})();