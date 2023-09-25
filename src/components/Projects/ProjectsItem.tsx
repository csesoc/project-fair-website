import React, { useState } from "react"
import CheveronDown from "../../assets/Icons/ChevronDown"
import { twMerge } from "tailwind-merge"

type TProjectsItem = {
  children?: string | JSX.Element | JSX.Element[]
  title: string
  iconSource?: string
  imgContainerClassname?: string
}

const ProjectsItem: React.FC<TProjectsItem> = ({ children, title, iconSource: iconSource, imgContainerClassname }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="my-4">
      <button 
        className="relative z-50 w-full text-black/90 flex justify-center items-center bg-[#ADB5F9] rounded-md py-2"
        onClick={() => setExpanded(state => !state)}
      >
        <div className="flex items-center gap-2">
          <img className={twMerge("h-[1.25rem]", imgContainerClassname)} src={iconSource} />
          <h2 className="text-xl">{title}</h2>
        </div>

        <div className={`absolute right-8 ${expanded && "rotate-180"} transition-all`}>
          <CheveronDown />
        </div>
      </button>

      <div className={`${expanded || "h-0"} transition-all`}>
        <div className={`w-full bg-[#C6CBFF] text-black/90 rounded-xl origin-top ${expanded || "scale-y-0"} transition-all p-3`}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default ProjectsItem
