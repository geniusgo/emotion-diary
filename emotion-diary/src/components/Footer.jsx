import './Footer.css';
import Button from './commons/Button';

const Footer = ({ type, onClick, onCreate, onUpdate }) => {
  // 이벤트 핸들러 이름 중복 이슈 해결이 필요
  return (
    <div className='footer-container'>
      <Button onClick={onClick} text='취소하기' />
      <Button onClick={type === 'edit' ? onUpdate : onCreate} text='작성 완료' type='positive' />
    </div>
  );
};

export default Footer;
