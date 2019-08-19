import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RangeInput from '../RangeInput';

describe('Test Range Input', () => {
  it('render without exploding', (done) => {
    const { container } = render(<RangeInput />);
    expect(container).not.toBeUndefined();
    done();
  });

  it('render without exploding', (done) => {
    const { container, getByText } = render(<RangeInput />);
    fireEvent.change(container.querySelector('input[type="range"]'), { target: { value: 2 } });
    expect(getByText('2')).not.toBeUndefined();
    done();
  });
});
