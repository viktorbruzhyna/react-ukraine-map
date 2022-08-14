/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import regionsUk from '../../locales/uk/regions.json';

function Text({
  region: {
    name,
    t,
  },
  style: {
    fontColor: defaultFontColor,
    fontSize: defaultFontSize,
  },
  data,
  isUk,
}) {
  const {
    fontColor, fontSize, label, value,
  } = data;
  const regionName = isUk ? regionsUk[name] : name;
  const fill = fontColor || defaultFontColor;
  const size = fontSize || defaultFontSize;
  const displayLabel = value || label || regionName;

  const textProps = {
    ...t,
    style: { font: `bold ${size}px sans-serif`, fill, textAnchor: 'middle' },
  };

  return (
    t && (
      <text {...textProps}>{displayLabel}</text>
    )
  );
}

Text.propTypes = {
  region: PropTypes.shape({
    d: PropTypes.string,
    t: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }),
    name: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  isUk: PropTypes.bool.isRequired,
  style: PropTypes.shape({
    fontColor: PropTypes.string.isRequired,
    fontSize: PropTypes.string.isRequired,
  }).isRequired,
  data: PropTypes.shape({
    fontColor: PropTypes.string,
    fontSize: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
  }),
};

Text.defaultProps = {
  data: {},
};

export default Text;
