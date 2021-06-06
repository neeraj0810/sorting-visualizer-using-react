import React from 'react';
import {Button} from 'antd';
import {PlayCircleOutlined} from '@ant-design/icons';

const StartButton = ({onClick}) => {
  return (
    <div style={{marginTop: 8}}>
      <Button
        type="primary"
        icon={<PlayCircleOutlined />}
        onClick={onClick}
      >
        Start
      </Button>
    </div>
  );
};

export default StartButton;
