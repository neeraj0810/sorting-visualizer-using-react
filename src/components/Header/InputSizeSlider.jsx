import {Slider} from 'antd';
import React from 'react';

const InputSizeSlider = ({onInputSizeChanged, isVisualizing}) => {
  return (
    <div className="silder">
      <div className="text">Array Size</div>
      <Slider
        disabled={isVisualizing}
        defaultValue={100}
        min={30}
        max={400}
        step={2}
        style={{width: 200}}
        handleStyle={{borderColor: '#0D1929'}}
        trackStyle={{background: '#0D1929'}}
        onChange={onInputSizeChanged}
      />
    </div>
  );
};

export default InputSizeSlider;
