import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import shareIcon from '../../images/shareIcon.svg';

function ShareBtn() {
  const [copy, setCopy] = useState(false);
  const history = useHistory();
  const TimeOut = 1000;
  const copyLink = () => {
    if (history.location.pathname.includes('in-progress')) {
      const url = history.location.pathname.split('/in-progress')[0];
      navigator.clipboard.writeText(`http://localhost:3000${url}`);
      setCopy(true);
      const timer = setTimeout(() => {
        setCopy(false);
      }, TimeOut);
      return () => clearTimeout(timer);
    }
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopy(true);
    const timer = setTimeout(() => {
      setCopy(false);
    }, TimeOut);
    return () => clearTimeout(timer);
  };

  return (
    <div style={ { position: 'relative' } }>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ copyLink }
      >
        <img src={ shareIcon } alt="share" />
      </button>
      <div
        style={ { position: 'absolute', marginTop: '15px', marginLeft: '-18px' } }
      >
        {copy && <span>Link copied!</span>}
      </div>
    </div>
  );
}

export default ShareBtn;
