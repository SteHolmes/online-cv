import BackButton from '@/components/Buttons/BackButton'
import ContactForm from '@/components/ContactForm/ContactForm'
import ContactAnimation from '@/components/ContactAnimation/ContactAnimation'

export default function Contact() {
  return (
    <div className="pageTransition pageTransition--type">
      <div className="pageContent">
        <BackButton />
        <h1>Get In Touch</h1>
        <section>
          <div className="container">
            <div className="dualColumnLayout">
              <div className="column column--primary">
                <p className="introText">Want to get in touch? Fill out the contact form below to send me a message and I'll get back to you asap.</p>
                <p>Alternatively, you can email me at <a href="mailto:steveholmesdev@gmail.com">steveholmesdev@gmail.com</a>.</p>
                <ContactForm />
              </div>
              <div className="column column--secondary">
                <ContactAnimation />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
