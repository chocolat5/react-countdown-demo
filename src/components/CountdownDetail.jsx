import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { TiCalendar, TiPen } from 'react-icons/ti';

const CountdownDetail = ({ detail, editData, handleChange, toDate }) => {

  return (
    <div className="cd_detail">
      <dl>
        <dt>
          <input type="text" name="title" value={detail.title} placeholder="Type your title" onChange={editData} />
        </dt>
        <dd className="datepicker">
          <TiCalendar />
          <div className="datepicker_wrap">
            { !toDate && ( <p>Pick the date</p> ) }
            <DatePicker
              selected={toDate}
              onChange={handleChange} />
          </div>
        </dd>
        <dd className="cd_detail_memo">
          <TiPen />
          <textarea type="text" name="text" value={detail.text} placeholder="Add memo" onChange={editData} />
        </dd>
      </dl>
    </div>
  );
}

export default CountdownDetail;