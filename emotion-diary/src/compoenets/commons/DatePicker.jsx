import './DatePicker.css';
import { dateFormater } from '../../utils/date-formater';

const DatePicker = ({ date }) => {
  const onChange = () => {};

  return (
    <div className='date-picker-container'>
      <input onChange={onChange} type='date' name='datePicker' value={dateFormater(date, '-')} />
    </div>
  );
};

export default DatePicker;
