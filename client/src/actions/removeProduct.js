const removeItem = (id) => async dispatch => {
    const response = await fetch(`products/${id}.json`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
        })
        dispatch({ type: 'REMOVE_ITEM', payload: id})
    }

export default removeItem;


