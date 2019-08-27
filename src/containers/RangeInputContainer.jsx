import React, { Fragment, useState } from 'react';
import RangeInput from '../components/RangeInput';

const useRangeInputContainer = () => {
  const [rangeValues, setRangeValues] = useState({
    min: 0,
    max: 10,
    step: 2,
  });
  const onChangeRangeValues = ({ target: { name, value } }) => {
    setRangeValues({ ...rangeValues, [name]: parseInt(value || 0, 10) });
  };
  return [rangeValues, onChangeRangeValues];
};

const useRangeInput = min => {
  const [rangeValue, setRangeValue] = useState(min);
  const onChangeValue = ({ target: { value } }) => {
    setRangeValue(parseInt(value, 10));
  };
  return [rangeValue, onChangeValue];
};

const RangeInputContainer = () => {
  const [{ min, max, step }, onChangeRangeValues] = useRangeInputContainer();
  const [rangeValue, onChangeValue] = useRangeInput(min);

  return (
    <Fragment>
      <div>
        <label htmlFor="min">
          Min:
          <input type="text" name="min" id="min" onChange={onChangeRangeValues} value={min} />
        </label>
        <label htmlFor="max">
          Max:
          <input type="text" name="max" id="max" onChange={onChangeRangeValues} value={max} />
        </label>
        <label htmlFor="step">
          Step:
          <input type="text" name="step" id="step" onChange={onChangeRangeValues} value={step} />
        </label>
      </div>
      <RangeInput min={min} max={max} step={step} onChangeRangeValues={onChangeValue} value={rangeValue} />
      <div>R$ {rangeValue}</div>
    </Fragment>
  );
};

export default RangeInputContainer;
