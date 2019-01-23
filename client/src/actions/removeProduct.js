const removeItem = (item) => {
    console.log('hit action remove item')
    return {
        type: 'REMOVE_ITEM',
        payload: {
            name: item.name,
            description: item.description,
            secondary: item.secondary,
            area: item.area
        }
    }
}

export default removeItem;