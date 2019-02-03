import React from 'react';
import { connect } from 'react-redux';
import editItem from '../../actions/editProduct';
import getProducts from '../../actions/getProducts';
import ProductForm from '../productForm';

class ProductEdit extends React.Component {

    onSubmit = (formValues) => {
        this.props.editItem(formValues.id, formValues);
    }

    render() {
        return (
            <div>
                <h3>Edit</h3>
                <ProductForm initialValues={this.props.product} onSubmit={this.onSubmit} />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    console.log(state);
    console.log(ownProps);
    return {
        product: state.products.filter(product => product.id === parseInt(ownProps.match.params.id))[0]
        }
    }

export default connect(mapStateToProps, {editItem, getProducts})(ProductEdit);