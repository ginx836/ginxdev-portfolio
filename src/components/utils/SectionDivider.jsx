import PropTypes from 'prop-types'
import '../../styles/utils/sectiondivider.scss'

const SectionDivider = ({title}) => {
  return (
    <div className='section-divider'>
      <h2 className="section-title">{title}</h2>
      
    </div>
  )
}

SectionDivider.propTypes = {
  title: PropTypes.string.isRequired,
}

export default SectionDivider
