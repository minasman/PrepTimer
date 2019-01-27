const editItem = (id, formValues) => async dispatch => {
    const response = await fetch(`http://localhost:3000/products/${id}.json`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formValues)
        })
        dispatch({ type: 'EDIT_PRODUCT', payload: response.data })
    }

export default editItem;