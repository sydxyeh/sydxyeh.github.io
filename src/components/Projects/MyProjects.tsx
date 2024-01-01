import "./Projects.scss";

import { Project } from "./Project";
import { projects } from "./projects";

function Projects() {
  return (
    <div id="projects">
      <h1>Figma Projects</h1>
      <div className="all-projs">
        {projects.map((item) => (
          <Project proj={item} key={item.title} />
        ))}
      </div>
      <h1>Other Design Projects</h1>
    </div>
  );
}

export default Projects;
