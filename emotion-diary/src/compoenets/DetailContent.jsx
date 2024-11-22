import './DetailContent.css';
import TextArea from './commons/TextArea';

const DetailContent = ({ content, readOnly = false }) => {
  return (
    <section className='detail-content'>
      <h4>오늘의 일기</h4>
      <TextArea content={content} readOnly={true} />
    </section>
  );
};

export default DetailContent;
