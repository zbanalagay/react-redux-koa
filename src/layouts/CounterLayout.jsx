import React, { PropTypes } from 'react';

export function CounterLayout({ children }) {
  return (
    <div>
      <h2>A Temporary Counter</h2>
      { children }
    </div>
  );
}

CounterLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CounterLayout;
