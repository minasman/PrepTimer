import React from 'react';
import { connect } from 'react-redux';

class PrepTimers extends React.Component {

    render() {
        console.log(this.props)
        return (

            <div>Prep Timers</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

        products: state.products
    }
}

export default connect(mapStateToProps)(PrepTimers)