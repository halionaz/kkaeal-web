import { EggInputInterface } from '@/libs/types';
import { parseKoreanDate } from '@kky/ko-date-parse';

// TODO: 알고리즘 고도화, 자연어를 완벽하게 parsing 하여야 함
const getDateFromText = (text: string) => {
  const parsedDateWithFormat = new Date(text);
  if (parsedDateWithFormat.toString() !== 'Invalid Date') return parsedDateWithFormat;
  const parsedDateWithKorean = parseKoreanDate(text);
  if (parsedDateWithKorean) return parsedDateWithKorean;
  return new Date();
};

export const parseInputText = (text: string): EggInputInterface => {
  const splitText = text.split('/');
  const title = splitText[0];
  let parseDate = null;
  if (splitText.length > 1) {
    parseDate = getDateFromText(splitText[1]);
  }
  return {
    title,
    endDate: null,
    endTime: null,
    notes: null,
    repeat: null,
    startDate: parseDate?.toISOString() ?? null,
    startTime: null,
    categoryId: null,
  };
};
