import { formatDistanceToNow, format } from 'date-fns';

export function formatDistanceDate(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}
// format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
export function formatDate(date) {
  return format(new Date(date), 'Pp', { addSuffix: true });
}
