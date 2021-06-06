import React from 'react';
import {Menu, Dropdown} from 'antd';
import {DownOutlined} from '@ant-design/icons';
import '../Visualizer.css';

const AlgorithmDropDown = ({
  currentAlgorithm,
  algorithms,
  onAlgorithmChange,
}) => {

  const menu = (
    <Menu style={{width: '150'}}>
      {algorithms.map(function (algorithm, idx) {
        return (
          <Menu.Item key={idx} onClick={() => onAlgorithmChange(algorithm)}>
            {algorithm}
          </Menu.Item>
        );
      })}
    </Menu>
  );
  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <div className = "dropdown">
        {currentAlgorithm} <DownOutlined />
      </div>
    </Dropdown>
  );
};

export default AlgorithmDropDown;
