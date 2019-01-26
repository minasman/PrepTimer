import React from 'react';
import { connect } from 'react-redux';
import addItem from '../../actions/addProduct';

class AddItemForm extends React.Component {
    state = {
        name: "",
        description: "",
        secondary_shelf_life: 0,
        area: ""
    }

    changeName = (e) => {
        this.setState({ name: e.target.value })
    }

    changeDescription = (e) => {
        this.setState({ description: e.target.value })
    }

    changeSecondary = (e) => {
        this.setState({ secondary_shelf_life: e.target.value })
    }

    changeArea = (e) => {
        this.setState({ area: e.target.value })
    }

    render() {

        return (
            <div className="form-group">
            <h2>Add New Item</h2>
            <form onSubmit={() => this.props.addItem(this.state)}>
                <input className="form-control" type="text"  onChange={this.changeName} value={this.state.name} placeholder="Item Name" name="itemName"></input>
                <input className="form-control" type="text" onChange={this.changeDescription} value={this.state.description} placeholder="Item Description" name="description"></input>
                <input className="form-control" type="integer" onChange={this.changeSecondary} value={this.state.secondary_shelf_life} placeholder="Secondary Shelf Life in Seconds" name="secondary_shelf_life"></input>
                <input className="form-control" type="text" onChange={this.changeArea} value={this.state.area} placeholder="Holding Area" name="area"></input>
                <button className="btn btn-primary btn-sm" type="submit">Add New Item</button>
            </form>
        </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps, {addItem})(AddItemForm)

