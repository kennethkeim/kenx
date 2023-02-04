import React from 'react';
import { render } from '@testing-library/react-native';

import Timer from './timer';

describe('Timer', () => {
  it('should render successfully', () => {
    const { container } = render(<Timer />);
    expect(container).toBeTruthy();
  });
});
