import {useState, useEffect} from 'react';
import dayjs from 'dayjs';

const useTimer = (endTime: number) => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const updateTimer = () => {
      const currentTime = Math.floor(Date.now() / 1000);
      const remainingTime = Math.max(0, endTime - currentTime);
      setTime(remainingTime);
    };

    const interval = setInterval(() => {
      updateTimer();
    }, 1000);

    updateTimer();

    return () => clearInterval(interval);
  }, [endTime]);

  const formattedTime = dayjs().startOf('day').second(time).format('HH:mm:ss');

  return {time, formattedTime};
};

export default useTimer;
