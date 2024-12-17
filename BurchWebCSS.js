
document.addEventListener('DOMContentLoaded', () => {
    //.animate-scroll is the classname
    const elements = document.querySelectorAll('.animate-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        //The amount of screen displayed before animated. 0 is as soon as it appears on the page. 1 is a bit. 2 is...
        threshold: 0.9
    });

    elements.forEach(element => {
        observer.observe(element);
    });
});
