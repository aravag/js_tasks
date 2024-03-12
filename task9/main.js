const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.slider-dots');
    let currentSlide = 0;

    function showSlide(n) {
        slides.forEach((slide, index) => {
            slide.style.display = "none";
            if (index === n) {
                slide.style.display = "block";
            }
        });
    }

    function showCurrentSlide() {
        showSlide(currentSlide);
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showCurrentSlide();
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showCurrentSlide();
    }

    function goToSlide(n) {
        currentSlide = n;
        showCurrentSlide();
    }

    function createDots() {
        slides.forEach((slide, index) => {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            if (index === 0) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => {
                goToSlide(index);
            });
            dotsContainer.appendChild(dot);
        });
    }

    createDots();
    showCurrentSlide();