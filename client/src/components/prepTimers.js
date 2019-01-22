import React from 'react';
import { connect } from 'react-redux';
import Product from '../stateless/product';

class PrepTimers extends React.Component {

    makeTimers() {
        return this.props.products[0].map(product => <Product item={product} key={product.name} />)
    }

    render() {
        return (
            <div>{this.makeTimers()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(PrepTimers)