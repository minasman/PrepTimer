import React from 'react';
import { connect } from 'react-redux';
import Product from '../product';
import getProducts from '../../actions/getProducts';

class PrepTimers extends React.Component {

    componentDidMount() {
        this.props.getProducts();
    }
    renderTimers() {
        return this.props.products.map(product => <Product item={product} key={product.id} />)
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Prep Timers</h2>
                <div className="row justify-content-md-center">
                    {this.renderTimers()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps,{getProducts})(PrepTimers)