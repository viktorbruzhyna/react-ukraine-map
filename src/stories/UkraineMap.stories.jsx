/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import UkraineMap from '../components/UkraineMap';
import Tooltip from './Tooltip';

import './custom-styles.css';

export default {
  title: 'UkraineMap',
  component: UkraineMap,
};

export function Simple() {
  return (
    <UkraineMap width={700} />
  );
}

export function FullWidth() {
  return (
    <UkraineMap fullWidth />
  );
}

export function UkrainianLanguage() {
  return (
    <UkraineMap fullWidth lang="uk" />
  );
}

export function CustomColors() {
  const style = {
    backgroundColor: 'blue',
    borderColor: 'yellow',
    borderWidth: 0.5,
    fontSize: 6,
  };

  return (
    <UkraineMap style={style} showInlineLabels={false} fullWidth lang="uk" />
  );
}

export function CustomRegionColors() {
  const data = [
    {
      key: 'TP',
      backgroundColor: 'red',
      borderColor: 'yellow',
      borderWidth: 1,
      fontColor: 'yellow',
    },
  ];

  return (
    <UkraineMap data={data} fullWidth lang="uk" />
  );
}

export function CustomRegionLabel() {
  const data = [
    {
      key: 'TP',
      label: 'Файна область',
    },
  ];

  return (
    <UkraineMap data={data} fullWidth lang="uk" />
  );
}

export function ShowValueLabel() {
  const data = [
    {
      key: 'TP',
      value: '1,253,213',
      fontColor: 'white',
    },
    {
      key: 'PL',
      value: '0.9999%',
      fontColor: 'white',
    },
  ];

  return (
    <UkraineMap data={data} fullWidth lang="uk" />
  );
}

export function ShowTooltip() {
  const data = [
    {
      key: 'TP',
      value: '1,253,213',
      fontColor: 'white',
    },
    {
      key: 'PL',
      value: '0.9999%',
      fontColor: 'white',
    },
  ];

  return (
    <UkraineMap data={data} fullWidth lang="uk" showHoverTooltip showInlineLabels={false} />
  );
}

export function CustomTooltip() {
  const data = [
    {
      key: 'TP',
      label: 'Населення',
      value: '1,253,213',
      fontColor: 'white',
    },
  ];

  return (
    <UkraineMap data={data} fullWidth lang="uk" showHoverTooltip showInlineLabels={false} tooltipComponent={Tooltip} />
  );
}
