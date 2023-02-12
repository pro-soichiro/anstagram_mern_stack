const strToDate = (strDate) => {
  return new Date(strDate);
}

const dateFormat = (dt, type = "-") => {
  var y = dt.getFullYear();
  var m = ("00" + (dt.getMonth() + 1)).slice(-2);
  var d = ("00" + dt.getDate()).slice(-2);
  return y + type + m + type + d;
}

const strToDateAndFormat = (dateString, type) => {
  const dt = strToDate(dateString);
  return dateFormat(dt, type)
};

export { strToDateAndFormat };
