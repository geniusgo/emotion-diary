export const dateFormater = (timeFormatDate) => {
  let year = new Date(timeFormatDate).getFullYear();
  let month = new Date(timeFormatDate).getMonth();
  let date = new Date(timeFormatDate).getDate();

  console.log(new Date(timeFormatDate), timeFormatDate);

  console.log(year, month, date);

  // if (month.length < 2) {
  //   month = '0' + month;
  // }

  // if (date.length < 2) {
  //   date = '0' + date;
  // }
  return `${year}. ${month}. ${date}`;
};
