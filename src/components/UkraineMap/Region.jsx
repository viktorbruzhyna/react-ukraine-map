/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Path from './Path';
import Text from './Text';
import Tooltip from './Tooltip';

function Region({
  region,
  style,
  data,
  isUk,
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      <Path
        region={region}
        data={data}
        style={style}
        onHover={setShowTooltip}
      />
      <Text
        region={region}
        data={data}
        style={style}
        isUk={isUk}
      />
      {showTooltip && (
        <Tooltip data={data} />
      )}
    </>
  );
}

Region.propTypes = {
  region: PropTypes.shape({
    d: PropTypes.string,
    t: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }),
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
  isUk: PropTypes.bool.isRequired,
  data: PropTypes.shape({
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    borderWidth: PropTypes.string,
    fontColor: PropTypes.string,
    label: PropTypes.string,
  }),
};

Region.defaultProps = {
  data: {},
};

export default Region;
