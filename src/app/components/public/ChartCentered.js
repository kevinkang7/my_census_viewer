import React from 'react';
import style from './ChartCentered.css';

const ChartCentered = (props) => {
  const { Component, ...otherProps } = props;
  return (
    <div className={style.container}>
      <Component {...otherProps} />
    </div>
  );
};

export default ChartCentered;
