const createProduct = formValues => async dispatch => {
    const response = await fetch(`http://localhost:3000/products.json`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formValues)
        })
        dispatch({ type: 'ADD_ITEM', payload: response.data })
    }

export default createProduct;