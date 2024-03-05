import dayjs from 'dayjs';

const useDateTimeFormatter = () => {
  const getTimestamp = (hour = 1) => {
    return dayjs().startOf('hour').add(hour, 'hour').unix();
  };

  return {
    getTimestamp,
  };
};

export default useDateTimeFormatter;
