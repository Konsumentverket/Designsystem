import { format, parseISO } from 'date-fns'
import sv from 'date-fns/locale/sv'

const defaultDateFormat = "dd MMMM yyyy"
const defaultTimeFormat = "HH:mm:ss"

const isDate = (date) => {
  return (new Date(date) !== "Invalid Date" && !isNaN(new Date(date)) )
}

const DateFormat = ({date = null, dateFormat = defaultDateFormat, timeFormat = defaultTimeFormat}) => {
  if(isDate(date)) {
    const parsedDate = parseISO(date)
    return format(parsedDate, dateFormat+' '+timeFormat, {locale: sv})
  } else {
    return null
  }
}

export default DateFormat
