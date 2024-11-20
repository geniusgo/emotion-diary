import './Editor.css';
import EmotionItem from './EmotionItem';
import Button from './Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const emotionList = [
  { emotionId: 1, emotionName: '완전 좋음' },
  { emotionId: 2, emotionName: '좋음' },
  { emotionId: 3, emotionName: '그럭 저럭' },
  { emotionId: 4, emotionName: '나쁨' },
  { emotionId: 5, emotionName: '끔찍함' },
];

const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) month = `0${month}`;
  if (date < 10) date = `0${date}`;

  return `${year}-${month}-${date}`;
};

const Editor = ({ onSubmit, initData }) => {
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: '',
  });

  const nav = useNavigate();

  // initData 업데이트돼서 들어오면 input 초기값들 추가되도록 useEffect 설정
  useEffect(() => {
    if (initData) {
      setInput({
        ...initData,
        createdDate: new Date(Number(initData.createdDate)),
      });
    }
  }, [initData]);

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === 'createdDate') {
      value = new Date(value);
    }

    setInput({ ...input, [name]: value });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className='editor'>
      <section className='date-section'>
        <h4>오늘의 날짜</h4>
        <input
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          name='createdDate'
          type='date'
        />
      </section>
      <section className='emotion-section'>
        <h4>오늘의 감정</h4>
        <div className='emotion-list-wrapper'>
          {emotionList.map((item) => {
            return (
              <EmotionItem
                onClick={() => {
                  onChangeInput({
                    target: {
                      name: 'emotionId',
                      value: item.emotionId,
                    },
                  });
                }}
                key={item.emotionId}
                {...item}
                isSelected={item.emotionId === input.emotionId ? true : false}
              />
            );
          })}
        </div>
      </section>
      <section className='content-section'>
        <h4>오늘의 일기</h4>
        <textarea
          onChange={onChangeInput}
          name='content'
          value={input.content}
          placeholder='오늘은 어땠나요? ...'
        />
      </section>
      <section className='button-section'>
        <Button onClick={() => nav('/')} text='취소하기' />
        <Button onClick={onClickSubmitButton} text='작성 완료' type='POSITIVE' />
      </section>
    </div>
  );
};

export default Editor;
