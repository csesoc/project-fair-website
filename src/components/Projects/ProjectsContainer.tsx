import React from "react"
import ProjectsItem from "./ProjectsItem"

const ProjectsContainer: React.FC = () => {
  return (
    <div className="px-4 flex-col gap-4">
      <ProjectsItem title="Chaos" iconSrouce="chaos.png">
        <div className="h-[200px] p-2">
          This is chaos with some veri nice things or something idk
        </div>
      </ProjectsItem>
    </div>
  )
}

export default ProjectsContainer
