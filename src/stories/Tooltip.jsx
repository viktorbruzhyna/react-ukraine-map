import React from 'react';
import PropTypes from 'prop-types';

function Tooltip({ regionName, data: { value, label } }) {
  return (
    <div style={{
      backgroundColor: 'black', color: 'white', padding: 12, textAlign: 'center',
    }}
    >
      <strong>{regionName}</strong>
      {value && (
        <div>
          {label}
          :
          {' '}
          {value}
        </div>
      )}
    </div>
  );
}

Tooltip.propTypes = {
  data: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  regionName: PropTypes.string.isRequired,
};

export default Tooltip;
