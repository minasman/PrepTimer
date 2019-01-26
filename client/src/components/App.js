import React from 'react';
import {BrowserRouter, Route, Link } from 'react-router-dom';

import PrepTimers from './pages/prepTimers';
import AddItemForm from './pages/addItemForm';
import EditProduct from './pages/editItem';
import Header from './../stateless/Header';

debugger
const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Route path="/" exact component={ PrepTimers } />
                <Route path="/products/new" exact component={ AddItemForm } />
                <Route path="/products/" component={ EditProduct } />
            </div>
        </BrowserRouter>
    )
}

export default App;