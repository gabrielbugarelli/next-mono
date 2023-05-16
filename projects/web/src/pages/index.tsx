import React from 'react';
import { sum, sub } from '@next-mono/utils/math';

const HomeScreen = () => {

  return (
    <main>
      <h1> Home screen </h1>

      <p>sum: {sum(1, 1)}</p>
      <p>sub: {sub(2, 1)}</p>
    </main>
  )
};

export default HomeScreen;