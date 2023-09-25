import React from "react"
import ProjectsItem from "./ProjectsItem"

const ProjectsContainer: React.FC = () => {
  return (
    <div className="px-4 flex-col gap-4">
      <ProjectsItem title="Chaos" iconSource="logos/chaos.png">
        <p>
          Are you allergic to Google Sheets and Excel? Do you have nightmares from browsing through millions of lines of CSV just to pick one applicant to take in?
          <br />
          Introducing Chaos, the ultimate lifesaver for clubs and societies! Say goodbye to the chaos and hello to simplicity. Chaos streamlines everything, making applications a breeze. With a Rust 🦀 backend, type-safe and secure, no more segfaults and losing data! Our minimalistic while aesthetic frontend interface frees your eyes and brains from the repetitive and dull rows and columns of data sheets 📃
        </p>
      </ProjectsItem>
      <ProjectsItem title="Circles" iconSource="/logos/circles.png">
        <p>
          Tired of using a poorly laid out spreadsheet to cobble together a plan to follow for the next 3-8 years of your life? Have no fear, Circles is here!
          <br />
          Circles is a UNSW degree planner where you can explore and validate your degree structure.
          <br />
          You can find a live build of Circles at https://circles.csesoc.app/.
        </p>
      </ProjectsItem>
      <ProjectsItem title="Discord Bot" iconSource="/logos/discord_bot.png">
        <p>
          Discord Bot is your friendly CSE discord companion, offering various features such as checking what week it is, explaining what all DevSoc Projects do, the 24 minigame and more to come!
          <br />
          A sneak peak at coming features:
          <br />
          Weekly Lunch buddy - a speed friending feature for organising and meeting up on-campus each week with like-minded friendly people!
          <br />
          Sydney Trains Delay API - conveniently check if the light rail is down from the comfort of your study room before you get hit with a nasty surprise at Anzac Parade or High Street!
          <br />
          Travel Guide - a database of community-suggested cool places to visit, play and eat at!
        </p>
      </ProjectsItem>
      <ProjectsItem title="Freerooms" iconSource="/logos/freerooms.png">
        <p>
          Freerooms is a tool designed to help UNSW students find empty rooms on campus.
          <br />
          🥾Have you ever wandered around campus, searching for an empty study room?🚪 Have you ever wanted to study somewhere other than the weird smelling ASB🏢, the loud corridors of Ainsworth 🏦 or the poorly decorated main library? 📚 If you are a director or exec, have you ever wanted to find a room for your in-person meetings or society event? Whether you're in need of a quiet study nook or a large space for your society's next big event, Freerooms has got you covered!
        </p>
      </ProjectsItem>
      <ProjectsItem title="Jobsboard" iconSource="logos/jobsboard.png">
        <p>
          Are you tired of hearing your friends talk about their exciting summer internship experiences while feeling left out? Fear not, because Jobsboard has got your back so you can wave goodbye to spending your summer working on projects to put on your resume! Supported by CSESoc's strong partnerships with top tech giants in Australia like Atlassian, IMC, Canva and more, you will have immediate access to opportunities from these companies as soon they become available on Jobsboard!
        </p>
      </ProjectsItem>
      <ProjectsItem title="Notangles" iconSource="/logos/notangles.png">
        <p>
          Class registrations out and you have no clue how your next term is going to pan out? No idea how to come up with a timetable that balances all your classes and social events that you cannot miss? Do not worry! Notangles got your back.
          <br />
          Notangles is your interactive timetable application, that can help you and your friends plan out a weekly schedule by showing you available classes for your courses and allow you to also slot in recurring events that can not be missed. It can also generate a timetable for you by taking in your preferences. Let there be no more timetable-tangles with Notangles!
        </p>
      </ProjectsItem>
      <ProjectsItem title="Structs.sh" iconSource="/logos/structs.png">
        <p>
          Structs.sh is an educational tool for computer science students that visualizes the most fundamental data structures (arrays, linked lists and binary search trees) and algorithms (sorting, searching and traversal).
          <br />
          The team this year is committed to transforming your educational experience by developing an application never seen before: a visual debugger that lets users type in arbitrary C code for our website to visualize the data structure(s) present in memory.
        </p>
      </ProjectsItem>
      <ProjectsItem title="Training Program" iconSource="/logos/training_program.png">
        The Training Program is a 1 term crash-course built to train up students new to or interested in web-dev! We teach the basics of React and JS, then put trainees into groups led by our talented training leads to build a personal project of their own! These personal projects can be anything that you think of, ranging from productivity web apps 📆  to dating apps built just for computer science students 😳. The training program is a place for learning new skills and getting you started on building that new tech idea you've always been thinking about!
      </ProjectsItem>
      <ProjectsItem title="Uni-lectives" iconSource="/logos/unilectives.png">
        <p>
          Sick and tired of searching through websites and forum posts to find the perfect course? Only to discover that it's offered once a year? Or perhaps the workload turned out to be completely different from your expectations? Look no further, Uni-lectives has got your back.
          <br />
          With 1000 unique reviews and counting across a variety of faculties, Uni-lectives is your one stop shop for UNSW courses and electives, where you can access valuable reviews but also contribute your own, empowering others to make informed choices about their degree progression!
        </p>
      </ProjectsItem>
      <ProjectsItem title="Website" iconSource="/logos/website.png">
        <p>
          <b>CMS</b>:
          <br />
          Each year CSESoc creates and publishes a number of blogs, articles, and guides dedicated to exploring interesting topics and helping students with their studies. The CMS aims to make creating these documents easier and more efficient by unifying the system used across portfolios. This year the team has focused on developing the fundamental building blocks blog writers may need such as having sections of code within documents. The CMS team continues to evolve the application with the objective of having concurrent editing capabilities.
          <br />
          <b>Website</b>:
          <br />
          Representing the CSE Society, the website showcases the main features of the community and collates all relevant resources in an easily located manner. Decorated with links to portfolios, guides, sponsors, and relevant social media platforms, the website allows all students to quickly navigate to the service they require.
        </p>
      </ProjectsItem>
    </div>
  )
}

export default ProjectsContainer
