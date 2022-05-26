/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import regions from './regions';

function UkraineMap({ width }) {
  const mapRatio = 1.5;
  const height = width / mapRatio;

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ width, height }}
        width="612.47321"
        height="408.0199"
        viewBox="0 0 612.47321 408.0199"
      >
        {Object.entries(regions).map(([key, { name, d }]) => (
          <path
            d={d}
            title={name}
            id={key}
          />
        ))}
      </svg>
    </div>
  );
}

UkraineMap.propTypes = {
  width: PropTypes.number,
};

UkraineMap.defaultProps = {
  width: 600,
};

export default UkraineMap;
