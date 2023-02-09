//Slider
var sliderLine = document.querySelector('.slider-block-about__slider-line');
var dots = document.querySelectorAll('.slider-block-about__dot');
var position = 0;
var dotIndex = 0;
var prevSlide = function () {
    if (position > 0) {
        position -= 528;
        dotIndex--;
    }
    else {
        position = (dots.length - 1) * 528;
        dotIndex = (dots.length - 1);
    }
    ;
    sliderLine.style.top = -position + 'px';
    thisSlide(dotIndex);
    clearInterval(timer);
    timer = setInterval(prevSlide, 2500);
};
var thisSlide = function (index) {
    for (var _i = 0, dots_1 = dots; _i < dots_1.length; _i++) {
        var dot = dots_1[_i];
        dot.classList.remove('slider-block-about__dot_active');
    }
    ;
    dots[index].classList.add('slider-block-about__dot_active');
};
dots.forEach(function (dot, index) {
    dot.addEventListener('click', function () {
        position = 528 * index;
        sliderLine.style.top = -position + 'px';
        dotIndex = index;
        thisSlide(dotIndex);
        clearInterval(timer);
        timer = setInterval(prevSlide, 2500);
    });
});
var timer = setInterval(prevSlide, 2500);
