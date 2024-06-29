import { formatDistanceToNow } from 'date-fns';

export function formatDistanceDate(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}
