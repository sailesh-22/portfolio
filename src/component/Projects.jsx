import Backbutton from "./Backbutton";
import ProjectCard from "./ProjectCard";


const projects = [
  {
    title: 'Project 1',
    description: 'Description for project 1.',
    image: 'https://via.placeholder.com/400',
    link: '#',
  },
  {
    title: 'Project 2',
    description: 'Description for project 2.',
    image: 'https://via.placeholder.com/400',
    link: '#',
  },
  // Add more projects as needed
];


const Projects = () => {
  return (
    <>
      <div className="section-wrapper">
        <div className="background">PROJECTS</div>
          <div className="projects">
            <div className="project-flex">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
      </div>
      <Backbutton/> 
    </>
  )
}

export default Projects