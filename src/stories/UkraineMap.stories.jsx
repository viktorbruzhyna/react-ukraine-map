/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import UkraineMap from '../components/UkraineMap';

import './custom-styles.css';

export default {
  title: 'UkraineMap',
  component: UkraineMap,
};

export function Simple() {
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
    <UkraineMap width={1000} data={data} />
  );
}

export function FullWidth() {
  // const data = [
  //   {
  //     key: 'TP',
  //     backgroundColor: 'red',
  //     borderColor: 'yellow',
  //     borderWidth: 1,
  //   },
  // ];

  return (
    <UkraineMap fullWidth />
  );
}
