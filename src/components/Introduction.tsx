import React from "react"
import { twMerge } from "tailwind-merge"

type TIntroduction = {
  className?: string
}

const Introduction: React.FC<TIntroduction> = ({ className = "" }) => {
  return (
    <div className={twMerge("flex flex-col gap-4 items-center justify-center", className)}>
      <div className="text-center text-black/90">
        <h3>
          Hello 👋 This is our website for our exciting Projects Fair, where you can walk around and get to know some of our talented developers and tehir projects, and see how they can benefit you UNSW life and planning. 
        </h3>

        <br />

        <h3>
          👀 Scroll down for a description of all projects
        </h3>

        <br />

        <h3>
          We are also running a small competition for our event, which you can find out more by clicking the button below:
        </h3>
      </div>

      <a className="px-4 py-4 rounded-full bg-[#485EBE]" href="#">
        Project Challenges
      </a>
    </div>
  )
}

export default Introduction
