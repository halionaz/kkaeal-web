import { useGetChickens } from '@/domain/chicken/apis/useGetChickens';

import ChickenItem from '@/domain/chicken/components/ChickenItem';
import ChickenInput from '@/domain/chicken/components/ChickenInput';

const HomePage = () => {
  const { data } = useGetChickens();

  return (
    <div>
      <ul>
        {data?.map(chicken => (
          <ChickenItem key={chicken.id} chicken={chicken} />
        ))}
      </ul>
      <ChickenInput />
    </div>
  );
};
export default HomePage;
