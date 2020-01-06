export const dateStringToDate = (dateString: string) => {
  const [day, month, year]: number[] =
    dateString.split('-').map((v: string) => parseInt(v));
  return new Date(year, month - 1, day)
}

export default dateStringToDate;
