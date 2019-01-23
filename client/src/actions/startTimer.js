const startTimer = (product) => {
    return {
        type: 'START_TIMER',
        payload: {
            product: product
        }
    }
}

export default startTimer;