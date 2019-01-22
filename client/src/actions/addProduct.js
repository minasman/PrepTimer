const addItem = (name, description, secondary, area) => {
    return {
        type: 'ADD_ITEM',
        payload: {
            name: name,
            description: description,
            secondary: secondary,
            area: area
        }
    }
}

export default addItem;