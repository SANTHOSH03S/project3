document.addEventListener('DOMContentLoaded', () => {
    // Male carousel
    const maleCarousel = document.querySelector('#male-carousel');
    const maleLeftButton = document.querySelector('#left-male');
    const maleRightButton = document.querySelector('#right-male');

    maleLeftButton.addEventListener('click', () => {
        maleCarousel.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    });

    maleRightButton.addEventListener('click', () => {
        maleCarousel.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    });

    // Female carousel
    const femaleCarousel = document.querySelector('#female-carousel');
    const femaleLeftButton = document.querySelector('#left-female');
    const femaleRightButton = document.querySelector('#right-female');

    femaleLeftButton.addEventListener('click', () => {
        femaleCarousel.scrollBy({
            left: -200,
            behavior: 'smooth'
        });
    });

    femaleRightButton.addEventListener('click', () => {
        femaleCarousel.scrollBy({
            left: 200,
            behavior: 'smooth'
        });
    });
});
