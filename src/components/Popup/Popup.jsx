import React from 'react';
import './popup.styles.scss';

const Popup = ({ popupRef }) => {
  return (
    <div className="popup-container" ref={popupRef}>
      <h3>You have Signed Up succesfully!</h3>
    </div>
  );
};

export default Popup;
