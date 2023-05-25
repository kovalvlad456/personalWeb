import React from 'react';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import  AlternateEmail  from "@material-ui/icons/AlternateEmail";
import Link from "@material-ui/core/Link";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home">
            <div className="about">
                <h2> Hi, My Name is Vlad Koval</h2>
                <div className="prompt">
                    <p> I am a computer science student with a strong focus on technology and software development. I strive to enhance my skills and create innovative solutions to real-world challenges. </p>
                    <Link href="https://www.linkedin.com/in/vlad-koval-664683206/" className="Linkedin" target="_blank" >
                        <LinkedInIcon />
                    </Link>
                    <Link href="https://github.com/kovalvlad456" className="GitHub" target="_blank" >
                        <GitHubIcon />
                    </Link>
                    <Link href="mailto:vladkovalemail@gmail.com" className="Email" target="_blank" >
                        <AlternateEmail />
                    </Link>
                </div>
            </div>
            <dic className="skills">
                <h1> Skills </h1>
                <ol className="list">
                    <li className="item">
                        <h2> Front-End </h2>
                        <span> ReactJS, HTML, CSS, MaterialUI, Yarn, XML</span>
                    </li>

                    <li className="item">
                        <h2> Back-End </h2>
                        <span> NodeJS, Java, Python, C, MySQL, JavaScript</span>
                    </li>

                    <li className="item">
                        <h2> Programming Languages </h2>
                        <span> Java, Python, C, JavaScript, HTML, CSS, MySQL, Assembly, Linux </span>
                    </li>

                    <li className="item">
                        <h2> Personal Skills </h2>
                        <span> 
                            Customer Service, Organization, Excel, PowerPoint, Data Analysis, 
                            Time Management, Public Relation, MS Access 
                        </span>
                    </li>

                </ol>
            </dic>
        </div>
    );
    
}

export default Home;