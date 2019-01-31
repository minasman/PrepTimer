import React from 'react'
import { Switch, Route } from 'react-router-dom'
import productEdit from './productEdit';

const Product = () => (
    <>
    <Switch>
        <Route path="products/:number" component={productEdit} />
    </Switch>
    </>
)

export default Product;