import React from 'react';
import { connect } from 'react-redux';
import Product from '../stateless/product';

class PrepTimers extends React.Component {

    renderTimers() {
        return this.props.products.map(product => <Product item={product} key={product.name} />)
    }

    render() {
        console.log('hit preptimers')
        return (
            <div>
                <h2>Prep Timers</h2>
                {this.renderTimers()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log('hit mstp in preptimers')
    return {
        products: state.products
    }
}

export default connect(mapStateToProps)(PrepTimers)