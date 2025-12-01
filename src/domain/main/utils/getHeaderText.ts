import { ViewType } from '@/libs/types';

export const getHeaderText = (baseDate: Date, view: ViewType) => {
  if (view === 'daily') {
    if (baseDate.toLocaleDateString() === new Date().toLocaleDateString()) {
      return 'Today';
    }
    return baseDate.toLocaleDateString();
  }
  if (view === 'weekly') {
    const month = baseDate.toLocaleDateString('ko-KR', { month: 'long' });
    const day = baseDate.getDate();
    const firstDay = new Date(baseDate.getFullYear(), baseDate.getMonth(), 1);
    const firstDayOfWeek = firstDay.getDay();
    const week = Math.ceil((day + firstDayOfWeek) / 7);
    return `${month} ${week}주`;
  }
  if (view === 'monthly') {
    return baseDate.toLocaleDateString('ko-KR', {
      month: 'long',
    });
  }
};
