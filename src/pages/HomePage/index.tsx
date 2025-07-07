import { useGetSchedule } from '@/domain/schedule/apis/useGetSchedule';
import { usePostSchedule } from '@/domain/schedule/apis/usePostSchedule';
import { useState } from 'react';

const HomePage = () => {
  const [value, setValue] = useState('');
  const { data } = useGetSchedule();
  const { mutate: postSchedule } = usePostSchedule();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postSchedule(value);
    setValue('');
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  console.log(data);

  return (
    <div>
      <ul>
        {data?.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
      <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChange} />
        <button type="submit">추가</button>
      </form>
    </div>
  );
};
export default HomePage;
