import React from 'react';
import { connect } from 'react-redux';
import getProducts from '../../actions/getProducts';
import SortProducts from '../sortProducts';

class PrepTimers extends React.Component {
    state = {
        productSort: false,
        buttonText: "Sort"
    }

    componentDidMount() {
        this.props.getProducts();
    }

    callSort() {
        this.setState({productSort: (this.state.productSort === false) ? true : false })
        this.setState({buttonText: (this.state.buttonText === "Sort" ? "Unsort" : "Sort" )})
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col">
                        <h2 className="text-center">Prep Timers</h2>
                    </div>
                    <div className="col justify-content-center">
                        <button className="btn btn-primary align-self-center" onClick={() => this.callSort()} >{this.state.buttonText}</button>
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <SortProducts products={this.props.products} productSort={this.state.productSort} />
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

export default connect(mapStateToProps,{getProducts})(PrepTimers)