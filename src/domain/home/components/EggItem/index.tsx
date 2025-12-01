import { EggInterface } from '@/libs/types';

interface Props {
  data: EggInterface;
}
const EggItem = ({ data }: Props) => {
  return <div>{data.title}</div>;
};

export default EggItem;
