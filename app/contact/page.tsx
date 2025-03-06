import BackButton from '@/components/Buttons/BackButton'
import ContactForm from '@/components/ContactForm/ContactForm'

export default function Contact() {
  return (
    <div className="pageTransition pageTransition--type">
      <div className="pageContent">
        <BackButton />
        <h1>Get In Touch</h1>
        <section>
          <div className="contentCard">
            <ContactForm />
          </div>
        </section>
      </div>
    </div>
  );
}
