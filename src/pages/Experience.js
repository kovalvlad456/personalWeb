import React from "react";
import { VerticalTimeline, VerticalTimelineElement,  } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import { AssessmentSharp } from "@material-ui/icons";

function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">

            <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    date="2017 - 2021"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title"> 
                        John Cabot Catholic Secondary School
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Mississauga, ON
                    </h4>
                    <p> Ontario Secondary School Diploma achieved with honour roll and certificate of completion in Business Studies. </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-element--activities" 
                    date="Oct 2019 - Feb 2020"
                    iconStyle={{ background: "#90EE90", color: "#fff" }}
                    icon={<AssessmentSharp />}
                >
                    <h3 className="vertical-timeline-element-title"> 
                        VP of Technology - Junior Achievement
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Toronto, ON
                    </h4>
                    <p> Learned how to create and run an efficient and profitable business </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-element--work" 
                    date="Feb 2020 - Oct 2020"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title"> 
                        Cashier/Customer Service - NoFrills
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Mississauga, ON
                    </h4>
                    <p> Handled financial transactions by receiving payments from customers and providing them with the correct change or processing their payments through electronic means. </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-element--education" 
                    date="Sep 2021 - April 2025"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Bachelors of Science - University of Western Ontario
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        London, ON
                    </h4>
                    <p> Specialization in Computer Science. </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-element--work" 
                    date="May 2022 - Dec 2022"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title"> 
                        Mover - Office Move Pro
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Mississauga, ON
                    </h4>
                    <p> Helped office move furntinure, technology, and paperwork/file systems to desired locations. </p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className="vertical-timeline-element--work" 
                    date="May 2023 - Aug 2023"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title"> 
                        Software Developer Intern - VenueVision
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Greater Toronto Area, Canada · Remote
                    </h4>
                    <p>
                        - Participated in the full software development lifecycle, from design and coding to testing and deployment. <br />
                        - Helped develop new features and functionalities for existing applications. <br />
                        - Debugged and resolved software defects and issues as they arose.
                    </p>
                </VerticalTimelineElement>


                <VerticalTimelineElement 
                    className="vertical-timeline-element--work" 
                    date="May 2023 - Present"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title"> 
                        Software Developer - Octal4
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Toronto, Ontario, Canada · On-site
                    </h4>
                    <p>
                        - Built and maintained applications on the Appian platform using MySQL and XML. <br />
                        - Integrated APIs for real-time data exchange and external service connectivity. <br />
                        - Developed document automation and customized features to meet client needs. <br />
                        - Participated in planning, testing, and issue resolution to ensure performance and reliability.
                    </p>
                </VerticalTimelineElement>

                

                
            </VerticalTimeline>
        </div>
    );
    
}

export default Experience;