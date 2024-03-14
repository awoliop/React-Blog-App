import React, { useEffect, useState } from "react";

const useWindowSize = () => {
  const [WindowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    /*
    // ➡️➡️➡️ONE WAY OF WRITING THE CLEANUP FUNCTION OR WE CAN DO AS BELOW!!⬅️⬅️⬅️ 
    const cleanUp = () => {
      console.log("Runs if the useEffect dependency changes!!");
      window.removeEventListener("resize", handleResize);
    };
    // to call in the cleanUp function that prevent memory Link we use as a return and not a normal function call !!
    return cleanUp;
    */
    // cleanup function runs for when there is a change in the useEffect dependencies!
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // returning windowSize, so we can import and use its attributes!!
  return WindowSize;
};

export default useWindowSize;
