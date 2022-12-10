import React from 'react';
import { Link } from 'react-router-dom';
import style from './ContentCard.css';

const ContentCard = ({ children, title, buttonText, link, newTab }) => {
  return (
    <div className={style.container}>
      <div className={style.title}>{title}</div>
      <div className={style.content}>{children}</div>
      <Link to={link} className={style.button} target={newTab ? '_blank' : ''}>
        {buttonText}
      </Link>
    </div>
  );
};

export default ContentCard;
