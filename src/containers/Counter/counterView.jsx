import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { actions as counterActions } from '../../redux/modules/counter';
import DisplayNumber from '../../components/displayNumber/displayNumber';

const mapStateToProps = (state) => ({
  counter: state.counter
});

// this is a smart component. it contains a dumb component (DisplayNumber) to help display logic
export class CounterView extends React.Component {
  static propTypes = {
    counter: PropTypes.object.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    addAsync: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
    this.handleAddAsync = this.handleAddAsync.bind(this);
  }

  handleIncrement() {
    this.props.increment();
  }

  handleDecrement() {
    this.props.decrement();
  }

  handleAddAsync() {
    this.props.addAsync();
  }

  render() {
    return (
      <div>
        <DisplayNumber numToDisplay={this.props.counter} />
        <button className="btn btn-default" onClick={this.handleDecrement}>decrement</button>
        <button className="btn btn-default" onClick={this.handleIncrement}>increment</button>
        <button className="btn btn-default" onClick={this.handleAddAsync}>Async Add</button>
        <Link to="/counter/hello">Let's Do Some Routing!</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, counterActions)(CounterView);
