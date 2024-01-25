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
          <h2 className="form__title"> On reste en contact ?</h2>
          <div className="form__group">
            <label className="form__label">Nom</label>
            <input className="form__input" type="text" name="user_name" />
            <label className="form__label">Email</label>
            <input className="form__input" type="email" name="user_email" />
            <label className="form__label">Message</label>
            <textarea className="form__textarea" name="message" />
          </div>
        </form>
        {isSubmitting && <p className='sendEmailMessage'>Envoi en cours, veuillez patienter...</p>}
        <Button onClick={sendEmail} buttonText="Envoyer" type="submit" />
      </div>
    </>
  )
}

export default Contact
