const addItem = (item) => {
    console.log('hit action add item')
    return {
        type: 'ADD_ITEM',
        payload: {
            name: item.name,
            description: item.description,
            secondary: item.secondary,
            area: item.area
        }
    }
}

export default addItem;