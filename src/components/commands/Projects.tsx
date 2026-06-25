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
    title: "RouteIQ – Geotab Hackathon",
    desc: "A data-driven risk analysis and route optimization platform built using telematics data.",
    features: [
      "Developed a data-driven risk analysis platform using Python, FastAPI, and Next.js to process, analyze, and visualize large telematics datasets, generating actionable operational insights.",
      "Built analytical services for risk scoring, route optimization, and large-scale data processing using Python and multithreaded backend architecture to support data-driven decision making."
    ],
    tab: 2,
  },
  {
    id: 2,
    title: "AeroGrow – Autonomous Agricultural Drone",
    desc: "A capstone project focused on autonomous agricultural monitoring and crop health analysis.",
    features: [
      "Collaborated with my capstone team to configure and optimize flight systems using SpeedyBee, iNav, and BN880 GPS, ensuring 90% waypoint accuracy and stable autonomous operation.",
      "Designed the image processing system, leveraging Python and OpenCV, to analyze onboard camera footage and detect soybean crop health using morphological processing with 70% accuracy."
    ],
    tab: 2,
  },
  {
    id: 3,
    title: "NBA Stat Tracker",
    desc: "A web application for tracking and managing NBA statistics.",
    features: [
      "Utilized React.js, Node.js, and Express to create a responsive web app for an NBA database and implemented RESTful APIs for seamless UI-database communication achieving a 99.9% uptime.",
      "Engineered MySQL DBMS with normalized tables to effectively store and manage NBA statistics, ensuring data integrity and efficient retrieval with queries with response times optimized to under 100ms."
    ],
    tab: 2,
  },
  {
    id: 4,
    title: "Katch-Up (Chat App)",
    desc: "A chat application for real-time communication.",
    features: [
      "Engineered the server-side components of a real-time CLI chat application in C++, focusing on optimizing message routing for Linux and implemented methods to ensure all communication is efficient.",
      "Used socket programming techniques to establish a robust communication infrastructure, allowing users to exchange messages seamlessly and reduced latency by 50%."
    ],
    tab: 2,
  },
  {
    id: 5,
    title: "Superhero App",
    desc: "A superhero wiki-style application for creating and sharing hero profiles.",
    features: [
      "Using MERN stack, used JWT tokens and React for the front end while creating a robust backend with Node.js and Express.",
      "Used MongoDB to manage, authenticate, and hash user data with the help of bcrypt."
    ],
    tab: 2,
  },
  {
    id: 6,
    title: "Weather App",
    desc: "A weather application with an interactive world map.",
    features: [
      "Using a Python and Flask backend, integrated OpenWeatherMap API to provide real-time forecasts and optimized data processing by 30% for enhanced accuracy and user experience.",
      "Developed an interactive, user-friendly map with Leaflet and JavaScript, featuring live city suggestions and AJAX-based data updates for seamless weather information retrieval."
    ],
    tab: 2,
  },
];

export default Projects;
