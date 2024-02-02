import PropTypes from 'prop-types'

const SkillCard = ({ skill }) => {

  return (
    <div className="skillCard">
      <h3 className='skillCard-title'>{skill.title}</h3>
      <p className='skillCard-description'>{skill.description}</p>
      {skill.tags && skill.tags.length > 0 && (
        <ul className="skillCard-tags">
          {skill.tags.map((tag, index) => (
            <li className="tag" key={index}>{tag}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

SkillCard.propTypes = {
  skill: PropTypes.object.isRequired,
}

export default SkillCard
