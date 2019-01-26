import React from 'react';
import { connect } from 'react-redux';
import editItem from '../../actions/editProduct';

class EditProduct extends React.Component {

    render() {
        return (
            <div>
                <p>{this.props.products.map(product => product.name) } </p>
            </div>
        )
    }
}



const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps,{editItem})(EditProduct)