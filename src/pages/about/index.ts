//Slider

const sliderLine: HTMLElement = document.querySelector('.slider-block-about__slider-line');
const dots: any = document.querySelectorAll('.slider-block-about__dot');

let position: number = 0;
let dotIndex: number = 0;

const prevSlide = (): void => {
    if (position > 0) {
        position -= 528;
        dotIndex--;
    } else {
        position = (dots.length - 1) * 528;
        dotIndex = (dots.length - 1);
    };
    (sliderLine as HTMLElement).style.top = -position + 'px';
    thisSlide(dotIndex);
    clearInterval(timer);
    timer = setInterval(prevSlide, 2500);
};

const thisSlide = (index: number): void => {
    for (let dot of dots) {
        dot.classList.remove('slider-block-about__dot_active');
    };
    dots[index].classList.add('slider-block-about__dot_active');
};

dots.forEach((dot: HTMLElement, index: number): void => {
    dot.addEventListener('click', () => {
        position = 528 * index;
        (sliderLine as HTMLElement).style.top = -position + 'px';
        dotIndex = index;
        thisSlide(dotIndex);
        clearInterval(timer);
        timer = setInterval(prevSlide, 2500);
    })
});

let timer = setInterval(prevSlide, 2500)