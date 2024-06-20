function updatePoints() {
    const slidesContainer = document.querySelector('.slides');
    const pointsContainer = document.querySelector('.points');
    const numSlides = document.querySelectorAll('.slides > .slider_block').length;
    const visibleSlides = Math.floor(slidesContainer.offsetWidth / document.querySelector('.slider_block').offsetWidth);
    const totalPoints = Math.ceil(numSlides / visibleSlides);
    pointsContainer.innerHTML = ''; 
    
    for (let i = 0; i < totalPoints; i++) {
        const point = document.createElement('div');
        point.classList.add('point');
        point.addEventListener('click', () => {
            goToSlide(i * visibleSlides);
        });
        pointsContainer.appendChild(point);
    }

    setActivePoint();
}


function setActivePoint() {
    const points = document.querySelectorAll('.point');
    points.forEach((point, index) => {
        if (index === currentSlide) {
            console.log('awd');
            point.classList.add('active_point');
        } else {
            point.classList.remove('active_point');
        }
    });
}

function next() {
    const slidesContainer = document.querySelector('.slides');
    const numSlides = document.querySelectorAll('.slides > .slider_block').length;
    const visibleSlides = Math.floor(slidesContainer.offsetWidth / document.querySelector('.slider_block').offsetWidth);
    const maxSlideIndex = Math.ceil(numSlides / visibleSlides) - 1;

    if (currentSlide < maxSlideIndex) {
        slidesContainer.scrollBy({
            left: slidesContainer.offsetWidth / 1,
            behavior: 'smooth'
        });
        currentSlide++;
        setActivePoint();
    }
}

function prev() {
    const slidesContainer = document.querySelector('.slides');
    if (currentSlide > 0) {
        slidesContainer.scrollBy({
            left: -slidesContainer.offsetWidth / 1,
            behavior: 'smooth'
        });
        currentSlide--;
        setActivePoint();
    }
}


function goToSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.scrollBehavior = 'smooth';
    slidesContainer.scrollLeft = slidesContainer.offsetWidth * index;
    currentSlide = index;
    setActivePoint();
}
let currentSlide = 0;
updatePoints();
