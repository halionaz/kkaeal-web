import { useDeleteChicken } from '@/domain/chicken/apis/useDeleteChicken';
import { ChickenInterface } from '@/libs/types/chicken';

interface Props {
  chicken: ChickenInterface;
}
const ChickenItem = ({ chicken }: Props) => {
  const { mutate: deleteChicken } = useDeleteChicken();
  return (
    <li key={chicken.id}>
      {chicken.title}
      <button onClick={() => deleteChicken(chicken.id)}>삭제</button>
    </li>
  );
};
export default ChickenItem;
