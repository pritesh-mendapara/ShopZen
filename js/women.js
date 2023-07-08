// women page script 
const containerClothing = document.querySelector('.cloth-women');
const clothing = [
    {
        image: '../img/women/women-cloth-1.png',
        title: 'Black Sweatshirt with ....',
        info: 'Jhanvi’s  Brand',
        price: '₹499',
    },
    {
        image: '../img/women/women-cloth-2.png',
        title: 'White T-shirt',
        info: 'Helen’s  Brand',
        price: '₹799'
    },
    {
        image: '../img/women/women-cloth-3.png',
        title: 'Levender Hoodie with ....',
        info: 'Nike’s  Brand',
        price: '₹599'
    },
    {
        image: '../img/women/women-cloth-4.png',
        title: 'White T-shirt',
        info: 'Helen’s  Brand',
        price: '₹699'
    },
    {
        image: '../img/women/women-cloth-5.png',
        title: 'White T-shirt',
        info: 'Helen’s  Brand',
        price: '₹699'
    },
    {
        image: '../img/women/women-cloth-6.png',
        title: 'White T-shirt',
        info: 'Helen’s  Brand',
        price: '₹699'
    },
    {
        image: '../img/women/women-cloth-7.png',
        title: 'White T-shirt',
        info: 'Helen’s  Brand',
        price: '₹699'
    },
    {
        image: '../img/women/women-cloth-8.png',
        title: 'White T-shirt',
        info: 'Helen’s  Brand',
        price: '₹699'
    },
    {
        image: '../img/women/women-cloth-9.png',
        title: 'White T-shirt',
        info: 'Helen’s  Brand',
        price: '₹699'
    },
    {
        image: '../img/women/women-cloth-10.png',
        title: 'White T-shirt',
        info: 'Helen’s  Brand',
        price: '₹699'
    },
    {
        image: '../img/women/women-cloth-11.png',
        title: 'White T-shirt',
        info: 'Helen’s  Brand',
        price: '₹699'
    },
    {
        image: '../img/women/women-cloth-12.png',
        title: 'White T-shirt',
        info: 'Helen’s  Brand',
        price: '₹699'
    }
]

const clothingHtml = clothing.map((item) => {
    return `
                <div class="cloth-women-body">
                    <img src="${item.image}" class="cloth-women-image" alt="slider image">
                    <span><i class="ri-heart-line"></i></span>
                    <div class="cloth-women-text">
                        <div class="cloth-women-description">
                            <h3 class="cloth-women-title">${item.title}</h3>
                            <p class="cloth-women-info">${item.info}</p>
                        </div>
                        <div class="cloth-women-btn">
                            <button>${item.price}</button>
                        </div>
                    </div>
                </div>
            `;
}).join('');

containerClothing.innerHTML = clothingHtml;


// Filters open and close 
const filterModal = document.querySelector('.filter-modal');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelector('.show-filter-modal');
const overlay = document.querySelector('.overlay');

const OpenModal = function () {
    filterModal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const CloseModal = function () {
    filterModal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnOpenModal.addEventListener('click', OpenModal);
btnCloseModal.addEventListener('click', CloseModal);
overlay.addEventListener('click', CloseModal);

document.addEventListener('keydown', function (e) {
    if (e.keyCode === 27) {
        CloseModal();
    };
})
