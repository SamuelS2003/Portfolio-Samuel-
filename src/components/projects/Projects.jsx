import React from "react";
import "./Projects.css";
import churn from "../../assets/Churn.jpeg"
import callCenter from "../../assets/Call Center.jpeg"
import retail from "../../assets/Retail.jpeg"

const Projects = () => {
  const projects = [
    {
      name: "Call Center Analysis",
      type: ["Dashboard", "KPI's", "Data Analysis"],
      description: "Analysis to obtain customer satisfaction inregard to the call center and also to note well performing agents in regards to ther speed and rating of reponses",
      image: callCenter, // Replace with your image path
      link: "https://drive.google.com/file/d/1VUMgmLPQna21l4MKllZkO7u85TJgulFH/view?usp=sharing",
    },
    {
      name: "Churn & Customer Retention Analysis",
      type: ["Data Analysis", "Business Analysis"],
      description: "Analysis on Customer risk and customer retention as well as Churn Dataset. Seeking insight from th dataset provided",
      image: churn, // Replace with your image path
      link: "https://drive.google.com/file/d/1flz6BB_-tAxkAXNx_Xu-JD5GVIk5MJ5j/view?usp=sharing" // Update link when ready
    },
    {
      name: "Retail Sales Analysis",
      type: ["Dashboard", "Business Analysis"],
      description: "Analysis on Retail Business, highlighting the Key Perfomance Indicators(KPIs)",
      image: retail, // Replace with your image path
      link: "https://drive.google.com/file/d/1Kk7Ha6O3oc_c1iFK7u9YJEHfQajfAzvY/view?usp=sharing", // Update link when ready
    },
  ];

  return (
    <a id="projects">
      <div className="projects-section dark:bg-gray-800 dark:text-white">
        <h2 className="font-3xl font-semibold">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card dark:bg-gray-800 dark:text-white">
              <img src={project.image} alt={project.name} className="project-image" />
              <div className="h-full project-details dark:bg-gray-900 dark:text-white">
                <h3>{project.name}</h3>
                <div className="project-tags dark:bg-gray-900 dark:text-white">
                  {project.type.map((tag, i) => (
                    <span key={i} className={`tag ${tag.toLowerCase().replace(" ", "-")}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <p>{project.description}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </a>
  );
};

export default Projects;
