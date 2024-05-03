import ProductsModel from './products/model.js'
import * as productsView from './products/view.js'

const productsModel = new ProductsModel()



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

    
})