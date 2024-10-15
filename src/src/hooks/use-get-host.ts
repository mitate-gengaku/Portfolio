import { useEffect, useState } from "react";

export const useGetHost = () => {
  const [host, setHost] = useState<string>("");

  useEffect(() => {
    setHost(window.location.href);
  }, []);

  return {
    host,
  };
};
