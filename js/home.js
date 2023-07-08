const fashionContainer = document.querySelector('.men-women-fashion');
const feedbackContainer = document.querySelector('.feedback-wrapper');
const fashionData = [
    {
        image: './img/men-1.png',
        title: 'Shirts',
        info: 'Jhanvi’s  Brand',
    },
    {
        image: './img/men-2.png',
        title: 'White T-shirt',
        info: 'Helen’s  Brand'
    },
    {
        image: './img/men-3.png',
        title: 'Levender Hoodie with jeans',
        info: 'Nike’s  Brand'
    },
    {
        image: './img/men-4.png',
        title: 'White T-shirt',
        info: 'Helen’s  Brand'
    },
    {
        image: './img/men-5.png',
        title: 'White T-shirt',
        info: 'Helen’s  Brand'
    },
    {
        image: './img/men-6.png',
        title: 'White T-shirt',
        info: 'Helen’s  Brand'
    },
    {
        image: './img/men-7.png',
        title: 'White T-shirt',
        info: 'Helen’s  Brand'
    },
    {
        image: './img/men-8.png',
        title: 'White T-shirt',
        info: 'Helen’s  Brand'
    }
]

const fashionHtml = fashionData.map((items) => {
    return `
            <div class="men-women-fashion-body">
            <img src="${items.image}" class="men-women-fashion-image" alt="slider image">
            <div class="men-women-fashion-text">
                <div class="men-women-fashion-description">
                    <h3>${items.title}</h3>
                    <p>${items.info}</p>
                </div>
                <div class="men-women-fashion-icon">
                    <a href="product.html"><i class="ri-arrow-right-line"></i></a>
                </div>
            </div>
            </div>
            `;
}).join('');

fashionContainer.innerHTML = fashionHtml;

// feedback data 
const feedbackData = [
    {
        image: '../img/feedback-1.jpg',
        author: 'Pritesh',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum facere blanditiis quam ullam numquam, illum sunt consequuntur consequatur eveniet maxime?',
        star: `<i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-half-line"></i>
        <i class="ri-star-line"></i>`
    },
    {
        image: '../img/feedback-2.jpg',
        author: 'Pritesh',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum facere blanditiis quam ullam numquam, illum sunt consequuntur consequatur eveniet maxime?',
        star: `<i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-half-line"></i>`
    },
    {
        image: '../img/feedback-1.jpg',
        author: 'Pritesh',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum facere blanditiis quam ullam numquam, illum sunt consequuntur consequatur eveniet maxime?',
        star: `<i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-half-line"></i>
        <i class="ri-star-line"></i>
        <i class="ri-star-line"></i>`
    },
    {
        image: '../img/feedback-2.jpg',
        author: 'Pritesh',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum facere blanditiis quam ullam numquam, illum sunt consequuntur consequatur eveniet maxime?',
        star: `<i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>`
    },
    {
        image: '../img/feedback-1.jpg',
        author: 'Pritesh',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum facere blanditiis quam ullam numquam, illum sunt consequuntur consequatur eveniet maxime?',
        star: `<i class="ri-star-fill"></i>
        <i class="ri-star-half-line"></i>
        <i class="ri-star-line"></i>
        <i class="ri-star-line"></i>
        <i class="ri-star-line"></i>`
    },
    {
        image: '../img/feedback-2.jpg',
        author: 'Pritesh',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum facere blanditiis quam ullam numquam, illum sunt consequuntur consequatur eveniet maxime?',
        star: `<i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-half-line"></i>
        <i class="ri-star-line"></i>
        <i class="ri-star-line"></i>`
    }
]

const feedbackHtml = feedbackData.map((item) => {
    return `
            <div class="feedbacks swiper-slide">
            <div class="feedback-header">
                <div class="feedback-image">
                    <img src="${item.image}" alt="feedback img">
                </div>
                <div class="feedback-star">
                    ${item.star}
                </div>
            </div>
            <div class="feedback-body">
                <h3 class="feedback-title">${item.author}</h3>
                <p class="feedback-description">${item.description}</p>
            </div>
            </div>
            `;
}).join('');

feedbackContainer.innerHTML = feedbackHtml;

