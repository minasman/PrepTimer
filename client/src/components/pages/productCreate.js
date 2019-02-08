import React from 'react';
import { connect } from 'react-redux';
import createProduct from '../../actions/createProduct';
import ProductForm from '../productForm';

class ProductCreate extends React.Component {

    onSubmit = (formValues) => {
        console.log('A')
        this.props.createProduct(formValues);
        console.log('B')
    }

    render() {
        return (
            <div>
                <h3>Add A New Product</h3>
                <ProductForm onSubmit={this.onSubmit} />
            </div>

        )
    }
}

export default connect(null, {createProduct})(ProductCreate);

