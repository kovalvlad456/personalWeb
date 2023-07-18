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
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <Link href={project.gLink} className="GitHub" target="_blank" >
        <GitHubIcon />
      </Link>
      <Link href={project.wLink} className="WebsiteLink" target="_blank" >
        <WebsiteLink />
      </Link>
    </div>
  );
}

export default ProjectDisplay;