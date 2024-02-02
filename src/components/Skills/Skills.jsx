import SkillCard from "../utils/SkillCard/SkillCard";
import PropTypes from "prop-types";
import './skills.scss';
import skillsData from "../../data/skills.json";


const Skills = () => {


  return (
    <section className="skills">
      {skillsData.map((item, index) => (
        <SkillCard key={index} skill={item} />
      ))}
    </section>
  );
}

Skills.propTypes = {
  skill: PropTypes.array.isRequired,
};

export default Skills;