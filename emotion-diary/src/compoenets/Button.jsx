import './Button.css';

const Button = ({ text, onClick, type }) => {
  return (
    <div onClick={onClick} className='button-container'>
      <button className={type} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
