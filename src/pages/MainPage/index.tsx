import { useState } from 'react';

import * as s from './style.css';

import DailyView from '@/domain/main/components/DailyView';
import WeeklyView from '@/domain/main/components/WeeklyView';
import MonthlyView from '@/domain/main/components/MonthlyView';
import { ViewType } from '@/libs/types';
import { getHeaderText } from '@/domain/main/utils/getHeaderText';

const MainPage = () => {
  // TODO: 쿼리 파라미터로 변경
  const [view, setView] = useState<ViewType>('daily');
  const [baseDate, setBaseDate] = useState<Date>(new Date());

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
        <h1>{getHeaderText(baseDate, view)}</h1>
        <button className="mgc_transformation_fill" onClick={onViewChange} />
      </header>
      {view === 'daily' && <DailyView />}
      {view === 'weekly' && <WeeklyView />}
      {view === 'monthly' && <MonthlyView />}
    </div>
  );
};

export default MainPage;
