const getProducts = () => async dispatch => {
    const response = await fetch('products.json')
    .then(results => {return results.json()})
    .then(data => { return data });
    dispatch({ type: 'GET_PRODUCTS', payload: response})
    }

export default getProducts;