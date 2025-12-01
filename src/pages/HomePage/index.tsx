import { useGetEggs } from '@/domain/home/apis/useGetEggs';
import { usePostEggs } from '@/domain/home/apis/usePostEggs';
import { RepeatType } from '@/libs/types';
import { useState } from 'react';

const HomePage = () => {
  const { mutate: postEgg } = usePostEggs();
  const { data } = useGetEggs();

  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState<string | null>(null);
  const [startTime, setStartTime] = useState<string | null>(null);
  const [endDate, setEndDate] = useState<string | null>(null);
  const [endTime, setEndTime] = useState<string | null>(null);
  const [repeat, setRepeat] = useState<RepeatType>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(title, startDate, startTime, endDate, endTime, repeat);
    postEgg(
      {
        title,
        notes: null,
        startDate,
        startTime,
        endDate,
        endTime,
        repeat,
      },
      {
        onSuccess: () => {
          setTitle('');
          setStartDate(null);
          setStartTime(null);
          setEndDate(null);
          setEndTime(null);
          setRepeat(null);
        },
      },
    );
  };

  return (
    <div>
      <ul>
        {data?.map(egg => (
          <li key={egg.id}>{egg.title}</li>
        ))}
      </ul>
      <form onSubmit={onSubmit}>
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        <button>추가</button>
      </form>
    </div>
  );
};
export default HomePage;
