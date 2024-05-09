import ProductsModel from './products/model.js'
import CartModel from './cart/model.js'


import * as productsView from './products/view.js'
import * as cartView from './cart/view.js'

const productsModel = new ProductsModel()
const cartModel = new CartModel()


console.log(cartModel)


async function getAndRenderProducts() {
    await productsModel.loadProducts()
    productsView.renderProducts(productsModel.products)
    cartView.renderCart(cartModel.cart)

    
    const totalPrice = cartModel.getTotalCartPrice()
    cartView.updateOrderPrice(totalPrice)
}

getAndRenderProducts()


productsView.elements.productsContainer.addEventListener('click', function(event) {
    let action = event.target.dataset.action

    if(action === 'plus' || action === 'minus') {
       const productId = +event.target.closest('.card').dataset.id
       const product = productsModel.updateCounter(productId, action)

       productsView.updateCounter(product)
    }

    if (action === 'add-to-cart') {
        const productId = +event.target.closest('.card').dataset.id
        const product = productsModel.getProduct(productId)
       
        cartModel.addToCart(product)
        cartView.renderCart(cartModel.cart)

        productsModel.resetCounter(product)
        productsView.updateCounter(product)

        const totalPrice = cartModel.getTotalCartPrice()
        cartView.updateOrderPrice(totalPrice)
    }

    
})

cartView.elements.cartWrapper.addEventListener('click', function (event) {
    let action = event.target.dataset.action

    if(action === 'plus' || action === 'minus') {
        const productId = +event.target.closest('.cart-item').dataset.id

       const productInCart = cartModel.updateCounterInCart(productId, action)

       if (productInCart.counter > 0) {

        cartView.updateCounter(productInCart)

       } else {

        cartView.removeItemFromCart(productInCart)

       }

       const totalPrice = cartModel.getTotalCartPrice()
       cartView.updateOrderPrice(totalPrice)
       
    }
})