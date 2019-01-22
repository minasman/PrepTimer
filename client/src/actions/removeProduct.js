const removeItem = (name, description, secondary, area) => {
    return {
        type: 'REMOVE_ITEM',
        payload: {
            name: name,
            description: description,
            secondary: secondary,
            area: area
        }
    }
}

export default removeItem;