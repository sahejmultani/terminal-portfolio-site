import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id }) => {
        id === parseInt(arg[1]);
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        Check out some of my projects!
      </ProjectsIntro>
      {projects.map(({ id, title, desc, features }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
          {features.length > 0 && (
            <ul>
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}
        </ProjectContainer>
      ))}
    </div>
  );
};

// Updated projects array with features as arrays
const projects = [
  {
    id: 1,
   
    title: "The RNOBRD",
    desc: "A new business idea currently under production shhhhhhh.",
    features: ["Feature 1: fhfhf", "Feature 2: s"], // Example features
    tab: 2,
  },
  {
    id: 2,
    title: "NBA Stat Tracking App",
    desc: "An application to track mock NBA stats. Intended for management to view player progression/stock value but open to all for viewing!",
    features: [
      "Utilized React.js, Node.js, and Express to create a responsive web app for an NBA database and implemented RESTful APIs for seamless UI-database communication achieving a 99.9% uptime.",
	    "Engineered MySQL DBMS with normalized tables to effectively store and manage NBA statistics, ensuring data integrity and efficient retrieval with queries with response times optimized to under 100ms"
    ], 
    tab: 2,
  },
  {
    id: 3,
    title: "Katch-Up (Chat App)",
    desc: "A chat application for real-time communication!",
    features: [
      "Engineered the server-side components of a real-time CLI chat application in C++, focusing on optimizing message routing for Linux and implemented methods to ensure all communication is efficient.",
	    "Used socket programming techniques to establish a robust communication infrastructure, allowing users to exchange messages seamlessly and reduced latency by 50%."
    ], 
    tab: 2,
  },
  {
    id: 4,
    title: "Superhero App",
    desc: "A superhero wikipedia-like app where the user is able to create a profile for viewing and sharing their favourite heroes!",
    features: [
      "Using MERN stack, used JWT tokens and React for the front end while creating a robust backend with Node.js, Express, managed a database of 10,000+ hero records and engineering RESTful API endpoints.",	
      "Used MongoDB to manage, authenticate, and hash user data with the help of bcrypt."
    ], 
    tab: 2,
  },
  {
    id: 5,
    title: "Weather App",
    desc: "A weather app with an interactive map allowing the user to see data for any city in the world!",
    features: [
      "Using a Python and Flask backend, integrated OpenWeatherMap API to provide real-time forecasts and optimized data processing by 30% for enhanced accuracy and user experience.",
      "Developed an interactive, user-friendly map with Leaflet and JavaScript, featuring live city suggestions and AJAX-based data updates for seamless weather information retrieval." 
      ], 
    tab: 2,
  },
];

export default Projects;
