import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import shareIcon from '../../images/shareIcon.svg';

function ShareBtn() {
  const [copy, setCopy] = useState(false);
  const history = useHistory();

  const copyLink = () => {
    if (history.location.pathname.includes('in-progress')) {
      const url = history.location.pathname.split('/in-progress')[0];
      navigator.clipboard.writeText(`http://localhost:3000${url}`);
      setCopy(true);
    } else {
      const url = window.location.href;
      navigator.clipboard.writeText(url);
      setCopy(true);
    }
  };

  return (
    <div>
      <button
        type="button"
        data-testid="share-btn"
        onClick={ copyLink }
      >
        <img src={ shareIcon } alt="share" />
      </button>
      {copy && <span>Link copied!</span>}
    </div>
  );
}

export default ShareBtn;
