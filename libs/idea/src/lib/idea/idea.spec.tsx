import React from 'react';
import { render, cleanup } from 'react-testing-library';

import Idea from './idea';

describe(' Idea', () => {
  afterEach(cleanup);

  it('should render successfully', () => {
    const { baseElement } = render(<Idea />);
    expect(baseElement).toBeTruthy();
  });
});
