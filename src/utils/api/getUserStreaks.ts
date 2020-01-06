import asyncRequest from 'async-request';
import cheerio from 'cheerio';

import dateStringToDate from '../dateStringToDate';

export interface IStreakModel {
  streakCurrent: number,
  currentStreakStart: Date,
  currentStreakEnd: Date,
  contributionGraph: string,
}

export default async (username: string): Promise<IStreakModel> => {
  const { body: html } = await asyncRequest(`https://github.com/${username}`);
  const $ = cheerio.load(html);
  const days = $('.js-calendar-graph rect.day').get().reverse();

  let streakCurrent: number = 0;
  let currentStreakStart: string = '';
  let currentStreakEnd: string = days[0].attribs['data-date'];

  days.some((day: CheerioElement, idx: number) => {
    const currentDayCount = parseInt(day.attribs['data-count']);

    if (!idx && !currentDayCount) {
      currentStreakEnd = days[1].attribs['data-date'];
    } else {
      if (!currentDayCount) {
        return true;
      }

      streakCurrent++;
      currentStreakStart = day.attribs['data-date'];
    }
  });

  return {
    streakCurrent,
    currentStreakStart:
      dateStringToDate(currentStreakStart),
    currentStreakEnd:
      dateStringToDate(currentStreakEnd),
    contributionGraph:
      $('.js-calendar-graph-svg').html() || '',
  };
};
