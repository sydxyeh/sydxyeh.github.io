import "./Projects.scss";

import { Project } from "./Project";
import { projects } from "./projects";

// get collection of images
const sortedProjects = projects.sort((a, b) => b.year - a.year);

function Projects() {
  return (
    <div id="projects">
      {/* <h1>Figma Projects</h1> */}
      <div className="all-projs">
        {sortedProjects.map((item) => (
          <Project proj={item} key={item.title} />
        ))}
      </div>
      <h1>Other Design Projects</h1>
    </div>
  );
}

export default Projects;
