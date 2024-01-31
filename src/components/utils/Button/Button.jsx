import PropTypes from 'prop-types'

/**
 * Button component.
 * @param {object} props - The props object.
 * @param {function} props.onClick - The function to execute on click.
 * @param {string} props.buttonText - The text to display on the button.
 * @param {string} props.type - The type of the button.
 * @param {string} props.href - The href of the button.
 * @returns {JSX.Element} The button component.
 */


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
