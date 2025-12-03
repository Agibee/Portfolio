import { useState, useEffect } from "react";
import CircularText from "./CircularText";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="w-screen h-screen fixed inset-0 flex items-center justify-center bg-black z-50">
      <CircularText
        text="Loading • Please Wait • "
        spinDuration={10}
        onHover="goBonkers"
        className="text-cyan-400"
      />
    </div>
  );
};

export default PreLoader;
