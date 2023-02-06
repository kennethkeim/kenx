import React from 'react';
import { render } from '@testing-library/react-native';

import Ticker from './ticker';

describe('Ticker', () => {
  it('should render successfully', () => {
    const { container } = render(<Ticker />);
    expect(container).toBeTruthy();
  });
});
