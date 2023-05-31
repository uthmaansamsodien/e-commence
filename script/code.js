let products = document.querySelector('#products');
let prodDetails = [
    {
        prodImg: 'https://i.postimg.cc/VvBRvFTT/31a8e772-48dd-4c9d-8e87-0a053037d587.jpg',
        prodName: 'X-Box Controller',
        prodPrice: 1499
    },
    {
        prodImg: 'https://i.postimg.cc/zf2TfGjn/xboxseriesx-cnslcntlr-anl-rgb-afdf.webp',
        prodName: 'X-Box Series X',
        prodPrice: 12999
    },
    {
        prodImg: 'https://i.postimg.cc/V6M9Hcqn/1d240a46332f4c9f9f4ce1c4.webp',
        prodName: 'FIFA 23',
        prodPrice: 999
    },
    {
        prodImg: 'https://i.postimg.cc/436KqvL2/71-LSwn-EXp-XL-AC-UF1000-1000-QL80.jpg',
        prodName: 'Forza Horizon 5',
        prodPrice: 999
    },{
        prodImg: 'https://i.postimg.cc/yN6Ybh0P/81of-Mf-N70d-L-AC-UF1000-1000-QL80.jpg',
        prodName: 'X-Box One Head-Set',
        prodPrice: 499
    },
    {
        prodImg: 'https://i.postimg.cc/yN6Ybh0P/81of-Mf-N70d-L-AC-UF1000-1000-QL80.jpg',
        prodName: 'X-Box One Head-Set',
        prodPrice: 499
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


