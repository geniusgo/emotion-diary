import './Button.css';

const Button = ({ text, type, onDateChange }) => {
  return (
    <button className={`button${type ? ` ${type}` : ''}`} onClick={onDateChange}>
      {text}
    </button>
  );
};

export default Button;
