import React, { useEffect } from "react";

const userInterval = (callback, delay) => {
  useEffect(() => {
    const interval = setInterval(callback, delay);
    return () => {
      clearInterval(interval);
    };
  }, [callback, delay]);
};

export default userInterval;
