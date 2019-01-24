const getProducts = () => async dispatch => {
    const response = await fetch('products.json');
    dispatch({ type: 'GET_PRODUCTS', payload: response})
    }

export default getProducts;