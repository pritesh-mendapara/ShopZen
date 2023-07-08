// carouselswiper 

var swiper = new Swiper(".hero", {
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Arrival swiper 

var swiper = new Swiper(".arrival", {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        400: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        800: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
});

// Feedback swiper

var swiper = new Swiper(".feedback-container", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        800: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});