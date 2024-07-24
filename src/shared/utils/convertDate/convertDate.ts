import moment from 'moment/min/moment-with-locales';

import 'moment/locale/ru';

moment.locale('ru');

export const convertDate = (inp: string, format: string) => {
  return moment(inp).format(format);
};
