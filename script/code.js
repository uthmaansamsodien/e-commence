let products = document.querySelector('#products');

let prodDetails = [
    {
        prodImg: 'https://i.postimg.cc/90K0LJ4v/41285-1-game-controller-png-download-free.png',
        prodName: 'X-Box Controller',
        prodPrice: 1999
    },
    {
        prodImg: 'https://i.postimg.cc/90K0LJ4v/41285-1-game-controller-png-download-free.png',
        prodName: 'X-Box Controller',
        prodPrice: 1999
    },
    {
        prodImg: 'https://i.postimg.cc/90K0LJ4v/41285-1-game-controller-png-download-free.png',
        prodName: 'X-Box Controller',
        prodPrice: 1999
    },
    {
        prodImg: 'https://i.postimg.cc/90K0LJ4v/41285-1-game-controller-png-download-free.png',
        prodName: 'X-Box Controller',
        prodPrice: 1999
    },
    {
        prodImg: 'https://i.postimg.cc/90K0LJ4v/41285-1-game-controller-png-download-free.png',
        prodName: 'X-Box Controller',
        prodPrice: 1999
    }
]

prodDetails.forEach(item => {
    products.innerHTML += `
    <div class="card">
        <img src="${item.prodImg}" class="card-img-top">
        <div class="card-body">
            <h1>${item.prodName}</h1>
            <h4>${item.prodPrice}</h4>
        </div>
    </div>

    `
})


