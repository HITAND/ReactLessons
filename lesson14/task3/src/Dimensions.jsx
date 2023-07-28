import React, { useState, useEffect } from "react";

const Dimensions = () => {
  const [dimensions, setDimemsions] = useState({
    width: null,
    height: null,
  });

  useEffect(() => {
    const { innerWidth, innerHeight } = window;
    setDimemsions({ width: innerWidth, height: innerHeight });
    const handleResize = (e) => {
      const { innerWidth, innerHeight } = e.target;
      setDimemsions({ width: innerWidth, height: innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      // debugger;
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const { width, height } = dimensions;
  return <div className="dimensions">{`${width}px - ${height}px`}</div>;
};

export default Dimensions;
