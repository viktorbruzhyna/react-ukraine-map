/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

function Path({
  region: {
    d,
    name,
    id,
  },
  style: {
    backgroundColor: defaultBackgroundColor,
    borderColor: defaultBorderColor,
    borderWidth: defaultBorderWidth,
  },
  data,
}) {
  const {
    backgroundColor,
    borderColor,
    borderWidth,
  } = data;

  const pathAttrs = {
    fill: backgroundColor || defaultBackgroundColor,
    stroke: borderColor || defaultBorderColor,
    strokeWidth: borderWidth || defaultBorderWidth,
  };

  return (
    <path
      d={d}
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
};

Path.defaultProps = {
  data: {},
};

export default Path;
