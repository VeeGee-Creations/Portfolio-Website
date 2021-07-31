
(function menuControl() {
    const headerSection = document.querySelector('#header');
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

        if(position > 45) return (
            header.style.backgroundColor = '#29323C',
            headerSection.style.boxShadow = '0 1px 1px rgba(0,0,0,0.12), 0 2px 2px rgba(0,0,0,0.12), 0 4px 4px rgba(0,0,0,0.12), 0 8px 8px rgba(0,0,0,0.12), 0 16px 16px rgba(0,0,0,0.12)'
        );
        
        return (
            header.style.backgroundColor = 'transparent',
            headerSection.style.boxShadow = 'none'
        );
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