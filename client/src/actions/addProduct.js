const addItem = (item) => async dispatch => {
    await fetch(`http://localhost:3000/products.json`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(item)
        })
        dispatch({ type: 'ADD_ITEM', payload: item})
    }

export default addItem;