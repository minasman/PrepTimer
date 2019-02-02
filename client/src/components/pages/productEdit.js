import React from 'react';
import {Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import editItem from '../../actions/editProduct';

class ProductEdit extends React.Component {

    componentDidMount() {
        const itemKey = parseInt(this.props.location.pathname.split('/').pop());
        const mydata  = this.props.products.find( product => product.id === itemKey)
        this.props.initialize(mydata);
    }

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="alert alert-warning" >
                    {error}
                </div>
            )
        }
    }
    renderInput = ({ input, label, meta }) => {
        return (
            <div className="form-group">
                <label>{label}</label>
                <input {...input} className="form-control" />
                {this.renderError(meta)}
            </div>
        )
    }

    onSubmit = (formValues) => {
        this.props.editItem(formValues.id, formValues);
        return <Redirect to="/" />
    }

    render() {
        debugger
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <h2>Edit </h2>
                <Field name="name" component={this.renderInput} label="Product Name" />
                <Field name="description" component={this.renderInput} label="Product Description" />
                <Field name="secondary_shelf_life" component={this.renderInput} label="Secondary Shelf Life In Seconds" />
                <Field name="area" component={this.renderInput} label="Secondary Storage Area" />
                <button className="btn btn-primary" >Submit</button>
            </form>
        )
    }
}


const validate = (formValues) => {
    const errors = {};
    if (!formValues.name) {
        errors.name = 'Must Enter a Product Name'
    }
    if (!formValues.description) {
        errors.description = 'Must Enter a Product Description'
    }
    if (!formValues.secondary_shelf_life) {
        errors.secondary_shelf_life = 'Must Enter a Product Secondary Shelf Life in Seconds'
    }
    if (!formValues.area) {
        errors.area = 'Must Enter a Product Secondary Storage Area'
    }
    return errors;
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        initialValues: state.initialValues
        }
    }

const formWrapped = reduxForm({
    form: 'productEdit',
    validate
})(ProductEdit);

export default connect(mapStateToProps, {editItem})(formWrapped);