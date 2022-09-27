const sliderItem = document.querySelectorAll('.slider__item');

const sliderMain = new Swiper('.slider__main', {
    freeMode: true,
    centeredSlides: true,
    parallax: true,
    mousewheel: true,

    breakpoints: {
        0: {
            slidesPerView: 2.5,
            spaceBetween: 20
        },
        680: {
            slidesPerView: 3.5,
            spaceBetween: 60
        }
    }
})

const sliderBg = new Swiper('.slider__bg', {
    centeredSlides: true,
    parallax: true,
    spaceBetween: 60,
    slidesPerView: 3.5,
})

sliderMain.controller.control = sliderBg;

sliderItem.forEach(item => {
	item.addEventListener('click', event => {
        if (item.classList.contains('opened')) {
        clearActiveClasses();           
        } else {
        clearActiveClasses();
		item.classList.add('opened');            
        }
	})
})

function clearActiveClasses () {
    sliderItem.forEach((item) => {
        item.classList.remove('opened');
    });
};

let desc = document.querySelector('.description');
sliderMain.on('slideChange', e => {
    sliderMain.activeIndex > 0 ? desc.classList.add('hidden') : desc.classList.remove('hidden')
})