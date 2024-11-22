import './DetailContent.css';

const DetailContent = () => {
  return (
    <section className='detail-content'>
      <h4>오늘의 일기</h4>
      <div>
        <textarea name='content' placeholder='오늘의 일기를 작성해 보세요...'></textarea>
      </div>
    </section>
  );
};

export default DetailContent;
