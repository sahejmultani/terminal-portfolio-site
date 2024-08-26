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
        I'm <HighlightAlt>a Computer Software Engineering</HighlightAlt> student at the University of Western Ontario
        graduating in the class of 2025 .
      </p>
      <p>
        I am passionate about writing codes and <br />
        developing web applications to solve real-life challenges.
      </p>
    </AboutWrapper>
  );
};

export default About;
