/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

function Path({
  region,
  style: {
    backgroundColor: defaultBackgroundColor,
    borderColor: defaultBorderColor,
    borderWidth: defaultBorderWidth,
  },
  data,
  setTooltipData,
}) {
  const {
    backgroundColor,
    borderColor,
    borderWidth,
  } = data;

  const {
    d,
    name,
    id,
  } = region;

  const pathAttrs = {
    fill: backgroundColor || defaultBackgroundColor,
    stroke: borderColor || defaultBorderColor,
    strokeWidth: borderWidth || defaultBorderWidth,
  };

  const handleMouseMove = (event) => {
    setTooltipData({
      data,
      region,
      coords: {
        x: event.clientX,
        y: event.clientY,
      },
    });
  };

  return (
    <path
      d={d}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { setTooltipData(); }}
      title={name}
      id={id}
      {...pathAttrs}
    />
  );
}

Path.propTypes = {
  region: PropTypes.shape({
    d: PropTypes.string,
    name: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    fontColor: PropTypes.string,
    borderWidth: PropTypes.string,
    fontSize: PropTypes.string,
  }).isRequired,
  data: PropTypes.shape({
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.string,
  }),
  setTooltipData: PropTypes.func.isRequired,
};

Path.defaultProps = {
  data: {},
};

export default Path;
