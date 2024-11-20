import './Editor.css';
import EmotionItem from './EmotionItem';
import Button from './Button';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { emotionList } from '../utils/constants.js';
import { getStringedDate } from '../utils/get-stringed-date.js';

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
