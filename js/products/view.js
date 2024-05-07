export const elements = {
    productsContainer: document.querySelector('#products-container')
}

export function renderProducts(productsArray) {
    productsArray.forEach(item => {
        const productHTML = `<div class="col-md-6">
                                <div class="card mb-4" data-id="${item.id}">
                                    <img class="product-img" src="img/roll/${item.imgSrc}" alt="${item.title}" />
                                    <div class="card-body text-center">
                                        <h4 class="item-title">${item.title}</h4>
                                        <p><small data-items-in-box="" class="text-muted">${item.itemsInBox} шт.</small></p>
                            
                                        <div class="details-wrapper">
                                            <!-- Счетчик -->
                                            <div class="items counter-wrapper">
                                                <div class="items__control" data-action="minus">-</div>
                                                <div class="items__current" data-counter="">1</div>
                                                <div class="items__control" data-action="plus">+</div>
                                            </div>
                                            <!-- // Счетчик -->
                            
                                            <div class="price">
                                                <div class="price__weight">${item.weight}г.</div>
                                                <div class="price__currency">${item.price} ₽</div>
                                            </div>
                                        </div>
                            
                                        <button
                                            data-action="add-to-cart"
                                            type="button"
                                            class="btn btn-block btn-outline-warning"
                                        >
                                            + в корзину
                                        </button>
                                    </div>
                                </div>
                            </div>
                            `
        elements.productsContainer.insertAdjacentHTML('beforeend', productHTML)
    });

}

export function updateCounter(product) {
    const counterWrapper = document.querySelector(`[data-id="${product.id}"]`)
    const counterElement = counterWrapper.querySelector('[data-counter]')
    counterElement.innerHTML = product.counter
}
