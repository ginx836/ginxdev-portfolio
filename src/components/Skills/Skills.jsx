import SkillCard from "../utils/SkillCard/SkillCard";
import PropTypes from "prop-types";
import './skills.scss';

const Skills = ({ skillsData }) => {
  return (
    <section className="skills">
      {skillsData.map((item, index) => (
        <SkillCard key={index} skill={item} />
      ))}
    </section>
  );
}

Skills.propTypes = {
  skillsData: PropTypes.array.isRequired,
};

export default Skills;