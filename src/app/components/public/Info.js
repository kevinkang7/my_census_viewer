import React from 'react';
import style from './Disclaimer.css';
import { connect } from 'react-redux';
import { openInfo } from '../../redux/actions';

const Info = (props) => {
  const handleClose = () => {
    props.dispatch(openInfo(false));
  };
  return (
    <div>
      {props.generalState.infoOpen ? (
        <div className={style.overlay}>
          <div className={style.container}>
            <div className={style.title}>ABOUT THIS MAP</div>
            <div className={style.content}>{props.children}</div>
            <button className={style.close} onClick={handleClose}>
              ACKNOWLEDGE
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
const mapStateToProps = (state) => ({
  generalState: state.general,
});
export default connect(mapStateToProps)(Info);
