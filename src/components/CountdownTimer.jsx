import React from 'react';

const CountdownTimer = ({ days, hours, minutes, seconds }) => {
  
  return (
    <div>
      <div className="cd_timer">
        <div className="cd_item">
          {days ? days : 0 }
          <span>days</span>
        </div>
        <div className="cd_item">
          {hours ? hours : 0 }
          <span>hours</span>
        </div>
        <div className="cd_item">
          {minutes ? minutes : 0 }
          <span>minutes</span>
        </div>
        <div className="cd_item">
          {seconds ? seconds : 0 }
          <span>seconds</span>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
