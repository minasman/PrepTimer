const editItem = (item) => async dispatch => {
    await fetch(`http://localhost:3000/products.json`, {
        method: 'PUT',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(item)
        })
        dispatch({ type: 'EDIT_ITEM', payload: item})
    }

export default editItem;