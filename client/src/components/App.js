import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import PrepTimers from './pages/prepTimers';
import ProductCreate from './pages/productCreate';
import ProductEdit from './pages/productEdit';
import Header from './../stateless/Header';

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Route path="/" exact component={ PrepTimers } />
                <Route path="/products/new" exact component={ ProductCreate } />
                <Route path="/products/" component={ ProductEdit } />
            </div>
        </BrowserRouter>
    )
}



export default App;