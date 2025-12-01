import { useState } from 'react';

import * as s from './style.css';

import DailyView from '@/domain/main/components/DailyView';
import WeeklyView from '@/domain/main/components/WeeklyView';
import MonthlyView from '@/domain/main/components/MonthlyView';
import { ViewType } from '@/libs/types';

const MainPage = () => {
  // TODO: 쿼리 파라미터로 변경
  const [view, setView] = useState<ViewType>('daily');
  const [baseDate] = useState<Date>(new Date());

  const onViewChange = () => {
    setView(prev => {
      if (prev === 'daily') return 'weekly';
      if (prev === 'weekly') return 'monthly';
      return 'daily';
    });
  };

  return (
    <div className={s.Wrapper}>
      <header className={s.Header}>
        <h1 className={s.Title}>🐣 깨알</h1>
        <button className="mgc_transformation_fill" onClick={onViewChange} />
      </header>
      {view === 'daily' && <DailyView baseDate={baseDate} />}
      {view === 'weekly' && <WeeklyView />}
      {view === 'monthly' && <MonthlyView />}
    </div>
  );
};

export default MainPage;
