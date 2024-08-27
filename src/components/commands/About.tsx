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
        I'm a<HighlightAlt> Computer Software Engineering</HighlightAlt> student at the University of Western Ontario
        graduating in the class of 2025.
      </p>
      <p>
        I am a skilled software engineer, with most of my experience falling in full-stack development but <br />
        also am highly proficient in embedded systems development and data engineering. From my academic and <br />
        professional experiences, I bring a great understanding in many aspects such as end-to-end software <br />
        development, agile methodologies, technology, and more. Combined with a resiliancy and passion to be <br />
        as effective as possible and an eager learner, I will showcase my talents and become an effective<br />
        member of any team!<br /> 

        <br />
        In my free time I enjoy playing basketball and volleyball and recently started getting more into cultural <br />
        culturual dancing (bhangra). If you ever need an extra player on your team I'll be there and guarantee a win <br/>
        I would love to get in touch! Send me an email by using the "email" command!
        </p>
    </AboutWrapper>
  );
};

export default About;
