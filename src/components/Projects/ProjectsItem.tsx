import React, { useState } from "react"
import CheveronDown from "../../assets/Icons/CheveronDown"

type TProjectsitem = {
  children?: string | JSX.Element | JSX.Element[]
}

const ProjectsItem: React.FC<TProjectsitem> = ({ children }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div>
      <button 
        className="relative z-50 w-full text-black/90 flex justify-center items-center bg-[#ADB5F9] rounded-md py-2"
        onClick={() => setExpanded(state => !state)}
      >
        <h2 className="text-xl">Chaos</h2>

        <div className={`absolute right-8 ${expanded && "rotate-180"} transition-all`}>
          <CheveronDown />
        </div>
      </button>

      <div className="relative">
        <div className={`absolute -top-8 z-10 w-full bg-[#C6CBFF] text-black/90 rounded-xl origin-top ${expanded || "scale-y-0"} transition-all`}>
          <div className="mt-8">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectsItem
