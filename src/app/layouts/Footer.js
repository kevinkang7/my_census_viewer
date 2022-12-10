import React from 'react';
import style from './Footer.css';

const Footer = () => {
  return (
    <div className={style.container}>
      <div className={style.content}>
        Boston Planning & Development Agency
        <span className={style.span}>
          One City Hall Square, Boston, MA 02201
        </span>
      </div>
      <div className={style.content}>
        © 2021 Boston Planning & Development Agency
      </div>
    </div>
  );
};

export default Footer;
