export const FormatTime = (datetime) => {
  const options = { hour: 'numeric', minute: 'numeric', hour12: true };
  const dateObj = new Date(datetime); // Convert the datetime string to a Date object
  return new Intl.DateTimeFormat('es-MX', options).format(dateObj);
}
