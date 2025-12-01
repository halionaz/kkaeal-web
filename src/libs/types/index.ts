// 미수행 일정 정보
export interface EggInterface {
  // 기본 정보
  id: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
  categoryId: string | null;

  title: string;
  notes: string | null;

  // 시간 관련
  startDate: string | null; // null이면 단순 메모
  startTime: string | null; // null이면 all day
  endDate: string | null; // null이면 단순 메모
  endTime: string | null; // null이면 all day

  // 반복 정보
  repeat: RepeatType;
}

export type EggInputInterface = Omit<EggInterface, 'id' | 'userId' | 'createdAt' | 'updatedAt'>;

export type RepeatType = {
  type: 'daily' | 'weekly' | 'monthly' | 'yearly';
  interval: number;
  repeatDaysOfWeek?: number[]; // weekly용: [0,1,2,3,4,5,6]
  repeatDayOfMonth?: number; // monthly용: 1-31
} | null;

// 수행된 일정 정보
export interface FryInterface {
  // 기본 정보
  id: string;
  eggId: string;
  userId: string;
  friedAt: string;
  updatedAt: string;

  // 내용
  title: string;
  notes: string | null;

  startDate: string | null;
  startTime: string | null;
  endDate: string | null;
  endTime: string | null;
}

export interface CategoryInterface {
  id: string;
  userId: string;
  name: string;
  color: string;
  icon: string;
}

export type ViewType = 'daily' | 'weekly' | 'monthly';
