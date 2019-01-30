import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import PrepTimers from './pages/prepTimers';
import ProductCreate from './pages/productCreate';
import ProductEdit from './pages/productEdit';
import Header from './../stateless/Header';
import Topics from './pages/topics';

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Route path="/" exact component={ PrepTimers } />
                <Route path="/products/new" exact component={ ProductCreate } />
                {/* I need to fix the routing later */}
                {/* <Route path="/products/" component={ ProductEdit } /> */}
                <Route path="/topics" component={Topics} />
            </div>
        </BrowserRouter>
    )
}



export default App;