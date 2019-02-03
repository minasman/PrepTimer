import React from 'react';
import { connect } from 'react-redux';
import createProduct from '../../actions/createProduct';
import ProductForm from '../productForm';

class ProductCreate extends React.Component {

    onSubmit = (formValues) => {
        this.props.createProduct(formValues);
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

