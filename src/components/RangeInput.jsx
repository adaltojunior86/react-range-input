import React, { Fragment } from 'react';
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
  },
};

const RangeInput = ({ min, max, step, onChangeRangeValues, value }) => (
  <Fragment>
    <div style={styles.root}>
      <span style={styles.span}>{value > min ? value : min}</span>
      <input
        style={styles.range}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChangeRangeValues}
      />
      <span style={styles.span}>{max}</span>
    </div>
  </Fragment>
);
RangeInput.propTypes = {
  min: number,
  max: number,
  step: number
};

RangeInput.defaultProps = {
  min: 0,
  max: 10,
  step: 2,
};

export default RangeInput;
