import { useEffect, useState } from "react";

import { SPINNER } from "@/config/spinner";

export const DotSpinner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SPINNER.length);
    }, 75);

    return () => clearInterval(intervalId);
  }, []);

  return <div className="text-sm">{SPINNER[currentIndex]}</div>;
};
