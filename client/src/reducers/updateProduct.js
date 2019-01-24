import { combineReducers } from 'redux';

const updateProduct = (products = [], action) => {
    if (action.type === 'REMOVE_ITEM') {
        console.log('hit delete')
        return products.filter((product) => product.name !== action.payload.name)
    } else if (action.type === 'ADD_ITEM') {
        console.log("hit add")
        return [...products, action.payload]
    } else if (action.type === 'GET_PRODUCTS') {
        console.log('hit no item')
        return action.payload
        // if (products.length === 0 ) {
        //     console.log('hit empty products')
        //     console.log(products)
        //     const initialList = [
        //         {name: "American Cheese", description: "Yellow American Cheese", secondary: 7200, area: "Prep Table"},
        //         {name: "Shredded Lettuce", description: "Shredded Lettuce", secondary: 7200, area: "Prep Table"},
        //         {name: "Leaf Lettuce", description: "Leaf Lettuce", secondary: 7200, area: "Prep Table"},
        //         {name: "Pickles", description: "Sliced Dill Pickles", secondary: 86400, area: "Prep Table"},
        //         {name: "Slivered Onions", description: "Slivered Onions", secondary: 14400, area: "Prep Table"},
        //         {name: "Dehydrated Onions", description: "Dehydrated Onions", secondary: 7200, area: "Prep Table"},
        //         {name: "Roma Tomatoes", description: "Sliced Roma Tomatoes", secondary: 14400, area: "Prep Table"},
        //         {name: " Bacon", description: "Sliced Applewood Smoked Bacon", secondary: 14400, area: "Prep Table"}
        //     ]
        //     return initialList
        }
        return products;
    }


export default combineReducers({
    products: updateProduct
})