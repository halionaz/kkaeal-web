import { useGetEggs } from '@/domain/main/apis/useGetEggs';
import { usePostEggs } from '@/domain/main/apis/usePostEggs';
import { useState } from 'react';

import * as s from './style.css';
import { parseInputText } from '@/domain/main/utils/parseInputText';

const DailyView = () => {
  const { mutate: postEgg } = usePostEggs();
  const { data } = useGetEggs();

  const [inputText, setInputText] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parsedEgg = parseInputText(inputText);
    postEgg(
      {
        ...parsedEgg,
        categoryId: null,
      },
      {
        onSuccess: () => {
          setInputText('');
        },
      },
    );
  };

  return (
    <div className={s.Wrapper}>
      <ul>
        {data?.map(egg => (
          <li key={egg.id}>{egg.title}</li>
        ))}
      </ul>
      <form onSubmit={onSubmit}>
        <input type="text" value={inputText} onChange={e => setInputText(e.target.value)} />
        <button>추가</button>
      </form>
    </div>
  );
};
export default DailyView;
