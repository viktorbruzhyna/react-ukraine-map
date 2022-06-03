/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import regions from './regions';

function UkraineMap({
  width,
  fullWidth,
  data,
  backgroundColor: defaultBg,
  borderColor: defaultBc,
  borderWidth: defaultBw,
}) {
  const wrapper = useRef(null);
  const [mapWidth, setMapWidth] = useState(width);

  useEffect(() => {
    const handleResize = () => {
      setMapWidth(wrapper.current.clientWidth);
    };

    if (fullWidth) {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const mapRatio = 1.5;
  const height = mapWidth / mapRatio;

  return (
    <div ref={wrapper}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: mapWidth, height }}
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
  fullWidth: PropTypes.bool,
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
  fullWidth: false,
  data: [],
  backgroundColor: '#2596be',
  borderColor: 'white',
  borderWidth: 0.5,
};

export default UkraineMap;
