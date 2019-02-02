import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import PrepTimers from './pages/prepTimers';
import ProductCreate from './pages/productCreate';
import ProductEdit from './pages/productEdit';
import Header from './../stateless/Header';

const App = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Switch>
                    <Route path="/" exact component={ PrepTimers } />
                    <Route exact path="/products/new" component={ProductCreate} />
                    <Route path='/products/:id' component={ProductEdit} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}
export default App;