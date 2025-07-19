import { useState, useEffect } from 'react';

function useDimension() {
  const [dimension, setDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {
      setDimension({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return dimension;
}

export default useDimension;
