import { parseISO, format } from 'date-fns';
import { es } from 'date-fns/locale';

export const DateFormat = (date_as_string) => {
  if(!date_as_string) return '';
  // Parse the input string as ISO 8601 format (ensure it's treated correctly)
  const parsedDate = parseISO(date_as_string);
  // Format the date in 'es-MX' locale
  const formattedDate = format(parsedDate, "eeee dd 'de' MMMM yyyy", { locale: es });
  return formattedDate;
}