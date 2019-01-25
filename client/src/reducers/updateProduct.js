import { combineReducers } from 'redux';

const updateProduct = (products = [], action) => {
    if (action.type === 'REMOVE_ITEM') {
        console.log('hit delete')
        return products.filter((product) => product.id !== action.payload)
    } else if (action.type === 'ADD_ITEM') {
        console.log("hit add")
        return [...products, action.payload]
    } else if (action.type === 'GET_PRODUCTS') {
        console.log('hit no item')
        console.log(action.payload)
        return action.payload
        }
        return products;
    }


export default combineReducers({
    products: updateProduct
})