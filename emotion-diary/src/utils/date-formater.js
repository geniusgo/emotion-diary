export const dateFormater = (timeFormatDate) => {
  console.log(new Date(timeFormatDate));
  let year = new Date(timeFormatDate).getFullYear().toString();
  let month = (new Date(timeFormatDate).getMonth() + 1).toString();
  let date = new Date(timeFormatDate).getDate().toString();

  console.log(year, month, date);

  if (month.length < 2) {
    month = '0' + month;
  }

  if (date.length < 2) {
    date = '0' + date;
  }

  return `${year}. ${month}. ${date}`;
};
