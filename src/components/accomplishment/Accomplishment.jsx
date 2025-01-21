import React from "react";
import "./Accomplishments.css";
import Forage from "../../assets/Forage.png";
import DataCamp from "../../assets/datacamp.svg"


const Accomplishments = () => {
  const accomplishments = [
    {
      title: "Virtual Internship at PwC Switzerland",
      platform: "Forage",
      date: "2024",
      description: [
        "Conducted in-depth analysis of customer satisfaction, retention rates, and churn data, identifying key trends and insights to drive strategic decision-making for the company",
        "Utilized advanced statistical methods to analyze customer feedback data, resulting in a 10% increase in overall customer satisfaction scores.",
        "Collaborated with cross-functional teams to create a predictive model based on the churn dataset, which reduced customer attrition by 15% within the first quarter of implementation."],
      certificateLink: "https://drive.google.com/file/d/1yTo4WNJPh4SKUSRuiGVJd-XiV3YN9zHY/view?usp=drive_link",
    },
    {
      title: "Virtual internship at Tata Group",
      platform: "Forage",
      date: "2024",
      description: [
        "Developed and executed a comprehensive data visualization strategy for Tata Consultancy Services, resulting in a 20% increase in client satisfaction metrics.",
        "Prepared detailed reports and visual aids for client senior leadership meetings, leading to a 15% improvement in decision-making efficiency.",
        "Utilized advanced software tools to create interactive and impactful data visuals that assisted executives in identifying key opportunities, resulting in a 10% increase in revenue generation.",
      ],
      certificateLink: "https://drive.google.com/file/d/1bTyRjvL3cyTpo2eeWzTrd5Gf_brhKqgw/view?usp=sharing",
    },
    {
      title: "Data Analyst Associate",
      platform: "DataCamp",
      date: "2024",
      description: [
        "Earned the DataCamp Data Analyst Associate Certification, validating proficiency in data manipulation, visualization, and analysis using Python and SQL.",
        "Demonstrated expertise in cleaning, transforming, and analyzing complex datasets to derive actionable insights.",
        "Developed and presented impactful visualizations and dashboards to communicate key findings effectively.",
        "Acquired practical knowledge in statistical analysis, exploratory data analysis (EDA), and hypothesis testing.",
        "Strengthened problem-solving skills by completing hands-on projects and real-world case studies.",
      ],
      certificateLink: "https://www.datacamp.com/certificate/DAA0012214238229",
    },
  ];

  const getLogo = (platform) => {
    switch (platform) {
      case "Udemy":
        return Udemy;
      case "Microsoft Learn":
        return MsLearn
      case "DataCamp":
        return DataCamp;
      case "Forage":
        return Forage;
      default:
        return null; // If no logo, return null or a default logo
    }
  };

  return (
    <div className="accomplishments-section w-full bg-secondary dark:bg-gray-900 dark:text-white">
      <h2 className="font-3xl font-semibold">Accomplishments</h2>
      {accomplishments.map((accomplishment, index) => (
        <div key={index} className="accomplishment-card dark:bg-gray-800 dark:text-white">
          <div className="accomplishment-header">
            <img
              src={getLogo(accomplishment.platform)}
              alt={accomplishment.platform}
              className="platform-logo"
            />
            <div>
              <h3 className="font-serif">{accomplishment.title}</h3>
              <p>
                {accomplishment.platform} &nbsp;•&nbsp; {accomplishment.date}
              </p>
            </div>
          </div>
          <ul>
            {accomplishment.description.map((line, i) => (
              <li key={i}>{line}</li>
            ))}
          </ul>
          <a
            href={accomplishment.certificateLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            See certificate
          </a>
        </div>
      ))}
    </div>
  );
};

export default Accomplishments;
