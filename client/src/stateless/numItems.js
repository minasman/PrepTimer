import React from 'react';

const NumItems = (props) => {
    return (
        <div>
            <h3 className="text-center">You have {props.products.length} products</h3>
        </div>
    )
}

export default NumItems;