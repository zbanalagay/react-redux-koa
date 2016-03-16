import React from 'react';
import { Link } from 'react-router';

export default class HelloRoutes extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Routing!!</h1>
        <Link to="/">Go to the weather page</Link>
      </div>
    );
  }
}
