import React from 'react';
import {Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import createProduct from '../../actions/createProduct';

class ProductCreate extends React.Component {

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
        this.props.createProduct(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} >
                <h2>Add New Item</h2>
                <Field name="name" component={this.renderInput} label="Product Name" />
                <Field name="description" component={this.renderInput} label="Product Description" />
                <Field name="secondary_shelf_life" component={this.renderInput} label="Secondary Shelf Life In Seconds" />
                <Field name="area" component={this.renderInput} label="Secondary Storage Area" />
                <button className="btn btn-primary">Submit</button>
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

const formWrapped = reduxForm({
    form: 'productCreate',
    validate
})(ProductCreate);

export default connect(null, {createProduct})(formWrapped);

