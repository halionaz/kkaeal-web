import { useGetEggs } from '@/domain/main/apis/useGetEggs';
import { usePostEggs } from '@/domain/main/apis/usePostEggs';
import { useState } from 'react';

import * as s from './style.css';
import { parseInputText } from '@/domain/main/utils/parseInputText';
import { getHeaderText } from '@/domain/main/utils/getHeaderText';
import EggItem from '@/domain/main/components/EggItem';

interface Props {
  baseDate: Date;
}
const DailyView = ({ baseDate }: Props) => {
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
      <h2 className={s.Header}>{getHeaderText(baseDate, 'daily')}</h2>
      <ul className={s.List}>
        {data?.map(egg => (
          <EggItem key={egg.id} egg={egg} />
        ))}
      </ul>
      <form className={s.Form} onSubmit={onSubmit}>
        <div className={s.FormContainer}>
          <input type="text" value={inputText} onChange={e => setInputText(e.target.value)} />
          <button type="submit">추가</button>
        </div>
      </form>
    </div>
  );
};
export default DailyView;
