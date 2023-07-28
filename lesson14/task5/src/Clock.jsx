import React, { useEffect, useState } from "react";

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

const Clock = (props) => {
  const [counter, setCounter] = useState({
    date: getTimeWithOffset(props.offset),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter({
        date: getTimeWithOffset(props.offset),
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const { date } = counter;

  return (
    <div className="clock__container">
      <div className="clock__location">{props.location}</div>
      <div className="clock__time">{date.toLocaleTimeString()}</div>
    </div>
  );
};

export default Clock;
