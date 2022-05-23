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
  return (
    <UkraineMap />
  );
}
