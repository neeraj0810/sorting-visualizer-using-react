import {Slider} from 'antd';
import React from 'react';

const SpeedSlider = ({onSpeedChange, isVisualizing}) => {
  return (
    <div className ="slider">
      <div className="text">
        Visualization Speed
      </div>
      <Slider
        disabled={isVisualizing}
        defaultValue={30}
        style={{width: 200}}
        handleStyle={{borderColor: 'black'}}
        trackStyle={{background: 'black'}}
        onChange={onSpeedChange}
      />
    </div>
  );
};

export default SpeedSlider;
