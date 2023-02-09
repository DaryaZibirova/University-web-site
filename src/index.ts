//Slider

const sliderLine: HTMLElement = document.querySelector('.slider-block__slider-line');
const dots: any = document.querySelectorAll('.slider-block__dot');

let position: number = 0;
let dotIndex: number = 0;

const prevSlide = (): void => {
    if (position > 0) {
        position -= 449;
        dotIndex--;
    } else {
        position = (dots.length - 1) * 449;
        dotIndex = (dots.length - 1);
    };
    (sliderLine as HTMLElement).style.left = -position + 'px';
    thisSlide(dotIndex);
    clearInterval(timer);
    timer = setInterval(prevSlide, 2500);
};

const thisSlide = (index: number): void => {
    for (let dot of dots) {
        dot.classList.remove('slider-block__dot_active');
    };
    dots[index].classList.add('slider-block__dot_active');
};

dots.forEach((dot: HTMLElement, index: number): void => {
    dot.addEventListener('click', () => {
        position = 449 * index;
        (sliderLine as HTMLElement).style.left = -position + 'px';
        dotIndex = index;
        thisSlide(dotIndex);
        clearInterval(timer);
        timer = setInterval(prevSlide, 2500);
    })
});

let timer = setInterval(prevSlide, 2500)




