const deleteProduct = (id) => async dispatch => {
    const response = await fetch(`http://localhost:3000/products/${id}.json`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formValues)
        })
        dispatch({ type: 'DELETE_PRODUCT', payload: id })
    }

export default deleteProduct;