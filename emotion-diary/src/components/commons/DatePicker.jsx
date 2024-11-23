import './DatePicker.css';
import { dateFormatter } from '../../utils/date-formatter';
import { useEffect } from 'react';

const DatePicker = ({ diaryDate, setDiaryDate }) => {
  const handleDateChange = (e) => {
    setDiaryDate(new Date(e.target.value));
  };

  return (
    <div className='date-picker-container'>
      <input
        onChange={handleDateChange}
        type='date'
        name='datePicker'
        value={dateFormatter(diaryDate, '-')}
      />
    </div>
  );
};

export default DatePicker;
