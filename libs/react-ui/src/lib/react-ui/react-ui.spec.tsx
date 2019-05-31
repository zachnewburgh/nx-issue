import React from 'react';
import { render, cleanup } from 'react-testing-library';

import ReactUi from './react-ui';

describe(' ReactUi', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<ReactUi />);
    expect(baseElement).toBeTruthy();
  });
});
