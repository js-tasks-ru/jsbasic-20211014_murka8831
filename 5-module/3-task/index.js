function initCarousel() {
  let right = document.querySelector('.carousel__arrow_right');
  let left = document.querySelector('.carousel__arrow_left');
  let carousel = document.querySelector('.carousel__inner');
  const widthCarousel = carousel.offsetWidth;
  let rightClick = -1;
  let leftClick = 0;

  if (leftClick == 0) {
    left.style.display = 'none';
  };

  if (right.addEventListener('click', function () {
    carousel.style.transform = 'translateX(' + `${rightClick*widthCarousel}` + 'px)';
    rightClick -= 1;
    leftClick -= 1;
    left.style.display = '';

    if (rightClick <= -4) {
      right.style.display = 'none';
    };
  }));

  if (left.addEventListener('click', function () {
    rightClick += 1;
    leftClick += 1;
    carousel.style.transform = 'translateX(' + `${leftClick*widthCarousel}` + 'px)';
    right.style.display = '';

    if (leftClick == 0) {
      left.style.display = 'none';
    }
  }));
}



