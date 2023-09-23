import React from "react"
import DoubleCheveronDown from "../assets/Icons/DoubleCheveronDown"

const HeaderBanner: React.FC = () => {
  // Wacky layout and programming lol
  return (
    <div className="relative bg-[url('clouds.png')] w-full aspect-video bg-cover flex flex-col items-center justify-center">
      <img src="fair_text.png" />

      <h1 className="absolute text-[6vw] top-[30%] text-center">Welcome to</h1>
      <img src="robot.png" className="absolute -left-[20vw]" />

      <div className="absolute text-black/90 -bottom-3">
        <DoubleCheveronDown />
      </div>
    </div>
  )
}

export default HeaderBanner
