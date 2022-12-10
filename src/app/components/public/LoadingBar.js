import React from 'react';
import style from './LoadingBar.css';

const LoadingBar = () => {
  return (
    <div className={style.container}>
      <div className={style.loading_bar}></div>
    </div>
  );
};

export default LoadingBar;
