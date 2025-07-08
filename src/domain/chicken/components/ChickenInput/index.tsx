import { useState } from 'react';

import { usePostChicken } from '@/domain/chicken/apis/usePostChicken';

const ChickenInput = () => {
  const [value, setValue] = useState('');
  const { mutate: postChicken } = usePostChicken();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postChicken(value);
    setValue('');
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={value} onChange={onChange} />
      <button type="submit">추가</button>
    </form>
  );
};
export default ChickenInput;
