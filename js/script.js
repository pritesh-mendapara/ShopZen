const navMenu = document.querySelector(".main-nav");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

// Show menu
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

// Hidden menu
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

// scroll indicator 
const indicator = document.querySelector('.indicator');

window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    const scrolled = (scrollTop / (scrollHeight - clientHeight) * 100);

    indicator.style.width = `${scrolled}%`
})

// product image change 
let mainImage = document.getElementById('main-img');
let smallImage = document.querySelectorAll('.small-img');

for (let i = 0; i < smallImage.length; i++) {
    smallImage[i].onclick = function () {
        mainImage.src = this.src;
    };
}

// title change 
window.onload = function () {
    let titles = [
        "ShopZen | Elevate Your Style with Serenity",
        "ShopZen | Discover Serene Style Delivered",
        "ShopZen | Journey Starts at ShopZen",
        "ShopZen"
    ];
    let index = 0;
    setInterval(function () {
        document.title = titles[index];
        index = (index + 1) % titles.length;
    }, 3000);
};