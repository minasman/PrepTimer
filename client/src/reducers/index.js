import {combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { updateProduct }  from './updateProduct';

export default combineReducers({
    products: updateProduct,
    form: formReducer
})
