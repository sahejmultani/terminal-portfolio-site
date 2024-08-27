import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Bachelor of Engineering Science in Computer Engineering",
    desc: "University of Western Ontario | 2020 ~ 2025",
  },
  {
    title: "High School Diploma",
    desc: "Ancaster High School | 2016 - 2020",
  },
];

export default Education;
