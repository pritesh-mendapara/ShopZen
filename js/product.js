// product page item 
const product = [
    {
        id: 0,
        image: '../img/similarProduct/SP-1.png',
        title: 'Black Sweatshirt with black jeans',
        info: 'Jhanvi’s  Brand',
        price: 499,
        quantity: 1
    },
    {
        id: 1,
        image: '../img/similarProduct/SP-2.png',
        title: 'White T-shirt',
        info: 'Helen’s  Brand',
        price: 799,
        quantity: 1
    },
    {
        id: 2,
        image: '../img/similarProduct/SP-3.png',
        title: 'Levender Hoodie with white t-shirt',
        info: 'Nike’s  Brand',
        price: 599,
        quantity: 1
    },
    {
        id: 3,
        image: '../img/similarProduct/SP-4.png',
        title: 'White T-shirt',
        info: 'Helen’s  Brand',
        price: 699,
        quantity: 1
    },
    {
        id: 4,
        image: '../img/similarProduct/SP-5.png',
        title: 'White T-shirt',
        info: 'Helen’s  Brand',
        price: 999,
        quantity: 1
    },
    {
        id: 5,
        image: '../img/similarProduct/SP-6.png',
        title: 'White T-shirt',
        info: 'Helen’s  Brand',
        price: 299,
        quantity: 1
    },
    {
        id: 6,
        image: '../img/similarProduct/SP-7.png',
        title: 'White T-shirt',
        info: 'Helen’s  Brand',
        price: 399,
        quantity: 1
    },
    {
        id: 7,
        image: '../img/similarProduct/SP-8.png',
        title: 'White T-shirt',
        info: 'Helen’s  Brand',
        price: 799,
        quantity: 1
    }
]

const categories = [...new Set(product.map((items) => {
    { return items }
}))]

let i = 0;

document.querySelector('.similar-product').innerHTML = categories.map((items) => {
    let { id, image, title, info, price } = items;
    return (
        `
            <div class="cloth-women-body">
                <img src="${image}" class="cloth-women-image" alt="slider image">
                <span><i class="ri-heart-line"></i></span>
                <div class="cloth-women-text">
                    <div class="cloth-women-description">
                        <h3 class="cloth-women-title">${title}</h3>
                        <p class="cloth-women-info">${info}</p>
                    </div>
                    <div class="cloth-women-btn">
                        <button onClick='addtocart("${id}")'>₹${price}</button>
                    </div>
                </div>
            </div>
            `
    )
}).join('');


// Add to cart 
let cart = [];
function addtocart(a) {
    var id = a;
    if (sessionStorage.getItem("data")) {
        var data = sessionStorage.getItem("data");
    } else {
        data = "";
    }
    data += `<tr>
                <td>
                    <div class="product-cart-details">
                        <div class="product-cart-details-img">
                            <img src="`+ product[a].image + `" alt="image">
                        </div>
                        <div class="product-cart-details-text">
                            <h3>`+ product[a].title + `</h3>
                            <p>Color : Yellow</p>
                            <p>Size : M</p>
                        </div>
                    </div>
                </td>
                <td>₹`+ product[a].price + `</td></td>
                <td><input type="number" value="`+ product[a].quantity + `"></td>
                <td>FREE</td>
                <td>₹`+ product[a].price + `</td>
                <td><i class="ri-delete-bin-line"></i></td>
            </tr>`;
    sessionStorage.setItem("data", data);
}

