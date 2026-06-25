import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";
import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Experience: React.FC = () => {
  
  const { history, rerender } = useContext(termContext);

  // Example of using current command in future
  // const currentCommand = _.split(history[0], " ");
  // if (rerender && currentCommand[0] === "gui") {
  //   window.open("", "_blank");
  // }

  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my academic and professional experience! </EduIntro> 
      {eduBg.map(({ title, position, info }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="position">{position}</div>
          {info.length > 0 && (
            <ul className="info">
              {info.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
title: "Cogeco Connexion: Burlington, ON",
position: "Operations Coordinator | Jan 2025 ~ Present",
info: [
"Managed operational workflows using Salesforce and Excel while collaborating with cross-functional teams to support billing accuracy, inventory management, vendor coordination, and process improvement.",
"Analyzed operational and service data to identify inefficiencies, improve business processes, maintain data integrity, and support data-driven decision making.",
"Consistently exceeding sales quota by over 50% through strategic prospecting, building strong client relationships and identified customer need to provide tailored solutions leading to revenue growth."
],
},
{
title: "Vosyn: Toronto, ON",
position: "Software Developer - Intern | May 2024 ~ Dec 2024",
info: [
"Optimized user onboarding and authentication by creating modular components using React, JavaScript, and Redux, which facilitated better maintainability, and scalability. This led to more streamlined development processes and faster implementation of new features and improved efficiency by 50%.",
"Integrated and maintained APIs using to ensure seamless interaction between video/audio playback components and external services. Developed and tested endpoints to support data exchange and synchronization, ensuring consistent functionality across various modules and platforms.",
"Designed and optimized database schemas for video, information, and translation storage using SQL, resulting in improved data retrieval performance and streamlined management. Developed efficient queries and indexing strategies to ensure quick access and minimal latency.",
"Built and maintained backend services using Python and Django to automate data processing and synchronization workflows across distributed applications.",
"Developed REST APIs and backend integrations to support secure data movement, transformation, and synchronization between internal systems and third-party services.",
"Collaborated within Agile development teams using Jira and Postman to test APIs, troubleshoot issues, and deliver scalable software solutions aligned with business requirements."
],
},
{
title: "Western Engineering Trillium Hyperloop: University of Western Ontario",
position: "Software Developer - Software Systems | Sept 2021 ~ Oct 2024",
info: [
"Aiding in the development and firmware on processor boards that control pressure flow and gathered data using IAR embedded workbench in C, and developed software that integrates with testing machines on Arduino Uno on order to generate PWM modulations",
"Engineered embedded C firmware and Arduino-based testing integrations to improve pressure control accuracy, achieving PWM modulation with less than 2% error.",
"Collaborated with multidisciplinary engineering teams to troubleshoot hardware and software integration challenges using serial debugging and oscilloscope measurements.",
"Supported testing, validation, and data collection processes for subsystem performance and reliability improvements."
],
},
{
title: "Western Cultural Dance Company: University of Western Ontario",
position: "Director of Logistics | Sept 2022 ~ April 2024",
info: [
"Developing strategies to improve member engagement, managing external and internal affairs, overseeing team merchandise budgets, and planning and executing large-scale events.",
"Coordinated logistics across multiple stakeholders to ensure successful execution of cultural performances, competitions, and community events."
],
},
];

export default Experience;
