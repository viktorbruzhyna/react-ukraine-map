/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import regions from '../../data/regions';
import Region from './Region';
import Tooltip from './Tooltip';

function UkraineMap({
  lang,
  width,
  fullWidth,
  data,
  style,
  showInlineLabels,
  showHoverTooltip,
  tooltipComponent,
}) {
  const wrapper = useRef(null);
  const [mapWidth, setMapWidth] = useState(width);
  const [tooltipData, setTooltipData] = useState();

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
    <>
      <div ref={wrapper}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: mapWidth, height }}
          width="612.47321"
          height="408.0199"
          viewBox="0 0 612.47321 408.0199"
        >
          {regionList.map(([id, { name, d, t }]) => {
            const foundData = data.find(({ key }) => key === id) || {};

            return (
              <Region
                data={foundData}
                region={{
                  d, id, name, t,
                }}
                style={style}
                isUk={isUk}
                setTooltipData={setTooltipData}
                showInlineLabels={showInlineLabels}
              />
            );
          })}
        </svg>
      </div>
      {tooltipData && showHoverTooltip && (
        <Tooltip {...tooltipData} isUk={isUk} component={tooltipComponent} />
      )}
    </>
  );
}

UkraineMap.propTypes = {
  lang: PropTypes.oneOf(['uk', 'en']),
  width: PropTypes.number,
  fullWidth: PropTypes.bool,
  style: PropTypes.shape({
    backgroundColor: PropTypes.string,
    borderColor: PropTypes.string,
    fontColor: PropTypes.string,
    borderWidth: PropTypes.number,
    fontSize: PropTypes.number,
  }),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.oneOf(Object.entries(regions).map(([key]) => key)).isRequired,
      backgroundColor: PropTypes.string,
      borderColor: PropTypes.string,
      borderWidth: PropTypes.number,
      fontColor: PropTypes.string,
      label: PropTypes.string,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    }),
  ),
  showInlineLabels: PropTypes.bool,
  showHoverTooltip: PropTypes.bool,
  tooltipComponent: PropTypes.node,
};

UkraineMap.defaultProps = {
  width: 700,
  fullWidth: false,
  data: [],
  style: {
    backgroundColor: '#2596be',
    borderColor: 'white',
    borderWidth: 0.5,
    fontColor: 'white',
    fontSize: 6,
  },
  lang: 'en',
  showInlineLabels: true,
  showHoverTooltip: false,
  tooltipComponent: undefined,
};

export default UkraineMap;
