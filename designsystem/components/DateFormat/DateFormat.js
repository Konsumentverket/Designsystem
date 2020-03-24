/** @jsx jsx */
import { format, parseISO } from 'date-fns'
import sv from 'date-fns/locale/sv'

const defaultDateFormat = "yyyy MM dd HH:mm:ss";
const dateAndTimeFormat = "d MMMM yyyy 'kl.' HH:mm";
const dateFormat = "d MMMM yyyy";
const timeFormat = "'kl.' HH:mm";

const isDate = (date) => {
  return (new Date(date) !== "Invalid Date" && !isNaN(new Date(date)) )
}
  
export const DateFormat = ({date = null, showDate = false, showTime = false}) => {

  if(isDate(date)) {
    const displayFormat = (showDate && showTime) ? dateAndTimeFormat : showDate ? dateFormat : showTime ? timeFormat : defaultDateFormat
    return format(parseISO(date), displayFormat, {locale: sv})
  } else {
    return null
  }
}
