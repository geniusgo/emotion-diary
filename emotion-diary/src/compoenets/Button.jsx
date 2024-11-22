import './Button.css';

const Button = ({ text, type, onClick }) => {
  return (
    <div className='button-container'>
      <button className={`button${type ? ` ${type}` : ''}`} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
