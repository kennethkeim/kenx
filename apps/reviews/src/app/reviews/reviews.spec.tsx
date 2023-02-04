import { render } from '@testing-library/react';

import Reviews from './reviews';

describe('Reviews', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Reviews />);
    expect(baseElement).toBeTruthy();
  });
});
