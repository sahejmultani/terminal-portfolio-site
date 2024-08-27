import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";
import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";


const Experience: React.FC = () => {
  
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== 
  const currentCommand = _.split(history[0], " ");

    FOR FUTURE PORTFOLIO/WEBSITE TO LINK  

   ===== check current command makes redirect ===== 
  if (rerender && currentCommand[0] === "gui") {
    window.open("", "_blank");
  } */

  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my academic and professional experience! </EduIntro> 
      {eduBg.map(({ title, position, info }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="position">{position}</div>
          <div className="info">{info}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Vosyn: Toronto, ON",
    position: "Software Developer - Intern | May 2024 ~ Dec 2024",
    info: "",
  },
  {
    title: "Cogeco Connexion: Burlington, ON",
    position: "Sales Advisor - OBTM Sales Team | June 2023 ~ Present",
    info: "",

  },
  {
    title: "Western Engineering Trillium Hyperloop: University of Western Ontario",
    position: "Software Developer - Software Systems | Sept 2021 ~ Present",
    info: "",

  },
  {
    title: "Western Cultural Dance Company: University of Western Ontario",
    position: "Director of Logistics | Sept 2022 ~ Present",
    info: "s",

  },
];

export default Experience;

