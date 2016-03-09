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
    decrement: PropTypes.func.isRequired
  };

  render() {
    const handleIncrement = () => this.props.increment();
    const handleDecrement = () => this.props.decrement();

    return (
      <div>
        <DisplayNumber numToDisplay={this.props.counter} />
        <button onClick={handleIncrement}>increment</button>
        <button onClick={handleDecrement}>decrement</button>
        <Link to="/hello">Let's Do Some Routing!</Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, counterActions)(CounterView);
