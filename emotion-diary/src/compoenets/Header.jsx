import './Header.css';

const Header = ({ text, leftBtn, rightBtn }) => {
  return (
    <div className='header-container'>
      {leftBtn || null}
      <div className='title'>{text}</div>
      {rightBtn || null}
    </div>
  );
};

export default Header;
