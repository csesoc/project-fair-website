import React, { useEffect, useState } from "react";
import DoubleChevronDown from "../assets/Icons/DoubleChevronDown";

const HeaderBanner: React.FC = () => {
  const MOBILE_WIDTH = 768;
  const [isMobile, setMobile] = useState(false);

  const updateMobile = () => {
    setMobile(window.innerWidth < MOBILE_WIDTH);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMobile);
    return () => {
        window.removeEventListener("resize", updateMobile);
    }
  }, []);

  // Wacky layout and programming lol
  return isMobile ? (
    <div className="relative bg-[url('mobile/clouds.png')] w-full aspect-[9/16] bg-cover flex flex-col items-center justify-center">
      <img src="mobile/fair_text.png" />

      <h1 className="absolute text-[8vw] top-[30%] text-center">Welcome to</h1>
      <img src="robot.png" className="absolute top-[110vw] -left-[20vw]" />

      <div className="absolute text-black/90 -bottom-3">
        <DoubleChevronDown />
      </div>
    </div>
  ) : (
    <div className="relative bg-[url('desktop/clouds.png')] w-full aspect-video bg-cover flex flex-col items-center justify-center">
      <img src="desktop/fair_text.png" />

      <h1 className="absolute text-[6vw] top-[30%] text-center">Welcome to</h1>
      <img src="robot.png" className="absolute -left-[20vw]" />

      <div className="absolute text-black/90 -bottom-3">
        <DoubleChevronDown />
      </div>
    </div>
  );
}

export default HeaderBanner;
