import React from 'react';
import NumItems from './numItems';
import { connect } from 'react-redux';
import { TimerPic } from './timerPic';
import { Food } from './food';

const Home = (props) => {
    return(
            <>
            <div className="jumbotron">
                <h1 className="display-4 text-center">Prep Timers</h1>
                <NumItems products={props.products} />
            </div>
            <div className="row">
                <div className="col-6">
                    <TimerPic />
                </div>
                <div className="col-6" >
                    <Food />
                </div>
            </div>
            </>
    )
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}
export default connect(mapStateToProps)(Home);