import React, { useState, useEffect } from 'react';
import moment from 'moment';

import CountdownHeader from './CountdownHeader';
import CountdownTimer from './CountdownTimer';
import CountdownDetail from './CountdownDetail';

import '../scss/style.scss';

const userData = {
  title: '',
  place: '',
  date: '',
  text: '',
};

const timeData = {
  days: 0,
  hours: 0,
  minutes: 0,
  seconds: 0,
};

const App = () => {
  const [data, setData] = useState(userData);
  const [toDate, setToDate] = useState('');
  const [leftDates, setLeftDates] = useState(timeData);

  useEffect(() => {
    setTimeout(() => {
      const now = moment();
      const format = 'MM DD YYYY, h:mm a';
      const then = moment(toDate, format);
      const countdown = then.diff(now); //ミリ秒で差を取得

      const days = then.diff(now, 'days');
      const hours = moment.duration(then.diff(now)).get('hours');
      const minutes = moment.duration(then.diff(now)).get('minutes');
      const seconds = moment.duration(then.diff(now)).get('seconds');

      if (countdown > 0) {
        setLeftDates({
          days,
          hours,
          minutes,
          seconds
        })
      }

    }, 1000);
  }, [, leftDates, toDate]);

  const handleChange = (date) => {
    setToDate(date);
  }

  const  editData = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  }
  

  return (
    <div className="app">
      <header className="app_header">
        <h1>React Countdown App Demo</h1>
      </header>
      <main className="cd_wrap">
        <CountdownHeader title={data.title} />
        <CountdownTimer leftDates={leftDates} days={leftDates.days} hours={leftDates.hours} minutes={leftDates.minutes} seconds={leftDates.seconds} />
        <CountdownDetail
          detail={data}
          editData={editData}
          handleChange={handleChange}
          toDate={toDate} />
      </main>
    </div>
  );
}

export default App;
