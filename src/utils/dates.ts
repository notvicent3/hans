import formatDistanceToNow from 'date-fns/formatDistanceToNow'

export const formatFromNow = (time: number | Date) => formatDistanceToNow(time, { addSuffix: true })
