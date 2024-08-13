import React, { useEffect, useState } from "react";

interface CountdownProps {
  endTime: Date;
}

const Countdown: React.FC<CountdownProps> = ({ endTime }) => {
  const [time, setTime] = useState<string>("00:00:00");

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const timeDifference = endTime.getTime() - now.getTime();

      if (timeDifference <= 0) {
        setTime("00:00:00");
        return;
      }

      const totalSeconds = Math.floor(timeDifference / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTime(
        `${hours < 10 ? `0${hours}` : hours} : ${
          minutes < 10 ? `0${minutes}` : minutes
        } : ${seconds < 10 ? `0${seconds}` : seconds}`
      );
    };

    updateCountdown(); // Initial call to set the time immediately
    const intervalId = setInterval(updateCountdown, 1000);
    return () => clearInterval(intervalId);
  }, [endTime]);

  return (
    <div className="w-[fit-content] md-w-100 bg-gray-700 text-white py-4 px-8 rounded-lg ">
      <p className="text-xs font-normal">Auction ends in:</p>
      <h2 id="countdown" className="text-4xl font-semibold">
        {time}
      </h2>
      <div className="flex justify-between mt-2">
        <p className="text-xs font-normal">Hours</p>
        <p className="text-xs font-normal">Minutes</p>
        <p className="text-xs font-normal">Seconds</p>
      </div>

      <div className="flex justify-center mt-3">
        <button
          type="submit"
          className=" gap-2  rounded-3xl text-white bg-purple-400 hover:bg-purple-600   focus:ring-4 focus:outline-none focus:ring-purple-700  text-sm w-full sm:w-auto px-16 py-[15px] text-center dark:bg-purple-700 dark:hover:bg-purple-500 duration-500 "
        >
          <p className="font-semibold">Place Bid</p>
        </button>
      </div>
    </div>
  );
};

export default Countdown;
