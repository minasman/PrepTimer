const getProduct = (id) => async dispatch => {
    const response = await fetch(`/products/${id}`);
    dispatch({ type: "GET_PRODUCT", payload: response.data });
}
export default getProduct;