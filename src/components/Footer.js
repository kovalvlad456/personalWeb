import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import  AlternateEmail  from "@material-ui/icons/AlternateEmail";
import "../styles/Footer.css";
import Link from "@material-ui/core/Link";

function Footer(){
    return (
        <div className="footer">
            <div className="socialMedia">
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
            <p> &copy; 2023 vladkoval.com </p>
        </div>

    );
    
}

export default Footer;