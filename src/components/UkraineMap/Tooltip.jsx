/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import regionsUk from '../../locales/uk/regions.json';

const wrapperStyle = ({ x, y }) => ({
  position: 'fixed',
  left: x,
  top: y,
  zIndex: 999,
});

const tooltipStyle = {
  padding: 10,
  fontFamily: 'sans-serif',
  backgroundColor: 'white',
};

function Tooltip({
  data,
  region: { name },
  coords: { x, y },
  isUk,
  component,
}) {
  const [{ width, height }, setSize] = useState({ width: 0, height: 0 });
  const ref = useRef(null);
  const regionName = isUk ? regionsUk[name] : name;
  const paddingTop = 10;

  useEffect(() => {
    setSize({
      width: ref.current.clientWidth,
      height: ref.current.clientHeight,
    });
  }, [x, y]);

  const Component = component || 'div';

  return (
    <div
      ref={ref}
      style={wrapperStyle({ x: x - width / 2, y: y - height - paddingTop })}
    >
      {component ? (
        <Component data={data} regionName={regionName} />
      ) : (
        <div style={tooltipStyle}>
          {regionName}
          {data?.value && (
            <span>
              {' '}
              -
              {' '}
              {data.value}
            </span>
          )}
        </div>
      )}

    </div>
  );
}

Tooltip.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }),
  region: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
  coords: PropTypes.shape({
    x: PropTypes.number,
    y: PropTypes.number,
  }).isRequired,
  isUk: PropTypes.func.isRequired,
  component: PropTypes.node,
};

Tooltip.defaultProps = {
  data: {},
  component: undefined,
};

export default Tooltip;
