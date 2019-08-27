import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RangeInput from '../RangeInput';

describe('Test Range Input', () => {
  it('render without exploding', (done) => {
    const { container } = render(<RangeInput />);
    expect(container).not.toBeUndefined();
    done();
  });
});
