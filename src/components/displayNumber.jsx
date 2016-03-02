import React, { PropTypes } from 'react';

// This is a stateless function/component. it only takes in a prop and then displays it
function DisplayNumber({ numToDisplay }) {
  return (
    <div>
      <h1>{ numToDisplay }</h1>
    </div>
  );
}

DisplayNumber.propTypes = {
  numToDisplay: PropTypes.number
};

export default DisplayNumber;
