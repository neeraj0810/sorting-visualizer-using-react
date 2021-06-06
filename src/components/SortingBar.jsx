import React from 'react';

const SortingBar = (props) => {
  let color = 'DodgerBlue';

  switch (props.colorCode) {
    case 1:
      color = 'orange';
      break;
    case 2:
      color = 'red';
      break;
    case 3:
      color = 'yellow';
      break;
    default:
      color = "DodgerBlue";
      break;
  }

  return <div style={{...props.style, backgroundColor: color}}></div>;
};

export default SortingBar;
