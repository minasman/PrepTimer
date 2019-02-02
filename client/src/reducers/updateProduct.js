export const updateProduct = (products = [], action) => {
    switch (action.type) {
        case 'REMOVE_ITEM':
            return products.filter((product) => product.id !== action.payload);
        case 'ADD_ITEM':
            return [...products, action.payload];
        case 'GET_PRODUCTS':
            return action.payload;
        case 'EDIT_PRODUCT':
            const oldList = products.filter((product) => product.id !== action.payload.id);
            return [...oldList, action.payload];
        default:
            return products;
    }
}


