import './Button.css';

const Button = ({ text, onClick, type }) => {
  return (
    <button className={'button ' + type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
