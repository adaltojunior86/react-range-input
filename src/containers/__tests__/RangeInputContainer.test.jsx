import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import RangeInputContainer from '../RangeInputContainer';

describe('Test Range Input', () => {
  it('render without exploding', (done) => {
    const { container } = render(<RangeInputContainer />);
    expect(container).not.toBeUndefined();
    done();
  });

  it('should change values of input', (done) => {
    const { container, getByText } = render(<RangeInputContainer />);
    fireEvent.change(container.querySelector('input[name="min"]'), { target: { value: 2 } });
    expect(getByText('2')).not.toBeUndefined();
    fireEvent.change(container.querySelector('input[name="max"]'), { target: { value: 100 } });
    expect(getByText('100')).not.toBeUndefined();
    fireEvent.change(container.querySelector('input[name="step"]'), { target: { value: 5 } });
    expect(container.querySelector('input[name="step"]').value).toEqual('5');
    done();
  });

  it('should change values to 0 when value isempty', (done) => {
    const { container } = render(<RangeInputContainer />);
    fireEvent.change(container.querySelector('input[name="min"]'), { target: { value: 5 } });
    fireEvent.change(container.querySelector('input[name="min"]'), { target: { value: '' } });
    expect(container.querySelector('input[name="min"]').value).toEqual('0');
    done();
  });
});
