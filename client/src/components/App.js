import React from 'react';
import PrepTimers from './prepTimers';
import AddItemForm from './addItemForm';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <PrepTimers />
                </div>
                <div className="col">
                    <AddItemForm />
                </div>
            </div>
        </div>
    )
}

export default App;