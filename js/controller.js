import ProductsModel from './products/model.js'
import CartModel from './cart/model.js'


import * as productsView from './products/view.js'

const productsModel = new ProductsModel()
const cartModel = new CartModel()

console.log(cartModel)


async function getAndRenderProducts() {
    await productsModel.loadProducts()
    productsView.renderProducts(productsModel.products)
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

    }

    
})