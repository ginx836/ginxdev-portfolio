import './button.scss'

const Button = ({ onClick, buttonText }) => (
  <button className="button" type="button" onClick={onClick}>
    <span className="button-text">{buttonText}</span>
  </button>
)

export default Button
