const ourteam = () => {
  const dots = document.querySelector('.ourteam__items');
  const slider = document.querySelector('.ourteam__slider');

  let currentSlide = 0;

  const renderSlide = () => {
    const slides = slider.querySelectorAll('.ourteam__part');
    const dotElements = dots.querySelectorAll('.ourteam__dot');

    slides.forEach((slide, index) => {
      slide.style.display = index === currentSlide ? 'block' : 'none';
    });

    dotElements.forEach((dot, index) => {
      dot.classList.toggle('ourteam__dot-this', index === currentSlide);
    });
  };

  renderSlide();

  document.querySelector('.ourteam__btn-prev').addEventListener('click', () => {
    const slides = slider.querySelectorAll('.ourteam__part');
    currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    renderSlide();
  });

  document.querySelector('.ourteam__btn-next').addEventListener('click', () => {
    const slides = slider.querySelectorAll('.ourteam__part');
    currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    renderSlide();
  });

  document.addEventListener('keydown', e => {
    e.preventDefault();
    const slides = slider.querySelectorAll('.ourteam__part');

    if (e.code === 'ArrowLeft') {
      currentSlide = currentSlide === 0 ? slides.length - 1 : currentSlide - 1;
    }

    if (e.code === 'ArrowRight') {
      currentSlide = currentSlide === slides.length - 1 ? 0 : currentSlide + 1;
    }

    renderSlide();
  });
};

ourteam();
