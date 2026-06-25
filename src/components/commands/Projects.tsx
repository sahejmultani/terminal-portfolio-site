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

      {projects.map(({ id, title, desc, features, demo }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>

          <ProjectDesc>{desc}</ProjectDesc>

          {demo && (
            <p>
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                🎥 Watch Demo
              </a>
            </p>
          )}

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

const projects = [
  {
    id: 1,
    title: "RouteIQ – Geotab Hackathon",
    desc: "A full-stack fleet analytics platform built during the Geotab Hackathon that transforms raw telematics data into actionable insights through risk analysis, route optimization, and interactive visualizations.",
    features: [
      "Developed a full-stack application using Python, FastAPI, and Next.js to process, analyze, and visualize thousands of telematics records from connected vehicles.",
      "Built backend services that generated driver risk scores by analyzing speeding events, harsh braking, rapid acceleration, and other driving behaviors.",
      "Implemented multithreaded data processing pipelines to improve performance when handling large datasets.",
      "Designed dashboards that converted complex fleet data into easy-to-understand charts, summaries, and route visualizations.",
      "Collaborated in an agile hackathon environment using Git to rapidly prototype, test, and deliver a functional solution within a limited timeframe."
    ],
    demo: "https://www.youtube.com/watch?v=dE6vCrii8gE&feature=youtu.be",
    tab: 2,
  },
  {
    id: 2,
    title: "AeroGrow – Autonomous Agricultural Drone",
    desc: "A fourth-year engineering capstone project focused on developing an autonomous drone capable of monitoring crop health, collecting environmental data, and supporting precision agriculture.",
    features: [
      "Configured and optimized the autonomous flight system using SpeedyBee, iNav, and BN880 GPS hardware, achieving approximately 90% waypoint accuracy.",
      "Designed the computer vision pipeline using Python and OpenCV to analyze captured images and identify unhealthy soybean crops.",
      "Applied image preprocessing, thresholding, and morphological operations to improve plant health detection with approximately 70% accuracy.",
      "Integrated onboard cameras and environmental sensors to automate field monitoring and reduce the need for manual crop inspections.",
      "Worked closely with a multidisciplinary engineering team to combine embedded systems, autonomous navigation, and computer vision into a single solution."
    ],
    tab: 2,
  },
  {
    id: 3,
    title: "NBA Stat Tracker",
    desc: "A full-stack web application that allows users to browse, search, and manage NBA player, team, and game statistics through a responsive interface.",
    features: [
      "Developed the frontend using React.js and built RESTful APIs with Node.js and Express for seamless communication between the client and server.",
      "Designed a normalized MySQL database to efficiently store player statistics, team information, game results, and historical data.",
      "Implemented CRUD functionality that allows users to add, edit, delete, and search statistical records.",
      "Optimized SQL queries and indexing to achieve response times under 100ms for frequently accessed data.",
      "Created reusable React components and responsive layouts to improve scalability, maintainability, and user experience."
    ],
    tab: 2,
  },
  {
    id: 4,
    title: "Katch-Up (Chat App)",
    desc: "A command-line, real-time chat application built in C++ that enables multiple users to communicate through a client-server architecture using socket programming.",
    features: [
      "Developed the backend server in C++ to efficiently manage multiple client connections simultaneously.",
      "Implemented TCP socket programming on Linux to establish reliable real-time communication between connected users.",
      "Designed message routing logic that ensured fast and efficient communication between multiple chat clients.",
      "Optimized networking performance, reducing overall communication latency by approximately 50% during testing.",
      "Strengthened knowledge of operating systems, concurrency, multithreading, and low-level network programming."
    ],
    tab: 2,
  },
  {
    id: 5,
    title: "Superhero App",
    desc: "A MERN stack web application that allows users to create, manage, and share superhero profiles while providing secure user authentication.",
    features: [
      "Built the application using MongoDB, Express.js, React, and Node.js following a full-stack architecture.",
      "Implemented secure authentication using JWT and protected routes to ensure only authenticated users could access private features.",
      "Used bcrypt to securely hash and store user passwords within MongoDB.",
      "Developed complete CRUD functionality for creating, updating, deleting, and viewing superhero profiles.",
      "Designed reusable React components and RESTful APIs to create a responsive, scalable, and maintainable application."
    ],
    tab: 2,
  },
  {
    id: 6,
    title: "Weather App",
    desc: "A real-time weather application that combines interactive maps, live search, and weather APIs to provide current forecasts for locations worldwide.",
    features: [
      "Built the backend using Python and Flask while integrating the OpenWeatherMap API to retrieve real-time weather information.",
      "Optimized backend data processing by approximately 30%, improving response speed and application performance.",
      "Developed an interactive world map using Leaflet.js that allows users to quickly explore weather conditions by location.",
      "Implemented AJAX requests and live city autocomplete for seamless weather updates without page reloads.",
      "Displayed current conditions, temperature, humidity, wind speed, and forecast information through a clean and responsive interface."
    ],
    tab: 2,
  },
];

export default Projects;