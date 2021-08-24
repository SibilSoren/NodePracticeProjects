const getDate = () => {
  let date = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let presentDay = date.toLocaleDateString("en-US", options);
  return presentDay;
};

const getDate2 = () => {
  let date = new Date();
  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };
  let presentDay = date.toLocaleDateString("en-US", options);
  return presentDay;
};

module.exports = { getDate, getDate2 };
