import { combineReducers } from 'redux';

const updateProduct = (products, action) => {
    if (action.type === 'REMOVE_ITEM') {
        return products.filter(products => product !== action.payload)
    } else if (action.type === 'ADD_ITEM') {
        return [...products, action.payload]
    }
    return products
}

export default combineReducers({
    products: updateProduct
})