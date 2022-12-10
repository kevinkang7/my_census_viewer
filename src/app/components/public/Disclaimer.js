import React, { useState } from 'react';
import style from './Disclaimer.css';

const Disclaimer = ({ children }) => {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {open ? (
        <div className={style.overlay}>
          <div className={style.container}>
            <div className={style.title}>Disclaimer</div>
            <div className={style.content}>{children}</div>
            <button className={style.close} onClick={handleClose}>
              ACKNOWLEDGE
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Disclaimer;
