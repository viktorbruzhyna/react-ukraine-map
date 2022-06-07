/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import regions from './regions';
import regionsUk from '../../locales/uk/regions.json';

function UkraineMap({
  lang,
  width,
  fullWidth,
  data,
  backgroundColor: defaultBg,
  borderColor: defaultBc,
  borderWidth: defaultBw,
  fontColor: defaultFc,
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

  const isUk = lang === 'uk';

  const mapRatio = 1.5;
  const height = mapWidth / mapRatio;

  const regionList = Object.entries(regions);

  return (
    <div ref={wrapper}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: mapWidth, height }}
        width="612.47321"
        height="408.0199"
        viewBox="0 0 612.47321 408.0199"
      >
        {regionList.map(([id, { name, d }]) => {
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
        {regionList.map(([id, { name, t }]) => {
          const { fontColor, label } = data.find(({ key }) => key === id) || {};

          const regionName = isUk ? regionsUk[name] : name;
          const fill = fontColor || defaultFc;
          const displayLabel = label || regionName;

          const textProps = {
            ...t,
            textAnchor: 'middle',
            style: { font: 'bold 6px sans-serif', fill },
          };

          return (
            t && (
              <text {...textProps}>{displayLabel}</text>
            )
          );
        })}
      </svg>
    </div>
  );
}

UkraineMap.propTypes = {
  lang: PropTypes.oneOf(['uk', 'en']),
  width: PropTypes.number,
  fullWidth: PropTypes.bool,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  fontColor: PropTypes.string,
  borderWidth: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOf(Object.entries(regions).map(([key]) => key)).isRequired,
      backgroundColor: PropTypes.string,
      borderColor: PropTypes.string,
      borderWidth: PropTypes.number,
      fontColor: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
};

UkraineMap.defaultProps = {
  width: 700,
  fullWidth: false,
  data: [],
  backgroundColor: '#2596be',
  borderColor: 'white',
  fontColor: 'black',
  borderWidth: 0.5,
  lang: 'en',
};

export default UkraineMap;
