import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import removeItem from '../actions/removeProduct';


class Product extends React.Component {
    state = {
        timeLeft: this.props.item.secondary_shelf_life,
        id: this.props.item.id,
        timer: 0
    }

    handleStart = () => {
        let timer = setInterval(() => {
            let timeLeft = this.state.timeLeft - 1;
            this.setState({ timeLeft: timeLeft });
        }, 1000)
        this.setState({ timer: timer })
    }

    handleReset = () => {
        clearInterval(this.state.timer);
        this.setState({timeLeft: this.props.item.secondary_shelf_life});
    }

    displayTimer = () => {
        let timeLeft = this.state.timeLeft;
        let hours = Math.floor(timeLeft/60/60);
        let minutes = Math.floor((timeLeft/60)%60);
        let seconds = timeLeft - ((hours*60*60) + minutes*60);
        return `${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    }

    render() {
         return (
            <>
                <div className="card" style={{width: '50rem'}}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-8">
                                <h5 className="card-title d-inline">{this.props.item.name}</h5>
                            </div>
                            <div className="col-2 align-items-right">
                                <Link className="btn btn-secondary btn-sm align-right" to={`/products/${this.state.id}`} >Edit Item</Link>
                            </div>
                            <div className="col-2 align-items-right">
                                <button className="btn btn-danger btn-sm align-right" onClick={() => this.props.removeItem(this.props.item.id)} >Remove Item</button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-4">
                                <button className="btn btn-success btn-sm" onClick={this.handleStart}>Start</button>
                                <button className="btn btn-danger btn-sm" onClick={this.handleReset}>Reset</button>
                            </div>
                            <div className="col-8">
                                <div className="card d-inline" style={{margin: '5px'}}>{this.displayTimer()}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


export default connect(null, {removeItem })(Product)