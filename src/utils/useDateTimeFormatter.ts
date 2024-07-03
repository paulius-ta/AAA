import dayjs from 'dayjs';

const useDateTimeFormatter = () => {
  const getTimestamp = (hour = 1) => {
    return dayjs().startOf('hour').add(hour, 'hour').unix();
  };

  const formatTimestamp = (timestampString: string) => {
    return dayjs(timestampString).format('DD-MM-YY, HH:mm:ss');
  };

  return {
    getTimestamp,
    formatTimestamp,
  };
};

export default useDateTimeFormatter;
