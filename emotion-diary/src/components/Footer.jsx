import './Footer.css';
import Button from './commons/Button';

const Footer = ({ onClick, onCreate }) => {
  return (
    <div className='footer-container'>
      <Button onClick={onClick} text='취소하기' />
      <Button onClick={onCreate} text='작성 완료' type='positive' />
    </div>
  );
};

export default Footer;
