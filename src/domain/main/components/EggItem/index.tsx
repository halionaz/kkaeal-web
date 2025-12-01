import { EggInterface } from '@/libs/types';

interface Props {
  egg: EggInterface;
}
const EggItem = ({ egg }: Props) => {
  return <li>{egg.title}</li>;
};

export default EggItem;
