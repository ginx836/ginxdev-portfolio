import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/utils/Button/Button'
import '../styles/pages/contacts.scss'

const Contact = () => {
  const form = useRef()
  const navigate = useNavigate()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    emailjs
      .sendForm(
        'service_icloud',
        'template_n1a27lm',
        form.current,
        import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY,
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
        <form className="form" ref={form} onSubmit={sendEmail}>
          <h1 className="form__title"> On reste en contact ?</h1>
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
        </form>
        {isSubmitting && (
          <p className="sendEmailMessage">
            Envoi en cours, veuillez patienter...
          </p>
        )}
        <Button onClick={sendEmail} buttonText="Envoyer" type="submit" />
      </div>
    </>
  )
}

export default Contact
