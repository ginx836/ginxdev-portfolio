import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import { FaPhoneSquare } from 'react-icons/fa'
import { IoMailSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import Button from '../utils/Button/Button'
import './contacts.scss'

const Contact = () => {
  const form = useRef()
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)

  // Function to send the email with EmailJS.
  const sendEmail = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs
      .sendForm(
        'service_icloud', // service ID
        'template_n1a27lm', // template ID
        form.current,
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY, // public KEY
      )
      .then(
        (result) => {
          console.log(result.text)
          setIsSubmitting(false)
          navigate('/')
        },
        (error) => {
          console.log(error.text)
          setIsSubmitting(false)
        },
      )
  }

  return (
    <>
      <div className="contact">
        <div className="contact__info">
          <div className="contact-item">
            <h3 className="contact-item__title">
              <p className="contact-item__phone">
                <FaPhoneSquare />
                (+33) 06 61 21 72 42
              </p>
            </h3>
          </div>
          <div className="contact-item">
            <h3 className="contact-item__title">
              Vous préférez me contacter directement ?{' '}
            </h3>
            <p className="contact-item__mail">
              <IoMailSharp />
              <a
                href="mailto:cedric.bourquin1@icloud.com"
                className="contact-item__link"
              >
                cedric.bourquin1@icloud.com
              </a>
            </p>

            <p className="contact-item__text"></p>
          </div>
        </div>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <div className="form__group">
            <label htmlFor="user_name" className="form__label">
              Nom
            </label>
            <input
              id="user_name"
              className="form__input"
              type="text"
              name="user_name"
            />
            <label htmlFor="user_email" className="form__label">
              Email
            </label>
            <input
              id="user_email"
              className="form__input"
              type="email"
              name="user_email"
            />
            <label htmlFor="message" className="form__label">
              Message
            </label>
            <textarea id="message" className="form__textarea" name="message" />
          </div>
          <div className="submit-group">
            <p
              className="sendingText"
              style={{ opacity: isSubmitting ? 1 : 0 }} // If isSubmitting is true, opacity is 1, else opacity is 0.
            >
              Envoi en cours, veuillez patienter...
            </p>
            <Button onClick={sendEmail} buttonText="Envoyer" type="submit" />
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact
