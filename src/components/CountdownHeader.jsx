import React from 'react';

const CountdownHeader = ({ title }) => {
  return (
    <div className="cd_header">
      <h2>{title}<span>Countdown</span></h2>
    </div>
  );
}

export default CountdownHeader;
