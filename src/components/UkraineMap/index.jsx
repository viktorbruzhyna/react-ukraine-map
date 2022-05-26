/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import regions from './regions';

function UkraineMap({
  width, data, backgroundColor: defaultBg, borderColor: defaultBc, borderWidth: defaultBw,
}) {
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
        {Object.entries(regions).map(([id, { name, d }]) => {
          const {
            backgroundColor,
            borderColor,
            borderWidth,
          } = data.find(({ key }) => key === id) || {};

          const pathAttrs = {
            fill: backgroundColor || defaultBg,
            stroke: borderColor || defaultBc,
            strokeWidth: borderWidth || defaultBw,
          };

          return (
            <path
              d={d}
              title={name}
              id={id}
              {...pathAttrs}
            />
          );
        })}
      </svg>
    </div>
  );
}

UkraineMap.propTypes = {
  width: PropTypes.number,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOf(Object.entries(regions).map(([key]) => key)),
      backgroundColor: PropTypes.string,
      borderColor: PropTypes.string,
      borderWidth: PropTypes.number,
      data: PropTypes.shape({
        value: PropTypes.string,
      }),
    }),
  ),
};

UkraineMap.defaultProps = {
  width: 700,
  data: [],
  backgroundColor: '#2596be',
  borderColor: 'white',
  borderWidth: 0.5,
};

export default UkraineMap;
