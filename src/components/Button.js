import React from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from '../actions';

class Buttons extends React.Component{
    render(){
        return(
            <div>
                <button type="button" onClick={this.props.onIncrement}>
                    +
                </button>
                <button type="button" onClick={this.props.onDecrement}>
                    -
                </button>
            </div>
        )
    }
}

let mapDispatchProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement());
    }
}

Buttons = connect(undefined, mapDispatchProps)(Buttons);

export default Buttons;