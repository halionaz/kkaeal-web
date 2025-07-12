export type ChickenType = 'MEMO' | 'ROUTINE' | 'WEEKLY' | 'EVENT';

export type CycleType = 'FIXED' | 'INTERVAL';
export type PeriodType = 'DAY' | 'WEEK' | 'MONTH' | 'YEAR';

export interface CycleInterface {
  type: CycleType;
  period: PeriodType;
  interval?: number; // INTERVAL 일 때 사용
  time?: string; // FIXED_DAY일 때 사용, 'hh:mm' 형식
  days?: number[]; // FIXED_WEEK일 때 사용, 0~6[] 형식
  dates?: number[]; // FIXED_MONTH일 때 사용, 1~31[] 형식
  months?: number[]; // FIXED_YEAR일 때 사용, 1~12[] 형식
}

export interface ChickenInterface {
  id: number;
  created_at: string;
  title: string;
  notes: string | null;
  user_id: string;
  type: ChickenType;
  category_id: number | null;
  priority: number; // 1 ~ 5
  cycle?: CycleInterface;
}
