import React from "react";
import { useParams } from "react-router-dom";
import { projectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";
import Link from "@material-ui/core/Link";
import WebsiteLink from "@material-ui/icons/Language";

function ProjectDisplay() {
  const { id } = useParams();
  const project = projectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="nothing"/> 
      <div>
        <p>
          <b>Skills:</b> {project.skills}
        </p>
      </div>
      
      <Link href={project.gLink} className="GitHubProjects" target="_blank" >
        <GitHubIcon />
        <h2>Github Link</h2>
      </Link>
      <Link href={project.wLink} className="WebsiteLinkProjects" target="_blank" >
        <WebsiteLink />
        <h2>Web Link</h2>
      </Link>
    </div>
  );
}

export default ProjectDisplay;