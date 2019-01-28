export const updateProduct = (products = [], action) => {
    switch (action.type) {
        case 'REMOVE_ITEM':
            return products.filter((product) => product.id !== action.payload);
        case 'ADD_ITEM':
            return [...products, action.payload];
        case 'GET_PRODUCTS':
            return action.payload;
        default:
            return products;
    }
}


