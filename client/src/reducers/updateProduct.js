import { combineReducers } from 'redux';

const updateProduct = (products = [], action) => {
    if (action.type === 'REMOVE_ITEM') {
        return products.filter((product) => product !== action.payload)
    } else if (action.type === 'ADD_ITEM') {
        return [...products, action.payload]
    } else {
        const initialList = [
            {name: "American Cheese", description: "Yellow American Cheese", secondary: 7200, area: "Prep Table"},
            {name: "Shredded Lettuce", description: "Shredded Lettuce", secondary: 7200, area: "Prep Table"},
            {name: "Leaf Lettuce", description: "Leaf Lettuce", secondary: 7200, area: "Prep Table"},
            {name: "Pickles", description: "Sliced Dill Pickles", secondary: 86400, area: "Prep Table"},
            {name: "Slivered Onions", description: "Slivered Onions", secondary: 14400, area: "Prep Table"},
            {name: "Dehydrated Onions", description: "Dehydrated Onions", secondary: 7200, area: "Prep Table"},
            {name: "Roma Tomatoes", description: "Sliced Roma Tomatoes", secondary: 14400, area: "Prep Table"},
            {name: " Bacon", description: "Sliced Applewood Smoked Bacon", secondary: 14400, area: "Prep Table"}
        ]
        return [...products, initialList]
    }
}

export default combineReducers({
    products: updateProduct
})