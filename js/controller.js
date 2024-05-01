import ProductsModel from './products/model.js'
import * as productsView from './products/view.js'

const productsModel = new ProductsModel()



async function getAndRenderProducts() {
    await productsModel.loadProducts()
    productsView.renderProducts(productsModel.products)
}

getAndRenderProducts()