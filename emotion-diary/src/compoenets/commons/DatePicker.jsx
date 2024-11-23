import './DatePicker.css';
import { dateFormater } from '../../utils/date-formater';

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
        value={dateFormater(diaryDate, '-')}
      />
    </div>
  );
};

export default DatePicker;
