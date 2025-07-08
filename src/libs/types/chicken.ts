export type ChickenType = 'MEMO' | 'ROUTINE' | 'WEEKLY' | 'EVENT';

export interface ChickenInterface {
  id: number;
  created_at: string;
  title: string;
  description: string | null;
  user_id: string;
  type: ChickenType;
}
