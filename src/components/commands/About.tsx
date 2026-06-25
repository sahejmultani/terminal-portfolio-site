import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
        <p>
          Hi, my name is <HighlightSpan>Sahej Multani</HighlightSpan>!
        </p>

        <p>
          I recently graduated from the University of Western Ontario with a
          degree in <HighlightAlt>Computer Engineering</HighlightAlt> (Class of 2025).
        </p>

        <p>
          I’m a software engineer focused on full-stack development, embedded systems,
          and data-driven applications. I’m also interested in data engineering and
          embedded systems, and I enjoy building scalable systems that connect software
          with real-world impact — from backend infrastructure to hardware-level
          programming and data platforms.
          <br />
          <br />
          I love working with new technologies and building things from the ground up.
          Through my academic and professional experience, I’ve developed strong skills
          in end-to-end software development, Agile workflows, and collaborating in
          cross-functional teams.
          <br />
          <br />
          Outside of work, I enjoy playing basketball and volleyball, playing chess,
          and recently getting into cultural dancing (Bhangra). I like anything that
          combines strategy, teamwork, or rhythm.
          <br />
          <br />
          I’d love to connect — feel free to reach out using the "email" command!
        </p>
    </AboutWrapper>
  );
};

export default About;
