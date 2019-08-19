import React, { useState } from 'react';
import { number } from 'prop-types';

const styles = {
  root: {
    border: '1px dashed red',
    margin: '20px',
    padding: '20px',
    display: 'flex',
  },
  span: {
    border: '1px solid silver',
    borderRadius: '50px',
    width: '30px',
    height: '30px',
    lineHeight: 2,
    textAlign: 'center',
    display: 'block',
  },
  range: {
    flexGrow: 1,
  }
};

const useRangeInput = (min) => {
  const [rangeValue, setRangeValue] = useState(min);
  const onChangeValue = ({ target: { value } }) => {
    setRangeValue(value);
  };
  return [
    rangeValue, onChangeValue,
  ];
};

const RangeInput = ({ min, max, step }) => {
  const [rangeValue, onChangeValue] = useRangeInput(min);
  const minValue = min > rangeValue ? min : rangeValue;
  return (
    <div style={styles.root}>
      <span style={styles.span}>{minValue}</span>
      <input style={styles.range} type="range" min={min} max={max} step={step} value={rangeValue} onChange={onChangeValue} />
      <span style={styles.span}>{max}</span>
    </div>
  );
};

RangeInput.propTypes = {
  min: number,
  max: number,
  step: number,
};

RangeInput.defaultProps = {
  min: 0,
  max: 10,
  step: 2,
};


export default RangeInput;
