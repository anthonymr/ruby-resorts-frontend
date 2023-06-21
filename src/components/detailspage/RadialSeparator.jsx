import React from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';

function Separator({ turns, style }) {
  return (
    <div
      style={{
        position: 'absolute',
        height: '100%',
        transform: `rotate(${turns}turn)`,
      }}
    >
      <div style={style} />
    </div>
  );
}

function RadialSeparators({ count, style }) {
  const turns = 1 / count;
  return _.range(count).map((index) => (
    <Separator key={index} turns={index * turns} style={style} />
  ));
}

RadialSeparators.propTypes = {
  count: PropTypes.number,
  style: PropTypes.shape({
    background: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

RadialSeparators.defaultProps = {
  count: 0,
  style: {},
};
Separator.propTypes = {
  turns: PropTypes.number,
  style: PropTypes.shape({
    background: PropTypes.string,
    width: PropTypes.string,
    height: PropTypes.string,
  }),
};

Separator.defaultProps = {
  turns: 0,
  style: {},
};

export default RadialSeparators;
