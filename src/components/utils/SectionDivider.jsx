import PropTypes from 'prop-types'

const SectionDivider = ({title}) => {
  return (
    <div>
      <h2 className="section-title">{title}</h2>
      
    </div>
  )
}

SectionDivider.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SectionDivider
