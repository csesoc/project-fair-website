import React from "react"
import HeaderBanner from "./components/HeaderBanner"
import Introduction from "./components/Introduction"
import ProjectsContainer from "./components/Projects/ProjectsContainer"

const App: React.FC = () => {
  return (
    <div className="w-screen h-screen bg-[#DBC9F5]">
      <HeaderBanner />

      <div className="px-4">
        <Introduction className="mt-16 mb-8" />

        <h3 className="mb-8 text-black/90">
          Here are our exciting projects:
        </h3>

        <ProjectsContainer />
      </div>
    </div>
  )
}

export default App
