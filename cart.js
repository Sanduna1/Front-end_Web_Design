let iconCarts = document.querySelector('.icon_cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');

iconCarts.addEventListener('click', () => {
    body.classList.toggle('showcart');
})
closeCart.addEventListener('click',()=>{
    body.classList.toggle('showcart')
})











