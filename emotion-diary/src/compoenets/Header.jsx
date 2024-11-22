import './Header.css';

const Header = ({ text, leftBtn, rightBtn }) => {
  return (
    <div className='header-container'>
      {leftBtn}
      <div className='header-title-container'>
        <p className='title'>{text}</p>
      </div>

      {rightBtn}
    </div>
  );
};

export default Header;
