import React from 'react';
import NumItems from './numItems';
import { connect } from 'react-redux';

const Home = (props) => {
    return(
            <div className="jumbotron">
                <h1 className="display-4 text-center">Prep Timers</h1>
                <NumItems products={props.products} />
            </div>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps)(Home);