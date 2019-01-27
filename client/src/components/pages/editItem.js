import React from 'react';
import { connect } from 'react-redux';
import editItem from '../../actions/editProduct';

class EditProduct extends React.Component {
    state = {
        productToEdit: {}
    }

    componentDidMount() {
        const itemKey = parseInt(this.props.location.pathname.split('/').pop());
        this.setState({
            productToEdit: this.props.products.find( product => product.id === itemKey )
        })
    }

    render() {
        return (
            <div>
                <p>{this.state.productToEdit.name } </p>
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