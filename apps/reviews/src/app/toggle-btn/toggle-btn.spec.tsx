import { render } from '@testing-library/react';

import ToggleBtn from './toggle-btn';

describe('ToggleBtn', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ToggleBtn />);
    expect(baseElement).toBeTruthy();
  });
});
