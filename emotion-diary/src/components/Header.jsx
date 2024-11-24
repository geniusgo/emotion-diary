import './Header.css';

const Header = ({ type, text, leftBtn, rightBtn }) => {
  return (
    <div className='header-container'>
      {leftBtn}
      <div className='header-title-container'>
        <p className='title'>{text}</p>
      </div>
      {type === 'edit' ? rightBtn : <div className='button-container'></div>}
    </div>
  );
};

export default Header;
