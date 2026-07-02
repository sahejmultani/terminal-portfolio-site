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
        degree in <HighlightAlt>Computer Engineering</HighlightAlt> (Class of
        2025).
      </p>

      <p>
        I'm a software engineer who enjoys building products from the ground
        up. My interests include full-stack development, backend systems,
        embedded software, data engineering, and AI-powered applications. I
        enjoy designing scalable systems that solve real-world problems, whether
        that's developing cloud-based applications, building APIs, or connecting
        software with hardware.
        <br />
        <br />
        Outside of coursework and internships, I spend a lot of my free time
        building personal projects and exploring new technologies. I'm naturally
        curious and enjoy learning by creating—taking an idea from concept to a
        working product. I also regularly use AI development tools to prototype
        ideas, improve workflows, and accelerate development while maintaining
        strong engineering fundamentals.
        <br />
        <br />
        I enjoy collaborating with others, but I'm equally comfortable taking
        ownership of a project from start to finish. Whether I'm learning a new
        framework, improving a system's architecture, or solving a challenging
        bug, I'm always looking for opportunities to grow as an engineer.
        <br />
        <br />
        Outside of software, you'll usually find me playing basketball or
        volleyball, playing chess, or practicing Bhangra. I enjoy activities
        that combine strategy, teamwork, and continuous improvement, and I try
        to bring that same mindset into everything I build.
      </p>

      <p>
        I am a <HighlightAlt>Canadian citizen</HighlightAlt> and am open to
        opportunities anywhere across <HighlightAlt>Canada</HighlightAlt> or the{" "}
        <HighlightAlt>United States</HighlightAlt>. For U.S. positions, I am
        eligible to work under a <HighlightAlt>TN visa</HighlightAlt>, which
        typically only requires employer sponsorship through an employment offer
        letter.
      </p>

      <p>
        I believe the best way to learn is by building. Whether it's a personal
        project, a hackathon, or a new business idea, I'm always looking for
        the next challenge. Thanks for stopping by! Feel free to reach out using
        the <HighlightSpan>"email"</HighlightSpan> command or use the{" "}
        <HighlightSpan>"socials"</HighlightSpan> command to connect with me on
        LinkedIn.
      </p>
    </AboutWrapper>
  );
};

export default About;