import React, {PureComponent} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {increaseCount, decreaseCount, resetCount} from '../actions/index';

class Counter extends PureComponent {
  render() {
    return (
      <div> 
        <h1> Counter </h1>
        <h1> {this.props.count} </h1>
        <button onClick={this.props.handleIncrease}> Increment </button>
        <button onClick={this.props.handleDecrease}> Decreament </button>
        <button onClick={this.props.handleReset}> Reset </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter.count,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    handleIncrease: increaseCount,
    handleDecrease: decreaseCount,
    handleReset: resetCount,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);