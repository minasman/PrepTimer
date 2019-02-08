import React from 'react';
import Product from './product';

const SortProducts = (props) => {
    if (!props.productSort) {
        const unsortedProducts = [...props.products].sort((productA, productB) => {
            if (productA.id < productB.id) {
                return -1
            }
            if (productA.id > productB.id) {
                return 1
            }
            return 0
        })
        return unsortedProducts.map(product => <Product item={product} key={product.id} />)
    }

    if (props.productSort) {
        const sortedProducts = [...props.products].sort((productA, productB) => {
            if (productA.name < productB.name) {
                return -1
            }
            if (productA.name > productB.name) {
                return 1
            }
            return 0
        })
         return sortedProducts.map(product => <Product item={product} key={product.id} /> )
    }
}

export default SortProducts;