import history from './../history';

const createProduct = formValues => async dispatch => {
    console.log('C')
    await fetch(`http://localhost:3000/products.json`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(formValues)
        })
        dispatch({ type: 'ADD_ITEM', payload: formValues })
        history.push('/products');
        console.log('D')
    }

export default createProduct;