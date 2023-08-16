// Implement section js // 

const products = document.querySelectorAll('.pink');
const productsPrice = document.querySelectorAll('.product-price');
const cartTotal = document.querySelector('#cart_total');
let totalAmount = 0;

const hadnleQty = (qtyEle,priceEle,basePrice,type) => {
    const productCount = parseInt(qtyEle.innerText);
    
    if (type == 'inc') {
        qtyEle.innerText = productCount + 1;
    } else if (type = 'dec') {
        if(productCount > 0) qtyEle.innerText = productCount - 1;
    }
    priceEle.innerText = parseFloat(basePrice * parseInt(qtyEle.innerText));
    totalAmount = totalAmount + basePrice;
    cartTotal.innerHTML = totalAmount
}

products.forEach((product) => {
    const price = product.querySelector('.product-price');
    const basePrice = parseFloat(price.getAttribute('data-baseprice'));
    const increamentBtn = product.querySelector('.inc-qty');
    const decreamentBtn = product.querySelector('.dec-qty');
    const quantity = product.querySelector('.product-count');
    increamentBtn.addEventListener('click', () => hadnleQty(quantity,price,basePrice,'inc'));
    decreamentBtn.addEventListener('click', () => hadnleQty(quantity, price,basePrice,'dec'));
})




// Delete Cart javascript//

let delItem = document.getElementsByClassName('del');


for(let i = 0; i < delItem.length; i++){
    let del = delItem[i]
    del.addEventListener('click', function(event){
       let delClicked = event.target
       delClicked.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    })
};

let delItemCart = document.getElementsByClassName('del-one');

for(let i = 0; i < delItemCart.length; i++){
    let cart = delItemCart[i]
    cart.addEventListener('click', function(event){
       let delClicked = event.target
       delClicked.parentElement.parentElement.parentElement.parentElement.parentElement.remove();
    })
};


function Shopping(){
    alert('Thanks For Shopping')
}

cartTotal.innerHTML = totalAmount

