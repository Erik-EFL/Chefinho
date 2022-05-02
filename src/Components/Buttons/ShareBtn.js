import React, { useState } from 'react';
import shareIcon from '../../images/shareIcon.svg';

function ShareBtn() {
  const [copy, setCopy] = useState(false);

  const copyLink = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    setCopy(true);
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
