import React from 'react';

const Product = (props) => {
    return (
        <>
        <div class="card" style={{width: '30rem'}}>
            <div className="card-body">
                <div className="row">
                    <div className="col-8">
                        <h5 className="card-title d-inline">{props.item.name}</h5>
                    </div>
                    <div className="col-4 align-items-right">
                        <button className="btn btn-danger btn-sm align-right" >Remove Item</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <button className="btn btn-success btn-sm">Start</button>
                        <button className="btn btn-danger btn-sm">Reset</button>
                    </div>
                    <div className="col-8">
                        <div className="card d-inline" style={{margin: '5px'}}></div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Product;