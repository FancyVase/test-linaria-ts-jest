import * as React from 'react';
import {render} from '@testing-library/react';
import '@testing-library/jest-dom';

import {LinariaComponent} from './LinariaComponent';

describe('LinariaComponent', () => {
  it('renders', () => {
    const {getByTestId} = render(<LinariaComponent />);
    const component = getByTestId('linaria');

    expect(component).toBeInTheDocument();
    expect(component).toHaveClass('linaria');
  });
});
