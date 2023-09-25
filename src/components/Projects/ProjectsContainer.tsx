import React from "react"
import ProjectsItem from "./ProjectsItem"

const ProjectsContainer: React.FC = () => {
  return (
    <div className="px-4 flex-col gap-4">
      <ProjectsItem title="Chaos" iconSource="logos/chaos.png">
        Are you allergic to Google Sheets and Excel? Do you have nightmares from browsing through millions of lines of CSV just to pick one applicant to take in?

        Introducing Chaos, the ultimate lifesaver for clubs and societies! Say goodbye to the chaos and hello to simplicity. Chaos streamlines everything, making applications a breeze. With a Rust 🦀 backend, type-safe and secure, no more segfaults and losing data! Our minimalistic while aesthetic frontend interface frees your eyes and brains from the repetitive and dull rows and columns of data sheets 📃
      </ProjectsItem>
      <ProjectsItem title="Circles" iconSource="/logos/circles.png">

      </ProjectsItem>
      <ProjectsItem title="Discord Bot" iconSource="/logos/discord_bot.png">

      </ProjectsItem>
      <ProjectsItem title="Freerooms" iconSource="/logos/freerooms.png">

      </ProjectsItem>
      <ProjectsItem title="Jobsboard" iconSource="logos/jobsboard.png">
        Are you tired of hearing your friends talk about their exciting summer internship experiences while feeling left out? Fear not, because Jobsboard has got your back so you can wave goodbye to spending your summer working on projects to put on your resume! Supported by CSESoc’s strong partnerships with top tech giants in Australia like Atlassian, IMC, Canva and more, you will have immediate access to opportunities from these companies as soon they become available on Jobsboard!
      </ProjectsItem>
      <ProjectsItem title="Notangles" iconSource="/logos/notangles.png">

      </ProjectsItem>
      <ProjectsItem title="Structs.sh" iconSource="/logos/structs.png">

      </ProjectsItem>
      <ProjectsItem title="Training Program" iconSource="/logos/training_program.png">
        The Training Program is a 1  term crash-course built to train up students new to or interested in web-dev! We teach the basics of React and JS, then put trainees into groups led by our talented training leads to build a personal project of their own! These personal projects can be anything that you think of, ranging from productivity web apps 📆  to dating apps built just for computer science students 😳. The training program is a place for learning new skills and getting you started on building that new tech idea you've always been thinking about!
      </ProjectsItem>
      <ProjectsItem title="Unilectives" iconSource="/logos/unilectives.png">

      </ProjectsItem>
      <ProjectsItem title="Website" iconSource="/logos/website.png">

      </ProjectsItem>
    </div>
  )
}

export default ProjectsContainer
