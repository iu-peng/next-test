import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return dateString && <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}
