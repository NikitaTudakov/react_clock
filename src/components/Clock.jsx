import React from 'react';
import PropTypes from 'prop-types';

export const Clock = ({ time, name }) => (
  <div className="clock">
    <h1>React clock</h1>
    <p>Name: {name}</p>
    <p>
      Current time:
      {' '}
      {time.toLocaleTimeString()}
    </p>

    {/* eslint-disable-next-line */}
    {console.log(`Current time: ${time.toLocaleTimeString()}`)}
  </div>
);

Clock.propTypes = {
  time: PropTypes.shape({
    toLocaleTimeString: PropTypes.func.isRequired,
  }).isRequired,
};
