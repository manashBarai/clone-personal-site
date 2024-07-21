"use client"
import React, { useState, useEffect } from 'react';

const formatNumber = (number: number) => (number < 10 ? `0${number}` : number.toString());

const Clock: React.FC = () => {
  const [time, setTime] = useState<string>('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      const formattedHours = formatNumber(hours % 12 || 12);
      const formattedMinutes = formatNumber(minutes);

      setTime(`${formattedHours}:${formattedMinutes} ${ampm}`);
    };

    updateClock(); // Initial call
    const intervalId = setInterval(updateClock, 60000); // Update every minute

    return () => clearInterval(intervalId); // Clean up on component unmount
  }, []);

  return <div className="text-7xl font-mono">{time}</div>;
};

export default Clock;
