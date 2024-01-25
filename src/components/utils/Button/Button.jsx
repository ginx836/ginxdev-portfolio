import PropTypes from 'prop-types'
import './button.scss'

const Button = ({ onClick, buttonText, type = 'button' }) => (
  <button
    className={type === 'submit' ? 'button submit' : 'button'}
    type={type}
    onClick={onClick}
  >
    <span className="button-text">{buttonText}</span>
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
}

export default Button
