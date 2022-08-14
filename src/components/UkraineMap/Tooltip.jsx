/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

function Tooltip({
  data: { value },
}) {
  return (
    <div>{value}</div>
  );
}

Tooltip.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
};

Tooltip.defaultProps = {
  data: {},
};

export default Text;
