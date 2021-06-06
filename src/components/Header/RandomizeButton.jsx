import React from 'react';
import {Button} from 'antd';
import {RedoOutlined} from '@ant-design/icons';
import '../Visualizer.css'

const RandomizeButton = ({onClick}) => {
  return (
    <div style={{marginTop: 8}}>
      <Button
        type="primary"
        className="generate-button"
        icon={<RedoOutlined />}
        onClick={onClick}
      >
        GENERATE
      </Button>
    </div>
  );
};

export default RandomizeButton;
