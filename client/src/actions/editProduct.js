import history from './../history';

const editItem = (id, formValues) => async dispatch => {
    await fetch(`http://localhost:3000/products/${id}.json`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formValues)
        })
        dispatch({ type: 'EDIT_PRODUCT', payload: formValues })
        history.push('/products');
    }

export default editItem;