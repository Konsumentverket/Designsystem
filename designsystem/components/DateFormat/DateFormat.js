import { format, parseISO } from 'date-fns'
import sv from 'date-fns/locale/sv'

export const defaultDateFormat = "yyyy MM dd HH:mm:ss";
export const dateAndTimeFormat = "d MMMM yyyy 'kl.' HH:mm";
export const dateFormat = "d MMMM yyyy";
export const timeFormat = "'kl.' HH:mm";



const isDate = (date) => {
  return (new Date(date) !== "Invalid Date" && !isNaN(new Date(date)) )
}

const DateFormat = ({date = null, showDate = false, showTime = false}) => {
  if(isDate(date)) {
    const displayFormat = (showDate && showTime) ? dateAndTimeFormat : showDate ? dateFormat : showTime ? timeFormat : defaultDateFormat

    return format(parseISO(date), displayFormat, {locale: sv})

  } else {
    return null
  }
}

export default DateFormat
