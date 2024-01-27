import PropTypes from 'prop-types'
import './button.scss'

const Button = ({ onClick, buttonText, type = 'button', href }) => {
  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={type === 'submit' ? 'button submit' : 'button'}
      >
        <span>{buttonText}</span>
      </a>
    )
  }

  return (
    <button
      className={type === 'submit' ? 'button submit' : 'button'}
      type={type}
      onClick={onClick}
    >
      <span>{buttonText}</span>
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  buttonText: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['button', 'submit']),
  href: PropTypes.string,
}

export default Button
