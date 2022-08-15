/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import Path from './Path';
import Text from './Text';

function Region({
  region,
  style,
  data,
  isUk,
  setTooltipData,
  showInlineLabels,
}) {
  return (
    <>
      <Path
        region={region}
        data={data}
        style={style}
        setTooltipData={setTooltipData}
      />
      {showInlineLabels && (
        <Text
          region={region}
          data={data}
          style={style}
          isUk={isUk}
        />
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
  setTooltipData: PropTypes.func.isRequired,
  showInlineLabels: PropTypes.bool.isRequired,
};

Region.defaultProps = {
  data: {},
};

export default Region;
