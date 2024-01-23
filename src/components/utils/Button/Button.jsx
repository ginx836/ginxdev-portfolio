import PropTypes from 'prop-types'
import './button.scss'

const Button = ({ onClick, buttonText }) => (
  <button className="button" type="button" onClick={onClick}>
    <span className="button-text">{buttonText}</span>
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Button
